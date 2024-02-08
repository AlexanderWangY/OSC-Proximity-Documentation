# Contexts

## Overview

Contexts are a React/React Native utility to allow global access to functions, variables, etc. This is important especially when using sockets, settings, and other app-wide utilities. It is used like a wrapper and all of its `children` components can access its values and functions.

For more info regarding contexts visit [here](https://react.dev/reference/react/useContext)

## Location Context

One of our app's central features is its location tracking feature which allows us to accurately send messages to people in certain areas. This context is located in `client/src/context/LocationContext.tsx`.

It contains two `useState` hooks that change and rerender all child components to reflect those changes.

```typescript
const [location, setLocation] = useState<LocationType>({
  latitude: 99999, // Impossible starting value
  longitude: 99999,
});
const [isLocationEnabled, setIsLocationEnabled] = useState(false);
```

One handles the current location and the other is a boolean that checks if the user allowed location services on their device.
