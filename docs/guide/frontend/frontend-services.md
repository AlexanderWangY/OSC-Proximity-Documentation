# Frontend Services

## Overview

Frontend services are functions that run the logic of the frontend. They are used to handle things like authentication, server requests, and local storage. If you add any services, please add them to this page and follow the format of the other services.

## **`services/store.ts`**
#### Handles AysncStorage of user login information and authentication logic

### appSignIn() :star:

Overview: Signs in the user and stores their information in local storage

- **Parameters**: `email: string, password: string`

- **Returns**: `user: auth.currentUser` or `error: e`


```typescript
export const appSignIn = async (email: string, password: string) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        AuthStore.update((store) => {
            store.user = response?.user;
            store.isLoggedin = response?.user ? true : false;
        });

        return { user: auth.currentUser };
    } catch (e) {
        return { error: e };
    }
};
```

### appSignOut() :star:

Overview: Signs the user out and removes their information from local storage

- **Parameters**: `none`

- **Returns**: `user: null` or `error: e`


```typescript
export const appSignOut = async () => {
    try {
        await signOut(auth);
        AuthStore.update((store) => {
            store.user = null;
            store.isLoggedin = false;
        });
        return { user: null}
    } catch (e) {
        return { error: e };
    }
};
```

### appSignUp() :star:

Overview: Signgs the user up and stores their information in local storage on success

- **Parameters**: `email: string, password: string`

- **Returns**: `user: auth.currentUser` or `error: e`


```typescript
export const appSignUp = async (email: string, password: string) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        
        AuthStore.update((store) => {
            store.user = response.user;
            store.isLoggedin = response.user ? true : false;
        });
        return { user: auth.currentUser}
    } catch (e) {
        return { error: e };
    }
};
```