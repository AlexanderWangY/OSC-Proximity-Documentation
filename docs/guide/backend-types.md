# Firestore Collections & Types

To implement functionality for users and messages, we have to organize information in our database.

As perviously mentioned, Firestore organizes *collections* of data (e.g. for messages) which contain *documents* (a single message, containing location information, the user who created it, and the actual message itself).
Any type for users or messages should match how their stored in firebase. The Firebase collections that we use are shown below.

:::warning
While the getting started guide only has you create two collections, these types have barely been implemented and won't affect any installation.
Documentation will update to reflect these changes as these types are implemented.
:::

### Collection Auth (managed by Firebase Auth)
- email 
- password 
- user UID
- ...other Firebase authentication information

### Collection UserSettings
- **index**: user UID \<UID>
- user UID \<UID>
- isConnected \<boolean>
- blacklisted UIDs \<array of UIDs>
- lastConnectionTime \<Unix timestamp>
- moderationSettings:
  - muteTimeStart \<Unix timestamp>
  - muteTimeEnd \<Unix timestamp>
  - isBanned \<boolean>
  - reason \<string>

### Collection ConnectedUsers 
- **index**: user UID \<UID>
- user UID \<UID>
- socketId \<socket.id>
- displayName \<string>
- userIcon:
  - foregroundImage \<filepath>
  - backgroundImage \<filepath>
- locationData:
  - lat \<lat>
  - lon \<lon>
  - geohash \<geohash>

### Collection Messages
- user UID \<UID>
- msgId \<UUID>
- msgContent \<string>
- locationData:
  - lat \<lat>
  - lon \<lon>
  - geohash \<geohash>
- timeSent \<Unix timestamp>
