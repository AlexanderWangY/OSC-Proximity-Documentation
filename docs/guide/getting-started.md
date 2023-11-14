# Getting Started

## Preface

Depending on what Operating System (Linux, Windows, etc.) you are running, you set up instructions will be different. Although some Linux distribution is **highly** encouraged, it is not at all a requirement to work on the project.

On the `On this page` column to the right, there a few options for setting up. Make sure to follow the one that is suited for your operating system!

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

::: warning
Each code snippet will have two versions. One for [APT](https://embeddedinventor.com/linux-distros-that-uses-apt-commands-for-package-management/) managed distros and the other for [DNF/RPM](https://embeddedinventor.com/linux-distros-that-uses-yum-or-dnf-for-package-management/) managed distros. If there is nothing differentiating them then it will work for both types. **It will tell you in the top right corner!**
:::

### Installing Node.JS and Git

First, ensure you have a stable version of Node.js installed on your system as well as Git.

```terminal-(apt)
$ sudo apt install nodejs git
```

or

```terminal-(dnf/rpm)
$ sudo dnf install nodejs git
```

### Branching and Cloning the Repository

When contributing to the project, you want to first commit changes into your personal repository that is forked from the main.

Travel to our [Github repository](https://github.com/ufosc/OSC-Proximity-Chat-App) and create a new fork into your personal repositories.

![Guide1](/imgs/docimg1.png)

Then, copy your new forked repository's clone address and return to your terminal/bash.

![Guide2](/imgs/docimg2.png)

In your terminal/bash, navigate to a folder/location you would like your repository to be in.

Then,

```terminal
$ git clone <paste your repository's address>
```

You should see it clone into that folder. Congratulations :tada:! You are one step closer to getting your hands on some code! Let's keep going...

Navigate into the repository:

```terminal
$ cd OSC-Proximity-Chat-App
```

::: tip
If at any point you are confused or run into errors, contact @alexwala (a.k.a Alex Wang) in the [discord](https://discord.gg/CedfucmXbq)
:::

### Installing NVM

Before we go any further, we need to install Node Version Manager (nvm).

1. Install NVM with either `curl` or `wget`

```terminal
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# or

$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Profile Configurations (Optional)
   Although the above process should have automatically added nvm config to your profile, we can also manually add it if it failed to do so.

```terminal
$ export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. Reload Shell Config
   Now reload the configuration to get it up and running!

```terminal
$ source ~/.bashrc
```

You can check to see if `NVM` is installed correctly with:

```terminal
$ nvm -v
```

::: warning
Did this not work for you? Let one of the tech leads know!
:::

---

### Installing Dependencies

Now, there are two paths you can take. You can either set-up for **frontend** or **backend** (or both if you so choose).

#### Frontend

Navigate into the `client` folder:

```terminal
$ cd client
```

Install the required dependencies using Node.js:

```terminal
$ npm install
```

Perfect :thumbsup:!

Now we need to configure your environment variables for API calls to the backend server!!!

Locate your `config_example.md` file and open it to edit it. Change the current variable stand-in to your machines current IPv4 address! Here is a quick website on how to find your IPv4 address. [How to find my IP Address on Linux](https://linuxize.com/post/how-to-find-ip-address-linux/).

Your `config_example.md` should look something like this:

```config_example.md
EXPO_PUBLIC_LOCALHOST_ADDRESS = <YOUR IPv4 ADDRESS>
```

Rename `config_example.md` to just `.env` and save it.

You are now done setting up the frontend for development! Navigate to [Developer Tools](/guide/dev-tools) to understand more of the development process!
:tada: :tada: :tada: :tada:

or continue to also set up backend ~
