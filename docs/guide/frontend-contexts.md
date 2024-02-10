# Contexts

## Overview

Contexts are a React/React Native utility to allow global access to functions, variables, etc. This is important especially when using sockets, settings, and other app-wide utilities. It is used like a wrapper and all of its `children` components can access its values and functions.

For more info regarding contexts visit [here](https://react.dev/reference/react/useContext)

Most of our contexts wrap stacks either in the `app/(auth)/_layout.tsx` or `app/(home)/_layout.tsx` files.
::: danger
Many of these socket contexts are layered in a way that they depend on each other.
**For your safety**, please do not change the order of the context wrappers in either of the stacks. Let a tech lead know if you intend to change the order.
:::

## Location Context

One of our app's central features is its location tracking feature which allows us to accurately send messages to people in certain areas. This context is located in `client/src/context/LocationContext.tsx`. 

Wraps main stack located in: `client/app/(home)/_layout.tsx`.

- ### expo-location

We use the `expo-location` library to track the user's location. It is implemented within the context as a useEffect and useInterval hook. It retrieves the user's location every few seconds (configurable in the .env file) and stores it in the context location state.

#### Code Snippet:

```typescript
  useEffect(() => {
    (async () => {
      // Request location permissions, if not granted, return
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      setIsLocationEnabled(true);

      const interval = setInterval(async () => {
        try {
          let locationData = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest,
          }); // High accuracy for now for testing!
          if (
            locationData.coords.latitude !== location.latitude ||
            locationData.coords.longitude !== location.longitude
          ) {
            setLocation({
              latitude: locationData.coords.latitude,
              longitude: locationData.coords.longitude,
            });
          } else {
            console.log("Location has not changed");
          }
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      }, LOCATION_REFRESH_RATE); // Fetch location every 3 seconds

      // Cleanup function to clear interval when component unmounts
      return () => clearInterval(interval);
    })();
  }, []);
```

## Socket Context

Our app uses socket.io to handle real-time communication between users. This context is located in `client/src/context/SocketContext.tsx`. 

Wraps main stack located in: `client/app/(home)/_layout.tsx`.

- ### socket.io-client

We use the `socket.io-client` library to handle real-time communication between users. It is implemented within the context as a useEffect to mount the component and connect the socket on first mount, then disconnet on unmount.

#### Code Snippet:

```typescript
  useEffect(() => {
    let isMounted = true;

    const socketIo = io(`http://${EXPO_IP}:8080`); // Hardcoded IP address

    socketIo.on("connect", () => {
      if (isMounted) {
        setSocket(socketIo);
      } else {
        console.log("Socket not mounted");
      }
    });

    socketIo.on("message", (data: any) => {
      console.log("message", data);
    });

    return () => {
      isMounted = false;
      socket?.disconnect();
    };
  }, []);
```

We also utilize the `LocationSocket.tsx` mentioned above to send the user's location to the server and receive messages from other users in the same location. We use a useEffect that listens for changes in the location context and sends the user's location to the server when it changes.

## Settings Context

Our app uses a settings context to store user settings. This context is located in `client/src/context/SettingsContext.tsx`.

Wraps main stack located in: `client/app/(home)/_layout.tsx`.

- ### Settings and AsyncStorage

We use the `AsyncStorage` library to store user settings. It is implemented within the context as a useEffect to mount the component and retrieve the user's settings on first mount. They are also saved as states so that they can be accessed and changed by other components (namely the settings screen which is **IN PROGRESS**).

#### Code Snippet:

```typescript
const loadSettings = async () => {
  try {
    const themeSetting = await AsyncStorage.getItem("theme");
    if (themeSetting !== null) {
      return {
        theme: themeSetting,
      };
    } else {
      await AsyncStorage.setItem("theme", "light");
      return {
        theme: "light",
      };
    }
  } catch (err) {
    console.error(err);
  }
};
```

::: tip
AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used for settings and other small pieces of data that need to be persisted across app restarts.
:::

