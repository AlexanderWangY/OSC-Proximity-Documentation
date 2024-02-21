# Router Paths

## Introduction

In our app, we use expo router to navigate between screens. This is a quick guide on how to use it and our current routing flow between screens. We tried to format the navigation flow so that new screens and features can be added easily.

## Navigation Flow

Our app renders `app/index.tsx` every single time the user opens the app. It is the file that **___expo-router___** looks for to render the app. `app/index.tsx` does not render anything visual, however it does set up which path/stack the user will be directed to based on their log in status among other things.

### Logged In State

On render, `app/index.tsx` checks our local storage (read more [here](../guide/frontend-services.md)) for the user's current user and log in status. If the user is logged in, then they are moved to the `(auth)` stack which contains all the pages/screens which need authorization to access.

### Logged Out State

On render, `app/index.tsx` checks our local storage and if the user is not logged in, then they are moved to the `(home)` stack which contains all the pages/screens which do not need authorization to access. This is where the user will be able to log in or sign up.

## Stacks

### Home Stack :star:

The user can log in or sign up in this home stack through the log in or sign up screens. Once the user is signs up or logs in, they are moved to the `(auth)` stack. Their user information is stored in local storage and the user is now logged in. It will now persist across app restarts as well through `AsyncStorage`.

### Auth Stack :star:

Currently, this stack only contains a chat channel. If you want to create a sign out button screen or a settings screen containing one. Please do and revert to [here](../guide/frontend-services.md) for more info on how the authorization logic actually works.


