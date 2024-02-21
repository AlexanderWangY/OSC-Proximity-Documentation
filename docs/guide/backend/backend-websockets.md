# Websocket API

Websockets are used to enable real-time messaging through a constant connection between a client and our server. While Node.js has a native WebSocket implementation, we've opted to use Socket.io since it simplifies a lot of our work.

:::info
As WebSockets are needed for both portions of our project, a client implementation of socket.io is used in the front end. In the future this should be documented in the [Services](./frontend-services) page.
:::

## Socket.io Walkthrough

Socket.io is a library that allows us to rather easily perform certain actions when a client sends certain websocket requests to the server. For example, logic can run when a client
connects or disconnects to the server, or tells it when it wants to update its location or send a new message. 

Let's take a look at one of our methods `socket.on('update_location')`. We will walkthrough from the client sending us a request, to how it updates our database.

```typescript
// index.ts
socket.on('updateLocation', async (message, ack) => {
  // ack stands for 'acknowledgement'
  console.log(`[WS] Recieved new location from user <${socket.id}>.`)
  try {
    const lat = Number(message.lat)
    const lon = Number(message.lon)
    const success = await updateUserLocation(socket.id, lat, lon)
    if (success) {
      console.log("[WS] Location updated in database successfully.")
      if (ack) ack("location updated")
    } else {
      throw Error("     updateUserLocation() failed.")
    }
  } catch (error) {
    console.error("[WS] Error calling updateLocation:", error.message)
  }
  })
})
```

Here, `socket.on()` creates a new *event listener* that will *listen* for the particular message *updateLocation* from the client (which will be sent by `socket.emit('updateLocation')` from it).
We require the client to also pass some data along with it ([JSON](https://www.w3schools.com/whatis/whatis_json.asp) data in the `message` parameter).
With this data, we run a couple checks. First, to make sure that the `lat` and `lon` parameters exist, and then to make sure that they are both numbers (there should also be a check to make sure that they are real geographical coordinates but I (Phoenix) forgot to add this ^^, making an issue in a sec).

If the checks run without any errors, we then pass this data to the `updateUserLoction()` function from `actions/updateUser.ts`. 

```typescript
// actions/updateUser.ts
export const updateUserLocation = async (userId: string, lat: number, lon: number) => {
    try {
        const userRef = doc(users, userId)
        const userDoc = await getDoc(userRef)

        if (!userDoc.exists()) throw Error("[EXP] User does not exist.")

        const hash = geohashForLocation([lat, lon])

        updateDoc(userRef, { lat: lat, lon: lon, geohash: hash })
        return true
    } catch (error) {
        console.error(error.message)
        return false
    }
}
```

Additionally, this function also has checks to make sure that the data passed to it is correct (but this time, through type checking in the function header).
We then try to grab a `user` doc from the `users` colletion. Another check is made to make sure that the returned doc from Firestore exists.

Then finally, we create a geohash, and update our user doc with the new `lat`, `lon`, and `geohash` information. We return true if the database update was successful, and false otherwise.
Inspecting `index.ts` again, we can see how this returned value affects our try/catch block for error checking.

```typescript
//index.ts
    if (success) {
      console.log("[WS] Location updated in database successfully.")
      ...
    } else {
      throw Error("     updateUserLocation() failed.")
    }
  } catch (error) {
```

This is so we can be *certain* wether or not our update worked for debugging purposes. I encourage you to write similar error checking code with any functions that talk to
the database, since a variety of potential failures can happen once a request is sent to it.

### ack
Additionally, the client should also know the status of the requests that it sends to the server. This is done by the `ack()` parameter, standing for *acknoledgement*.
This parameter will only be called if a similar parameter (e.g. `res` for *result*) is included in the `emit()` function from the client, sending the request to the server.
In the case that it isn't, this parameter will not be passed to our `socket.on()` function, so `ack()` won't run, which is why we include an `if` statement with it.

## Request types (similar to REST routes)
**`connection` (*connect*)**
* Create a User (to be called *connectedUser*) document, using `socket.id` (the client socket id) as the id of the Firestore document.
* Establish socket connection with client.

**`disconnect`**
* Delete user document corresponding to the connected socket.
* End socket connection with client.

**`ping`**
* Acks with `pong` to client, used to test connection.

**`updateUser`**
* Update the location data (`lat`, `lon`, `geohash`) of connected client's User document.

**`message`**
* Create a message document with User's current location data, and push this message to the socket ids of nearby users.
* Expected data:
  * userId (string) (socket id of client)
  * msgId (string)
  * msgContent (string)
  * lat (number)
  * lon (number)
  * geohash (string)
  * timeSent (number)
