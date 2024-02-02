# REST API

## What is this API?
This API uses http requests (the same type of request your web browser makes when connecting to a website) for sending and retrieving data. We determine what data
to send, and what functionality to perform from the type of request and the route being requested from a client.

Note, that while this API is important, actual client devices will not be communicating to the server with this API besides for a few small cases. Instead, it will 
mostly use our websocket API, enabling realtime communication with a different protocol. This is very important for quick messaging, and will be explained more in the [Websocket API](./backend-websockets.md) section.
However, to manually manipulate the database, for moderation or administrative purposes, this API serves a very important role.


## What are routes?

An [API](https://en.wikipedia.org/wiki/API) route is a particular HTTP endpoint (usually denoted by the `/` path placed at the end of a URL). 
As our server's API is called from the client with an HTTP request, we can parse the route that it is searching for, perform the action which the client wants it to do, and return data accordingly.

Furthermore, HTTP has different types of [requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods:
* GET - denotes that data should be returned
* POST - denotes that data should be created
* PUT - denotes that data should be updated
* DELETE - denotes that data should be deleted

:::info
These types of requests are related to the more complicated REST principle for developing APIs. It is not necessary to know everything about this, but you can [learn more here](https://en.wikipedia.org/wiki/REST) if you're interested.
:::

While these requests are a general guide for how our server should respond to the client, we can also have each of these call the same route, and enact a different action. 
Here is a non-specific example of how HTTP requests work in combination with web servers.

![Express routing mechanism](/imgs/expressRoutingMechanism.jpg)


## Routes

### Users (ConnectedUsers)
**GET `/users?lat&lon&radius`**
* Return all users present within a radius of a geographic center point

**POST `/users`**
* Add a new user to the users collection in Firestore
* Message body must contain:
  * displayName (string)
  * userId (string)
  * avatarUrl (string)
  * lat (number)
  * lon (number)
  * geohash (string)

**PUT `/users?userId&toggleConnection=true`**
* Flips the value a user's isConnected (bool) attribute
* Note: toggleConnection must be set to true

**PUT `/users?userId&lat&lon`**
* Update a user's location

**DELETE `/users?userId`**
* Delete a user document

