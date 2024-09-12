# Troubleshooting

We understand that sometimes things don't go as planned. Here are some common issues and how to resolve them.

## Common Issues

### Frontend

<br>

#### - **Could not resolve dependency**:

Make sure that you have the latest version of Nodejs installed. Also make sure you are using the LTS version which can be found [here](https://nodejs.org/en/).

#### - **Experimental Metro feature or other EXPO errors**:

Make sure your expo is up to date. You can do this by running `npm install expo@latest` in your terminal.

#### - **Firebase/auth API Key Invalid**:

Make sure you have the correct api key in your `.env` file. Also, you can try to delete the `|| MOCK-KEY` found in the `firebaseConfig.ts` file.

#### - **Not connecting to backend**:

Make sure the `EXPO_IP` in your `client/.env` file is up to date with your current Expo Go session. If you are unsure what that means ask a tech lead!
:::info
Immediately after making changes to your `client/.env` file, you may need to run `npx expo start -c` instead of `npm start` to clear the cache and load the changes.
:::

#### - **Other Authentication Issues**:q

Make sure that you have enabled authentication in your firebase project. You can do this by going to the firebase console and enabling the authentication feature. Make sure to enable it for email and password.

### Backend

<br>

#### - **Could not connect to the database**:

Make sure that your `.env` file is set up correctly. You can find the correct setup in the `config_example.md` file.

#### - **Compilation errors for Typescript**:

Make sure that any unused modules/imports are removed. Also be sure that all files in the deperecated folder are commented out.

#### - **@firebase/firestore gRPC 'WRITE' or 'LISTEN'**:

This is usually because you have a misspelled variable in your `.env` file. Make sure that the variable names are correct.

## Still having issues?

If you are still having issues, please reach out to a tech lead for assistance.
