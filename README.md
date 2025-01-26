# React + Vite with Okta Login

This project demonstrates how to set up a React application using Vite, with authentication provided by Okta.

## Project Overview

This application is a simple React project bootstrapped with Vite. It includes authentication using Okta, and utilizes several libraries for UI and routing.

## How to Create from Scratch

To create this project from scratch, follow these steps:

### Initialize the Project

Run the following command to create a new Vite project with a React template:

```sh
npm create vite@latest app-with-okta-login -- --template react
cd app-with-okta-login
npm install
```

### Install Required Packages

Install the necessary packages for Okta authentication, routing, and UI components:

```sh
npm install @okta/okta-auth-js @okta/okta-react react-router-dom semantic-ui-css semantic-ui-react
npm install -D dotenv
```

### Run the Project

To start the development server, use the following command:

```sh
npm run dev
```

## Additional Information

For more details on implementing the PKCE flow with Okta, refer to the [Okta PKCE Flow Guide](https://developer.okta.com/docs/guides/implement-grant-type/authcodepkce/main/).

main example: [Okta React + Okta Hosted Login Example](https://github.com/okta-samples/okta-react-sample/blob/main/README.md)
