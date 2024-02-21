# Contributing to Echologator

To contribute your changes to the documentation and the codebase, you would need to create a Pull Request. 

But before you create a Pull Request, it is important to fork the original repository, so that you have your own copy of the codebase/documentation that you can modify hassle-free, without running into any access issues.

## Creating a fork
![Forking the original repository](/imgs/createfork.png)

Once you have forked the repository, it is a good practice for you to create a new branch on your fork to start making the changes as per your issue. 

For example, here's a branch called `add-tutorial` created by one of the developers on his fork to add a frontend tutorial to the documentation that would resolve the issue. 

![Creating a new branch on your fork](/imgs/createbranch.png)

Once you have made the changes and pushed them to the new branch you have created, you can open a Pull Request through GitHub to add changes from the branch on your fork to one of the branches (usually the `main`/`master` branch) of the original repository.

![Opening a pull request](/imgs/openpullrequest.png)

![Adding title and description to your pull request](/imgs/openpullrequest2.png)

## Pushing local changes to GitHub fork

You can push the changes made on your local branch (branch of the fork that you have cloned locally) to the branch that exists on GitHub ( also known as the remote branch) using the `git push` command:
```bash
git push <remote> <branch> 
```
where `<remote>` refers to the name you have given to the remote that connects to a GitHub repository. Conventionally, you use `origin` to refer to the original repository and `upstream` to refer to the forked repository.

## What is a Pull Request?
A Pull Request refers to an object within GitHub that developers use to add incremental changes to a repository. A Pull Request consists of several commits that developers make in the respective branches of their own forks before they request for these changes to be added to one of the branches of the original repository.

## Demonstration with an example issue
Let's take the example of an issue that has already been resolved previously:

![An example of a GitHub issue](/imgs/exampleissue.png)

The documentation for this project is hosted through [Vitepress](https://vitepress.dev/) pulling content from [a seperate GitHub repository](https://github.com/AlexanderWangY/OSC-Proximity-Documentation). So to work on this issue, you will have to create a fork of that repository and make changes locally before you create a PR. 

You would follow a similar process to make changes to the codebase for the Echologator app.



