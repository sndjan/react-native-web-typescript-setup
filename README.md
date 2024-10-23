# React Native Web with TypeScript Setup Guide

This guide will walk you through setting up a **React Native Web** project with **TypeScript**.

## Step 1: Create a React App

```bash
npx create-react-app my-app
cd my-app
npm install react-native-web
npm start
```

## Step 2: Install Necessary Packages

```bash
npm install react-native-web
npm install babel-plugin-module-resolver
npm install module-alias
```

## Step 3: Eject the App (if you have no config/webpack.config.js)

```bash
npm run eject
```

## Step 4: Install TypeScript and React Native Web Types

```bash
npm install --save-dev @types/react-native-web
npm install typescript @types/react @types/react-dom react-native-web
```

## Step 5: Update `tsconfig.json`

Add the following configuration to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ... other options ...
    "jsx": "react-jsx"
  }
}
```

## Step 7: Update `index.html`

Copy and paste the following code into your `public/index.html` file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="theme-color" content="#000000">
	<link rel="manifest" href="%PUBLIC_URL%/manifest.json">
	<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
	<title>React App</title>

  <style>
    /* These styles make the body full-height */
    html, body { height: 100%; }
    /* These styles disable body scrolling if you are using <ScrollView> */
    body { overflow: hidden; }
    /* These styles make the root element full-height */
    #root { display:flex; height:100%; }
  </style>
</head>

<body>
	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>
	<div id="root"></div>
	<!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>

```

---

Now you are ready to develop a React Native Web project using TypeScript.

**Happy coding!**