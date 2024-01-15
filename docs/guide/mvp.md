# Minimum Viable Product

This is an outline of what we are aiming to complete during Spring 2024.
Many of these bullet points will become issues on our GitHub, if not already.

- [ ] Authentication & Profiles
    - Users will need to sign up, however, usernames will be randomized on every login
    - [ ] Google sign-in integration
    - [ ] API used for moderating users
        - Delete an individual user's messages, ban them from the platform
    - [ ] Selectable profile picture (selected from a few available, do not allow uploading)

- [ ] Messaging
    - Messages will be pushed to users within a configured geographic radius
    - [ ] User ID system
        - Debate between UUID, Twitter Snowflakes, or some other system
    - [ ] Realtime messaging
    - [ ] Message sent status
    - [ ] Message timestamp

- [ ] Layout
    - [ ] Router
        - A router will allow us to switch between multiple pages
    - [ ] Main page
        - [ ] Pulldown menu
        - [ ] Nearby user counter
        - [ ] Nearby user list
        - [ ] Nearby location indicator
    - [ ] Settings page
        - Account settings, pick profile picture, etc

# Design Plan

Here is the design of our app, drafted in Figma.

![DraftedDesign1](/imgs/AppViews.png)

# Future ideas

These aren't our first priority, but could be if we complete our MVP. If you have feature suggestions, they might become one of these.

- Pings
    - Users can open a map. There will be pings placed throughout the map with an attatched message, which a user must walk to in order to read.
    - More than one user can add a message to any ping.
    - Pings will contain an experation time.
- Shadowbanning for moderation
- GIF picker and support for messages containing images
    - Do not allow uploading of personal images
    - Could work with a website such as Giphy
- Color themes
- Replies to messages
