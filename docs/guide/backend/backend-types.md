# Firestore Collections & Types

To implement functionality for users and messages, we have to organize information in our database.

As perviously mentioned, Firestore organizes *collections* of data (e.g. for messages) which contain *documents* (a single message containing location information, the user who created it, and the actual message itself, etc).
Any type for users or messages should match how they are stored in Firebase. The Firebase collections that we use are shown below.

:::info
These collections are created automatically in Firestore when the server creates documents.
:::

### Collection Auth (managed by Firebase Auth)
```
- email 
- password 
- uid (User ID)
- ...other Firebase authentication information
```

### Collection UserConfigs:
```
index: <UID>
  |-- uid: <UID>
  |-- isConnected: <boolean>
  |-- lastConnectionTime: <Unix timestamp>
  |-- blacklisted UIDs: <array of UIDs>
  |-- moderationSettings:
        |-- muteTimeStart: <Unix timestamp>
        |-- muteTimeEnd: <Unix timestamp>
        |-- banTimeStart: <Unix timestamp>
        |-- banTimeEnd: <Unix timestamp>
        |-- isPermaBanned: <boolean>
        |-- reason: <string>
```


### Collection ConnectedUsers 
```
- index: uid <UID>
  |-- uid: <UID>
  |-- socketId: <socket.id>
  |-- displayName: <string>
  |-- userIcon:
       |-- foregroundImage: <filepath>
       |-- backgroundImage: <filepath>
  |-- location:
       |-- lat: <lat>
       |-- lon: <lon>
       |-- geohash: <geohash>

```

### Collection Messages
```
- uid: <UID>
- msgId: <UUID>
- msgContent: <string>
- location:
     |-- lat: <lat>
     |-- lon: <lon>
     |-- geohash: <geohash>
- timeSent: <Unix timestamp>

```
