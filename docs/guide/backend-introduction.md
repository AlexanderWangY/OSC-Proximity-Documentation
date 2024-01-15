# Backend

## What is the backend?

Our backend webserver is what we use for the frontend to communicate to our database and to other clients. For example, we might want to store a new message, and push it to all connected users within 100 meters of its sender. These are operations that the frontend can't do, nor the database be able to do by itself, so we need a server as our middleman.

As we already write our frontend in TypeScript, we've opted to use it in our bakcned along with Node.js, for consistency's sake. Node.js is a JavaScript runtime, meaning, we can run a JavaScript server on our computers (whereas traditionally the language could only be used in a web browser). The TypeScript code compiles into JavaScript, making this possible.

## Our database

For our database, we've elected to use [Firebase's Cloud Firestore](https://firebase.google.com/products/firestore), which is ran by Google. Reasons for why we're using this vary from cost to simplicity while working with Node. Firebase also has a variety of other services we may use if we finish our MVP and release our app to the public.

A clear description of many function parameters can be found in the [Firestore Reference](https://firebase.google.com/docs/reference/js/firestore_.md#@firebase/Firestore).

## Express.js

[Express.js](https://expressjs.com/) is the framework we use to respond to http requests send from the client. More on this in the routes section.

## Directory structure

This explanation pertains to everything inside of `server/src` in our codebase.

### index.ts

This is the entry point to the server, or the first file invoked when the server runs. It contains code that decides what to do when an http request is recieved, and manages client webscoket connections.

### /actions

This directory contains files which contain code that speak directly to the database. We segment most things into files with *create*, *get*, *update*, and *delete* operations, following the [CRUD](https://en.wikipedia.org/wiki/Create%2C_read%2C_update_and_delete) acronym. The main reason for this segmentation is for readability purposes (we don't want an index file with thousands of lines of code for you to search through).

### /types

This directory contains files which hold type information, a working with a feature of TypeScript. These types correlate to how we store [documents and collections](https://firebase.google.com/docs/firestore/data-model) in our database. Using these types throughout our code helps us catch errors when a certain attribute isn't being accounted for, or if one is being implemented incorrectly.

### /utilities

This directory contains files which perform functionality related to operating the server itself. For example, connecting to Firestore.
