# Routes

## What are routes?

An [API](https://en.wikipedia.org/wiki/API) route is a particular http endpoint (usually denoted by the `/` path placed at the end of a URL). 
As our server's API is called from the client with an HTTP request, we can parse the route that it is searching for, perform the action which the client wants it to do, and return data accordingly.

Furthermore, HTTP has different types of requests:
* GET - denotes that data should be returned
* POST - denotes that data should be created
* PUT - denotes that data should be updated
* DELETE - denotes that data should be deleted

:::info
These types of requests are related to the more complicated REST principle for developing APIs. It is not necessary to know everything about this, but you can [learn more here](https://en.wikipedia.org/wiki/REST) if you're interested.
:::

While these requests are a general guide for how our server should respond to the client, we can also have each of these call the same route, and enact a different action. 

Here is a non-specific example of how HTTP requests work in combination web servers.

![Express routing mechanism](/imgs/expressRoutingMechanism.jpg)


## Routes

:::warning
Our current API has an outdated implementaion for sending and recieving message objects before we started converting to websockets. The below messages section is now deprecated.
:::

### Messages (deprecated)

**GET** /messages

* return the 100 newest messages from Firestore

**GET** /messages?msgId=\<msgId\>

* return a message document with a matching msgId

**GET** /messages?broadLat=\<broadLat\>&broadLon=\<broadLon\>

* return all messages with matching broadLat and broadLon attributes

**GET** /messages?broadLat=\<broadLat\>&broadLon=\<broadLon\>&secondsSinceCreation=\<seconds since creation\>

* return all messages with matching broadLat and broadLon attributes, and
* has a timeCreated attribute that is with the bounds of secondsSinceCreation

**POST** /messages

* add a Message document to the Messages collection in Firestore

**DELETE** /messages?msgId=\<msgId\>

* Delete a message document with the corresponding msgId

### Users

**GET** /users?userId=\<userId\>

* return a user document with a matching userId

**POST** /users

* add a user docment to the Users collection in Firestore

**PUT** /users?userId=\<userId\>&specificLat=\<specificLat\>&specificLon=\<specificLon\>

*  update specificLat and specificLon location attributes of a user with matching userId to values specified in the query

**DELETE** /users?userId=\<userId\>

* Delete a user document with the corresponding userId
