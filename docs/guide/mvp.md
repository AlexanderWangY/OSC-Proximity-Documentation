# Minimum Viable Product

This is an outline of what we are aiming to complete during Spring 2024.
Many of these bullet points will become issues on our GitHub, if not already.

[ ] Authentication & Profiles: <br>&emsp;
[ ] Google sign-in integration <br>&emsp;
[ ] Usernames will be randomized on each login <br>&emsp;
[ ] API used for moderating users <br>&emsp;&emsp;
• Delete an individual user's messages, ban them from the platform <br>&emsp;
[ ] Selectable profile picture (selected from a few available, do not allow uploading) <br>
[X] Allow sign in with email and password

[ ] Messaging: <br>&emsp;
[X] Messages will be pushed to users within a configured geographic radius <br>&emsp;
[X] User ID system: <br>&emsp;&emsp;
• Debate between UUID, Twitter Snowflakes, or some other system <br>&emsp;
[X] Realtime messaging <br>&emsp;
[ ] Message sent status <br>&emsp;
[X] Message timestamp

[ ] Layout: <br>&emsp;
[X] Router: A router will allow us to switch between multiple pages <br>&emsp;
[ ] Main page <br>&emsp;&emsp;
[ ] Nearby user counter <br>&emsp;&emsp;
[ ] Nearby user list <br>&emsp;&emsp;
[ ] Nearby location indicator <br>&emsp;
[X] Settings page <br>&emsp;&emsp;
[X] Account settings <br>&emsp;&emsp;
[X] Profile picture <br>

# Design Plan

Here is the design of our app, drafted in Figma.

![DraftedDesign1](/imgs/View1.png)

# Future ideas

These aren't our first priority, but could be if we complete our MVP. If you have feature suggestions, they might become one of these.

- Pings
  - Users can open a map. There will be pings placed throughout the map with an attatched message, which a user must walk to in order to read.
  - More than one user can add a message to any ping.
  - Pings will contain an expiration time.
- Shadowbanning for moderation
- GIF picker and support for messages containing images
  - Do not allow uploading of personal images
  - Could work with a website such as Giphy
- Color themes
- Replies to messages
