# Frontend Style Guide

This style guide provides best practices and style conventions for writing React Native code using TypeScript.

## Table of Contents

1. [General Guidelines](#general-guidelines)
2. [Naming Conventions](#naming-conventions)
3. [Components and Screens](#components-and-screens)
4. [File and Folder Structures](#file-and-folder-structures)
5. [Static Typing](#static-typing)
6. [Styling](#styling)
7. [Documentation Expectations](#documentation-expectations)
8. [Ending Notes](#ending-notes)

## General Guidelines

- Keep your code DRY (Don't Repeat Yourself).
- Keep it modular. Each component or function should only do one or two things!
- Write clear and concise code. Favor readability over cleverness.
- Keep it consistent with the coding style defined below.
- Use comments to clarify code, but do not comment obvious code.

## Naming Conventions

### 2.1 General

- **Camel Case:** Use camelCase for variable and function names. This convention involves starting each word except the first with a capital letter (e.g., `myVariable`, `calculateTotal()`).
- **Pascal Case for Components:** Use PascalCase for React components. This convention involves capitalizing the first letter of each word, including the first one (e.g., `MyComponent`, `HeaderSection`, `HomeScreen`).
- **Lowercase File Names:** Use all lowercase file names when defining/creating a file that will display one of the screen components (i.e `ChatroomScreen`, `WelcomeScreen`) inside the app router folders/stacks.

### 2.2 Variable Definitions

- **Descriptive Variable Names:** Choose descriptive names for variables that convey their purpose. Avoid overly abbreviated or unclear names. For example:

    ```typescript
    // Good
    const userName: string = 'JohnDoe';

    // Avoid
    const un: string = 'JD';
    ```
    If you are worried about the variable name being too long, favor long variable's with clarity over short variables that hinder clarity!

- **Avoid Similar Names:** Choose variable names which are not super similar with any other function or variable to reduce confusion:
    ```typescript
    // Good
    const message: string = 'This is a message!';
    const messageList: MessageType[] = [] // This is a list of messages!

    // Bad
    const message: string = 'This is a message!';
    const messages: MessageType[] = [] // This is a list of messages, but confusing!
    ```

- **Boolean Prefixes:** Prefix boolean variable names with "is" or "has" for clarity. This improves readability and signals the variable's boolean nature. For example:

    ```typescript
    const isActive: boolean = true;
    const hasError: boolean = false;
    ```
### 2.3 TypeScript Interface Names

Interfaces are important to utilize and understand as you will be using them a lot for declaring component `props` and making typescript `types`.

- **Descriptive Interfaces:** Use descriptive names for TypeScript interfaces. Clearly define the structure of objects passed as props or state.

    ```typescript
    interface UserProfile {
      username: string;
      email: string;
      age?: number; // '?' indicates optional property
    }
    ```

- **Singular Nouns for Interfaces:** Use singular nouns for interfaces representing a single entity.

    ```typescript
    interface Car {
      brand: string;
      model: string;
      year: number;
    }
    ```

## Components and Screens
Keep component names short and straight to the point. The components with the `Screen` suffix are where the different pages are put together.

- **Use Arrow Function Components:** Prefer to use the arrow function over the traditional function for making componenets
    ```typescript
    // Good
    const MyComponent : React.FC = () => {

    };

    // Bad
    function MyComponent() {

    };
    ```
- **Modulate Your Program**: Make a component for all the small controls/visuals instead of hard-coding one into your `Screen` component
    ```typescript
    // Good
    import { LoginButton } from '###'
    const HomeScreen : React.FC = () {
        <LoginButton />
    }

    // Bad
    const Homescreen : React.FC = () => {
        <Button>
            // This button needs all its styling and set-up in this file!
        </Button>
    }
    ```

- **Compile in the Screens**:
Building each component and then linking them all up within themselves then importing into `Screen` files overcomplicates things! Assemble your components within the actual `Screen` files/components themselves!

## File and Folder Structures

A clean and simple folder structure is a key aspect of a less painful developing experience. Instead of importing components from all over the repository, we have a set structure to where and what each folder should be and what it should contain.

### Simple Directory Tree (Current)
```Tree
├── assets
├── src
│   ├── app
│   ├── components
│   │   ├── Auth
│   │   ├── Chat
│   │   ├── Common
|   |   ├── Home
│   │   ├── Settings
│   │   └── _deprecated
│   ├── services
│   ├── sockets
│   └── utils
└── App.tsx // Deprecated
```
- **/src**: our main source folder that hosts our current working codebase
- **/src/app**: contains the main app router and all the screens that are linked to it
- **/src/components**: contains all the components that are used in the app
- **/src/components/Auth**: contains all the components that are used in the authentication process
- **/src/components/Chat**: contains all the components that are used in the chat process
- **/src/components/Common**: contains all the components that are used in multiple processes
- **/src/components/Home**: contains all the components that are used in the home process
- **/src/components/Settings**: contains all the components that are used in the settings process
- **/src/components/_deprecated**: contains all the components that are no longer used in the app
- **/src/services**: contains all the services that are used in the app
- **/src/sockets**: contains all the sockets that are used in the app
- **/src/utils**: contains all the utilities that are used in the app
- **/assets**: contains all the assets that are used in the app

### A Simple File Structure
Below is a simple file structure for a component. This is a good starting point for any `Screen` or standalone component you make. You can add more files as needed, but this is a good starting point.

```typescript
import {} from 'react-native'; // And all other imports

// Any logic should be right above the component

const MyComponent : React.FC = () => {
    return (
        <View>
            <Text>My Component</Text>
        </View>
    );
};

styles = StyleSheet.create({
    // Styles
});

export default MyComponent; // Good for standalone components/Screens
```

Here is a simple file structure for a multi-use component. This is a good starting point for any `Common` component you make.

```typescript
import {} from 'react-native'; // And all other imports

export const SignInButton : React.FC = () => { // Export inline
    return (
        <Button>
            // Button Stuff
        </Button>
    );
};

// Button logic should be right above the component

export const LoginButton : React.FC = () => {
    return (
        <Button>
            // Other Button Stuff
        </Button>
    );
};
```

## Static Typing
This may be a little weird to begin doing, especially if you are coming from a dynamically typed language like JavaScript. However, it is important to understand the benefits of static typing and how it can help you write less error-prone code.

### Declaring Types

You may have noticed in the above examples some code that looks slightly different than vanilla Javascript:
    
```typescript
const MyComponent : React.FC = () => {
};
    
// or...

const userName: string = 'JohnDoe';

```

Declare your components and variables with their types! You can do this by adding a `:` and the type after the variable/component name. If you are unsure of what type your variable or component is, you search it up in the [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/basic-types.html) or use the `any` type (which is not recommended). 

React's component class has a type `React.FC` which stands for React Functional Component. This is the type you should use for all your components.

### Defining Props

Also when you pass in `props` to your component, you should declare the type of the `props` object. For example:

```typescript
interface MyComponentProps {
    name: string;
    age: number;
}

const MyComponent : React.FC<MyComponentProps> = ({ name, age }) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    );
};
```

### Defining State Types

When you define state in your component, you should declare the type of the state object. For example:

```typescript
interface MyComponentState {
    name: string;
    age: number;
}

const MyComponent : React.FC = () => {
    const [state, setState] = useState<MyComponentState>({
        name: 'John Doe',
        age: 20
    });

    return (
        <View>
            <Text>{state.name}</Text>
            <Text>{state.age}</Text>
        </View>
    );
};
```

## Styling
Currently we are using plain CSS for styling our components. We are using the [React Native StyleSheet](https://reactnative.dev/docs/stylesheet) to style our components. More libraries may be added in the future to make styling easier.

### Naming Conventions

- **Descriptive Class Names:** Use descriptive names for CSS classes. Clearly define the purpose of the class. Avoid overly abbreviated or unclear names. For example:

    ```typescript
    // Good
    const styles = StyleSheet.create({
      mainContainer: {
        // ...
      },
    });

    // Bad
    const styles = StyleSheet.create({
      mainC: {
        // ...
      },
    });
    ```
    If you are worried about the class name being too long, favor long class names with clarity over short class names that hinder clarity!
    Use the `camelCase` naming convention for class names.

- **Use `Dimensions` for Sizing:** Use the `Dimensions` API to get the width and height of the screen. This ensures that your components will be sized correctly on all devices. For example:

    ```typescript
    import { Dimensions } from 'react-native';

    const { width, height } = Dimensions.get('window');

    const styles = StyleSheet.create({
      mainContainer: {
        width: width * 0.8, // 80% of screen width
        height: height * 0.5, // 50% of screen height
      },
    });
    ```
    This is for increased responsiveness and scalability of the app. Also opt for using percentages and flexbox over hard-coded values.

## Documentation Expectations
Documentation is one of the most important aspects of a project. As an Open Source project, we want to make sure that our code is well documented and easy to understand. This will help us onboard new developers and make it easier for everyone to understand the codebase.

- **Documenting New Code:** When you write new code, make sure to document it. This can be done by either adding comments to your code or by appending or adding new content to this website.
- **Add Documention to the Correct Section**: If you are adding documentation to this website, make sure to add it to the correct section. For example, new `Socket.io` documentation should be added to the corresponding `Socket` section. etc etc.
- **Documenting Existing Code:** If you are working on existing code, document your changes and edit the current docs.
- **Keep It Short:** Make sure you do not over document your code! Just enough so that people can understand.


## Ending Notes
There are a lot of ways to program and a lot of ways to write code. This is just a simple guide to help you get started with the project.

If you undergo a code review and your code is denied/flagged, do not take it personally! We are all here to learn and grow as developers. If you have any questions, feel free to ask in the Discord server!

**Happy Coding!** :smile: