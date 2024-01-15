import{_ as e,o as a,c as s,Q as o}from"./chunks/framework.ec8f7e8e.js";const t="/imgs/docimg1.png",n="/imgs/docimg2.png",r="/imgs/firebase1.png",l="/imgs/firebase2.png",k=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),i={name:"guide/getting-started.md"},p=o('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="preface" tabindex="-1">Preface <a class="header-anchor" href="#preface" aria-label="Permalink to &quot;Preface&quot;">​</a></h2><p>Depending on what operating system (Linux, Windows, etc.) you are running, your setup instructions will be slightly different. While using Linux is highly encouraged, it is not at all a requirement to work on this project.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Even if you only want to work on either the front or backend of this project, please keep in mind that both portions will need to be set-up and configured.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you are using Windows, and would like to try using a terminal inside of linux without creating a virtual machine, you might want to look into installing <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noreferrer">Windows Subsystem for Linux</a>.</p></div><p>We are excited to have you! 🤗</p><h3 id="some-definitions" tabindex="-1">Some definitions <a class="header-anchor" href="#some-definitions" aria-label="Permalink to &quot;Some definitions&quot;">​</a></h3><p>As a quick note, the <strong>frontend</strong> of our project is the React Native app we&#39;re developing, which individual <strong>clients</strong> (or users) will use. We sometimes may refer to this as the client-side portion of our app. The <strong>backend</strong> (sometimes refered to as the <strong>server</strong>) is what our frontend app uses to communicate to our database. It allows the creation, retrival, and searching of data to be done via http requests, as well as some other means you will learn about later.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Although you do not need any prior experience to contribute to this open source project, a bit of experience with web development would help you <strong>greatly</strong> in contributing and understanding the code.</p><p>Here are some recommeneded simple tutorials to get you caught up:</p><ul><li><strong>HTML/CSS:</strong> <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc" target="_blank" rel="noreferrer">HTML &amp; CSS Full Course - Beginner to Pro</a></li><li><strong>Javascript:</strong> <a href="https://www.youtube.com/watch?v=EfAl9bwzVZk" target="_blank" rel="noreferrer">JavaScript Full Course for Beginners</a></li><li><strong>ExpressJS:</strong> <a href="https://www.youtube.com/watch?v=39znK--Yo1o&amp;list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2&amp;index=1" target="_blank" rel="noreferrer">ExpressJS Tutorial</a></li><li><strong>React Native</strong> <a href="https://www.youtube.com/watch?v=obH0Po_RdWk&amp;t=2904s" target="_blank" rel="noreferrer">React Native Tutorial</a></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You only need a basic understanding. Don&#39;t be afraid to ask teammates to help you understand the code better!</p></div><p>However, the best way to learn (in Wang&#39;s experience) is always to read the code and ask questions. Contact a tech lead if you are having trouble and we will be more than glad to help you learn the tech stack!</p><h3 id="prerequisites-1" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites-1" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>First, ensure you have a stable version of <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> and <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a> installed on your system (LTS or Long Term Release versions are prefered). If you use a package manager, check its wiki for any extra installation instructions.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you run into problems running Node.js, you may want to install <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">Node Version Manager</a> as an alternative. Setting this up can be slightly more in depth, but it is another option.</p></div><h3 id="branching-and-cloning-the-repository" tabindex="-1">Branching and Cloning the Repository <a class="header-anchor" href="#branching-and-cloning-the-repository" aria-label="Permalink to &quot;Branching and Cloning the Repository&quot;">​</a></h3><p>When contributing to this project, first <a href="https://github.com/git-guides/git-commit" target="_blank" rel="noreferrer">commit</a> changes into your personal repository that is <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo" target="_blank" rel="noreferrer">forked</a> from the main one.</p><p>Travel to our <a href="https://github.com/ufosc/OSC-Proximity-Chat-App" target="_blank" rel="noreferrer">Github repository</a> and create a new fork into your personal repositories.</p><p><img src="'+t+'" alt="Guide1"></p><p>Then, copy your new forked repository&#39;s clone address and return to your terminal/bash.</p><p><img src="'+n+`" alt="Guide2"></p><p>In your terminal/bash, navigate to a folder/location you would like your repository to be in.</p><p>Then clone your repository and enter the directory it creates:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">paste</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">your</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repository&#39;s address&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">$ cd &lt;the newly created directory&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">paste</span><span style="color:#24292E;"> </span><span style="color:#032F62;">your</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repository&#39;s address&gt;</span></span>
<span class="line"><span style="color:#032F62;">$ cd &lt;the newly created directory&gt;</span></span></code></pre></div><h3 id="installing-dependencies" tabindex="-1">Installing Dependencies <a class="header-anchor" href="#installing-dependencies" aria-label="Permalink to &quot;Installing Dependencies&quot;">​</a></h3><h3 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h3><p>Navigate into the <code>client</code> folder and install the required dependencies using Node.js:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">client</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">client</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><p>Perfect 👍!</p><p>Now we need to configure your environment variables for API calls to the backend server.</p><p>Locate <code>config_example.md</code> and copy the file into a new one named .env. Append your machine&#39;s <a href="https://www.whatismybrowser.com/detect/what-is-my-local-ip-address" target="_blank" rel="noreferrer">local (not public or global) IPv4 address</a> after the equals sign without quotes. Leave the port as 3001 unless directed.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do not delete <code>config_example.md</code>. If removed, and your commits are merged into the main repository, no one will have an example config to use. 😦</p></div><p>Your <code>config_example.md</code> should look something like this:</p><div class="language-config_example.md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">config_example.md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">EXPO_PUBLIC_LOCALHOST_ADDRESS = &lt;YOUR IPv4 ADDRESS&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">EXPO_PUBLIC_LOCALHOST_ADDRESS = &lt;YOUR IPv4 ADDRESS&gt;</span></span></code></pre></div><p>Run <code>npm start</code> to create a local running test of the mobile app.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><p>You should see a few different things load as well as a QR code, which you can scan with your phone to test the app. To use this, you will need to install <a href="https://expo.dev/expo-go" target="_blank" rel="noreferrer">Expo Go</a>, but after that development will now be between your computer and your phone.</p><p>You are now done setting up the frontend for development! 🎉 🎉 🎉 🎉</p><h3 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-label="Permalink to &quot;Backend&quot;">​</a></h3><p>From the project root directory, navigate into the <code>server</code> folder and install the dependencies</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">server</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">server</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Running <code>npm install</code> to set up frontend does <strong><em>not</em></strong> mean that the dependencies are also installed for the backend!</p></div><p>Navigate into the <code>src</code> directory. This is your working directory.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src</span></span></code></pre></div><h4 id="running-the-backend-server" tabindex="-1">Running the backend server <a class="header-anchor" href="#running-the-backend-server" aria-label="Permalink to &quot;Running the backend server&quot;">​</a></h4><p>Before we setup and configure Firebase, the database our backend will talk to, we will quickly step aside and learn how to run the backend server.</p><p>Since we are writing in TypeScript that will need to be compiled into JavaScript, periodically run <code>npx tsc</code> in a second terminal during development. Additionally, <code>npx tsc -w</code> will do this much more quickly and recompile on file changes.</p><p>To start the server, run <code>npm start</code>.</p><p>For example:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tsc</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tsc</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The package <a href="./.html">Nodemon</a> is very useful for restarting the server on file changes. If you would like to use it, install it with <code>npm i -g nodemon</code>. Invoke this with <code>nodemon</code> and run in a seperate terminal as well.</p></div><p>We are halfway done with setiing up the backend server! As previously mentioned, we now must set up and configure our database.</p><h2 id="setting-up-and-configuring-firebase" tabindex="-1">Setting up and configuring Firebase <a class="header-anchor" href="#setting-up-and-configuring-firebase" aria-label="Permalink to &quot;Setting up and configuring Firebase&quot;">​</a></h2><p>One crictical aspect of our app is the database. For this part we have chosen to use Google&#39;s Firebase to store our user information and messages. Our backend neatly allows us to search and send database information using a easy-to-read-and-parse file format called <a href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="noreferrer">JSON</a>.</p><ol><li>Log into a Google account you wish to host the firebase on.</li><li>Go to the <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">Firebase</a> website.</li><li>Click &quot;Add a project&quot; on the dashboard.</li><li>Choose whatever project name you see fit. Call it ProximityChatEchologatorEarshot if you&#39;re low on ideas (like us).</li><li>Disable Google Analytics when asked, and then create the project</li><li>After the project is done being created, click the settings icon and the &quot;Project settings&quot;.</li><li>Underneath the &quot;Your apps&quot; section, click the Web Development option (Looks like <code>&lt;/&gt;</code>).</li><li>Type in a name for you app (at your discretion), keep &quot;Firebase Hosting&quot; unchecked and click &quot;Register App&quot;.</li><li>Before continuing, locate <code>config_example.md</code> and copy the file into a new one named <code>.env</code>. Note that we are still inside of the <code>server</code> directory.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Do not delete <code>config_example.md</code>. If removed, and your commits are merged into the main repository, no one will have an example config to use. 😦</p></div><ol start="10"><li>On firebase, now copy the codes below (not actually the ones below, the ones for your firebase): <img src="`+r+'" alt="Firebase1"></li></ol><p>And then format them into a <code>.env</code> files like this (no need for quotation marks):</p><p><img src="'+l+'" alt="Firebase2"></p><ol start="10"><li>Continue to the Firebase console and navigate to Build &gt; Firestore Database on the sidebar, and click create database.</li><li>Select the nam5 server and continue.</li><li>Start in test mode, click enable.</li><li>Create two collections: &quot;messages&quot; and &quot;users&quot;. When prompted for data to populate the collections, randomly enter in some pseudo-data (this will not matter later on, this information is formatted by our server).</li></ol><p>Now your ready to start developing!!!!!!!!!!!!!!!!!!!!!!!!!!1111🎉 🎉 🎉 🎉</p><p>Next, feel free to read through other parts of the documentation that intrests you, our codebase, and assign yourself to an issue that you want to work on!</p>',64),c=[p];function d(h,u,g,y,m,b){return a(),s("div",null,c)}const v=e(i,[["render",d]]);export{k as __pageData,v as default};