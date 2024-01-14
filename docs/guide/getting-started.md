# Getting Started

## Preface

Depending on what operating system (Linux, Windows, etc.) you are running, your setup instructions will be slightly different. While using Linux is highly encouraged, it is not at all a requirement to work on this project.

:::warning
Even if you only want to work on either the front or backend of this project, please keep in mind that both portions will need to be set-up and configured.
:::

We are excited to have you! :hugs:

## Prerequisites

Although you do not need any prior experience to contribute to this open source project, a bit of experience with web development would help you **greatly** in contributing and understanding the code.

Here are some recommeneded simple tutorials to get you caught up:

- **HTML/CSS:** [HTML & CSS Full Course - Beginner to Pro](https://www.youtube.com/watch?v=G3e-cpL7ofc)
- **Javascript:** [JavaScript Full Course for Beginners](https://www.youtube.com/watch?v=EfAl9bwzVZk)
- **ExpressJS:** [ExpressJS Tutorial](https://www.youtube.com/watch?v=39znK--Yo1o&list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2&index=1)
- **React Native** [React Native Tutorial](https://www.youtube.com/watch?v=obH0Po_RdWk&t=2904s)

::: tip
You only need a basic understanding. Don't be afraid to ask teammates to help you understand the code better!
:::

However, the best way to learn (in Wang's experience) is always to read the code and ask questions. Contact a tech lead if you are having trouble and we will be more than glad to help you learn the tech stack!

### Prerequisites

First, ensure you have a stable version of [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your system (LTS or Long Term Release versions are prefered). If you use a package manager, check its wiki for any extra installation instructions.

:::tip
If you run into problems running Node.js, you may want to install [Node Version Manager](https://github.com/nvm-sh/nvm) as an alternative. Setting this up can be slightly more in depth, but it is another option.
:::

### Branching and Cloning the Repository

When contributing to this project, first [commit](https://github.com/git-guides/git-commit) changes into your personal repository that is [forked](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) from the main one.

Travel to our [Github repository](https://github.com/ufosc/OSC-Proximity-Chat-App) and create a new fork into your personal repositories.

![Guide1](/imgs/docimg1.png)

Then, copy your new forked repository's clone address and return to your terminal/bash.

![Guide2](/imgs/docimg2.png)

In your terminal/bash, navigate to a folder/location you would like your repository to be in.

Then clone your repository and enter the directory it creates:

```bash
$ git clone <paste your repository's address>
$ cd <the newly created directory>
```

### Installing Dependencies

### Frontend

Navigate into the `client` folder and install the required dependencies using Node.js:

```bash
$ cd client
$ npm install
```

Perfect :thumbsup:!

Now we need to configure your environment variables for API calls to the backend server.

Locate your `config_example.md` and copy the file into a new one named .env.  Append your machine's [local (not public or global) IPv4 address](https://www.whatismybrowser.com/detect/what-is-my-local-ip-address) after the equals sign without quotes. Leave the port as 3001 unless directed.
:::warning
Do not delete `config_example.md`. If removed, and your commits are merged into the main repository, no one will have an example config to use. :(
:::

Your `config_example.md` should look something like this:

```config_example.md
EXPO_PUBLIC_LOCALHOST_ADDRESS = <YOUR IPv4 ADDRESS>
```

Run `npm start` to create a local running test of the mobile app.

```bash
$ npm start
```

You should see a few different things load as well as a QR code, which you can scan with your phone to test the app. To use this, you will need to install [Expo Go](https://expo.dev/expo-go), but after that development will now be between your computer and your phone.

You are now done setting up the frontend for development!
:tada: :tada: :tada: :tada:


### Backend

From the project root directory, navigate into the `server` folder and install the dependencies

```bash
$ cd server
$ npm install
```

::: warning
Running `npm install` to set up frontend does **_not_** mean that the dependencies are also installed for the backend!
:::

Navigate into the `src` directory. This is your working directory.

```bash
$ cd src
```

#### Running the backend server

Before we setup and configure Firebase, the database our backend will talk to, we will quickly step aside and learn how to run the backend server.

Since we are writing in TypeScript that will need to be compiled into JavaScript, periodically run `npx tsc` in a second terminal during development. Additionally, `npx tsc -w` will do this much more quickly and recompile on file changes.

To start the server, run `npm start`.

For example:

```bash
$ npx tsc && npm start
```

:::info
The package [Nodemon]() is very useful for restarting the server on file changes.
If you would like to use it, install it with `npm i -g nodemon`. Invoke this with `nodemon` and run in a seperate terminal as well.
:::

We are halfway done with setiing up the backend server! As previously mentioned, we now must set up and configure our database.


## Setting up and configuring Firebase

One crictical aspect of our app is the database. For this part we have chosen to use Google's Firebase to store our user information and messages. Our backend neatly allows us to search and send database information using a easy-to-read-and-parse file format called [JSON](https://en.wikipedia.org/wiki/JSON).

1) Log into a Google account you wish to host the firebase on.
2) Go to the [Firebase](https://firebase.google.com/) website.
3) Click "Add a project" on the dashboard.
4) Choose whatever project name you see fit. Call it ProximityChatEchologatorEarshot if you're low on ideas (like us).
5) Disable Google Analytics when asked, and then create the project
6) After the project is done being created, click the settings icon and the "Project settings".
7) Underneath the "Your apps" section, click the Web Development option (Looks like `</>`).
8) Type in a name for you app (at your discretion), keep "Firebase Hosting" unchecked and click "Register App".
9) Copy the firebase API keys into a `.env` file within your "server" folder within your codebase.

Copy the codes below (not actually the ones below, the ones for your firebase):
![Firebase1](/imgs/firebase1.png)

And then format them into a `.env` files like this (no need for quotation marks):

![Firebase2](/imgs/firebase2.png)


10) Continue to the console and navigate to Build -> Firestore Database on the sidebar and click create database
11) Select the nam5 server and continue.
12) Start in test mode, click enable.
13) Create two collections: "messages", "users". When prompted for documents/data to populate the collections, randomly enter in some pseudo-data. (Will not matter later on)

### Continue on to `Developer tools` for more set up or


