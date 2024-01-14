# Getting Started

## Preface

Depending on what Operating System (Linux, Windows, etc.) you are running, your set up instructions will be different. While using Linux is highly encouraged, it is not at all a requirement to work on the project.

On the `On this page` column to the right, there a few options for setting up. Make sure to follow the one that is suited for your operating system!

Additionally, Backend developers will also need to set up their own firebase. See the respecting guide at the bottom.

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

However, the best way to learn (in my experience) is always to read the code and ask questions. Contact a tech lead if you are having trouble and we will be more than glad to help you learn the tech stack!

## Setting Up for Linux

### Prerequisites

First, ensure you have a stable version of [Node.js](https://nodejs.org/) installed on your system as well as [Git](https://git-scm.com/). Check your package manager or your distro's wiki for how to install these.

Before installing Node.js, you might want to look at [Node Version Manager](https://github.com/nvm-sh/nvm) as well. Setting this up can be slightly more in depth, but it is another option if Node.js is causing you problems.

### Branching and Cloning the Repository

When contributing to the project, you want to first commit changes into your personal repository that is forked from the main.

Travel to our [Github repository](https://github.com/ufosc/OSC-Proximity-Chat-App) and create a new fork into your personal repositories.

![Guide1](/imgs/docimg1.png)

Then, copy your new forked repository's clone address and return to your terminal/bash.

![Guide2](/imgs/docimg2.png)

In your terminal/bash, navigate to a folder/location you would like your repository to be in.

Then clone your repository and enter the directory it creates:

```terminal
$ git clone <paste your repository's address>
$ cd <repository directory>
```

### Installing Dependencies

Now, there are two paths you can take. You can either set-up for **frontend** or **backend** (or both if you so choose).

### Frontend

Navigate into the `client` folder and install the required dependencies using Node.js:

```terminal
$ npm install
```

Perfect :thumbsup:!

Now we need to configure your environment variables for API calls to the backend server.

Locate your `config_example.md` and copy the file into a new one named .env. Do not delete `config_example.md`. Append your machine's local IPv4 address after the equals sign without quotes. Leave the port as 3001 unless directed.

Your `config_example.md` should look something like this:

```config_example.md
EXPO_PUBLIC_LOCALHOST_ADDRESS = <YOUR IPv4 ADDRESS>
```

Run `npm start` to create a local running test of the mobile app.

```terminal
$ npm start
```

You should see a few different things load as well as a **QR CODE** which will be how you test your app. Continue to [Developer Tools](/guide/dev-tools) to learn what Expo Go is and how to test/view your frontend!

You are now done setting up the frontend for development!
:tada: :tada: :tada: :tada:

or continue to also set up backend ~

### Backend

Navigate into the `server` folder:

```terminal
$ cd server
```

Run `npm install` to install all required dependencies.

```terminal
$ npm install
```

::: warning
Running `npm install` to set up frontend does **_not_** mean that the dependencies are also built for the backend!
:::

Navigate into the `src` directory. This is your working directory. Open up the terminal in this directory.

```terminal
$ cd src
```

The backend compiles Typescript into Javascript so you need to run `npx tsc` to build your code on changes. You can also run `npx tsc -w` in a second terminal to recompile on file changes.

You must also run `npm start` to begin your server afterwards.

For example:

```terminal
$ npx tsc && npm start
```

You should see your backend listen to your port at 3000. If you see this then you have successfully set up your backend. Continue on to [Developer Tools](/guide/dev-tools) to learn about endpoint testing tools.

## Setting Up for Windows

### Installing Node.JS and Git

First, ensure you have a stable version of Git intalled on your machine.

[Download Git](https://git-scm.com/downloads)

Run each of their respective installers and run `git --version`.

```terminal
> git --version
```

If you get a response along the lines of:

```terminal
git version xxxxxxx
```

Then you have succeeded!
::: tip Problems?
Running into issues? Not sure what to do? [Contact us](/contact).
:::

### Branching and Cloning the Repository

When contributing to the project, you want to first commit changes into your personal repository that is forked from the main.

Travel to our [Github repository](https://github.com/ufosc/OSC-Proximity-Chat-App) and create a new fork into your personal repositories.

![Guide1](/imgs/docimg1.png)

Then, copy your new forked repository's clone address and return to your terminal/bash.

![Guide2](/imgs/docimg2.png)

In your terminal/bash, navigate to a folder/location you would like your repository to be in.

Then,

```terminal
> git clone <paste your repository's address>
```

You should see it clone into that folder. Congratulations :tada:! You are one step closer to getting your hands on some code! Let's keep going...

Navigate into the repository:

```terminal
> cd OSC-Proximity-Chat-App
```

### Installing NVM

Before we go any further, we need to install Node Version Manager (nvm).

If you already had Node.Js installed... uninstall it now!
To uninstall Node, just rerun the same installer you installed it with and it will prompt you to uninstall it.

After you made sure Node is no longer on your machine, follow this link to download [NVM for Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).

Click on latest release and install the latest release, then extract the folder and follow the prompts to install `NVM`.

To check whether it has installed successfully, run:

```terminal
> nvm -v
```

If it gives you a response that states its version then you have successfully installed `NVM`! :tada:

Now you need to install node from `NVM`.

```terminal
> nvm install node
```

After it installs assign nvm to use the current working version of node with:

```terminal
> nvm use node
```

::: details Notice from the Developers:
As of now, we are still working on implementing better ways to access `NVM` for Windows users. Check back soon if this didn't work for you! Also, contact a tech lead if you are struggling with this step
:::

You are now ready to install dependencies and get this project up and running! :smile:

### Installing Dependencies

Now, there are two paths you can take. You can either set-up for **frontend** or **backend** (or both if you so choose).

### Frontend

Navigate into the `client` folder:

```terminal
> cd client
```

Install the required dependencies using Node.js:

```terminal
> npm install
```

Perfect :thumbsup:!

Now we need to configure your environment variables for API calls to the backend server!!!

Locate your `config_example.md` file and open it to edit it. Change the current variable stand-in to your machines current IPv4 address! Here is a quick website on how to find your IPv4 address. [How to find my IP Address on Windows](https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9).

Your `config_example.md` should look something like this:

```config_example.md
EXPO_PUBLIC_LOCALHOST_ADDRESS = <YOUR IPv4 ADDRESS>
```

Rename `config_example.md` to just `.env` and save it.

Run `npm start` to create a local running test of the mobile app.

```terminal
> npm start
```

You should see a few different things load as well as a **QR CODE** which will be how you test your app. Continue to [Developer Tools](/guide/dev-tools) to learn what Expo Go is and how to test/view your frontend!

You are now done setting up the frontend for development!
:tada: :tada: :tada: :tada:

or continue to also set up backend ~

### Backend

Navigate into the `server` folder:

```terminal
> cd server
```

Run `npm install` to install all required dependencies.

```terminal
> npm install
```

::: warning
Running `npm install` to set up frontend does **_not_** mean that the dependencies are also built for the backend!
:::

Navigate into the `src` directory. This is your working directory. Open up the terminal in this directory.

```terminal
> cd src
```

The backend compiles Typescript into Javascript so you need to run `npx tsc` to build your code on changes. You can also run `npx tsc -w` in a second terminal to recompile on file changes.

You must also run `npm start` to begin your server afterwards.

For example:

```terminal
> npx tsc && npm start
```

You should see your backend listen to your port at 3000. If you see this then you have successfully set up your backend. Continue on to [Developer Tools](/guide/dev-tools) to learn about endpoint testing tools.

## Setting up for Mac

Coming soon!

## Setting up Firebase

One crictical aspect of our app is the database. For this part we have chosen to use Google's Firebase to store our user information and messages. Then our backend watches the database for changes to push to the client!

1) Log into a Google account you wish to host the firebase on.
2) Go to the [Firebase](https://firebase.google.com/) website.
3) Click "Add a project" on the dashboard.
4) Choose whatever project name you see fit.
5) Disable Google Analytics when asked and then create the project!
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
