# React firebase tutorial
### Youtube link : https://www.youtube.com/watch?v=PKwu15ldZ7k <br />
### React Authentication Crash Course With Firebase And Routing

# steps:
## 1. create react app 
`npx create-react-app react-auth-with-firebase-and-routing`
### goto https://console.firebase.google.com/ add new firebase project 
project name : react-auth-with-firebase <br>
Authentication -> Sign-in method -> Email/password to enable <br>
create new app -> name react-auth-with-firebase <br>
## 2. set up local enviroment
create `.env.local` , defualt in getignore file , dont update to github.  
must begin with "REACT_APP_" + "SOMETHING_API_XXX"=value  
how ? : process.env.REACT_APP_SOMETHING_API_XXX equal the value   
### ! markdown break new line : put two space at end of line .  
## 3. firebase initialize
create `firebase.js` and install firebase with npm `npm i firebase`  
```javascript
const app = firebase.initializeApp({ ... })  
// `firebase` is a global namespace from which all Firebase services are accessed.  
// initializeApp is a function  
initializeApp ( options :  Object ,  name ? :  string ) : App // return App
```
### Example  
```javascript
// Initialize default app
// Retrieve your own options values by adding a web app on
// https://console.firebase.google.com
firebase.initializeApp({
  apiKey: "AIza....",                             // Auth / General Use
  appId: "1:27992087142:web:ce....",      // General Use
  projectId: "my-firebase-project",               // General Use
  authDomain: "YOUR_APP.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://YOUR_APP.firebaseio.com", // Realtime Database
  storageBucket: "YOUR_APP.appspot.com",          // Storage
  messagingSenderId: "123456789",                  // Cloud Messaging
  measurementId: "G-12345"                        // Analytics
});
```
### Example  
```javascript
// Initialize another app
var otherApp = firebase.initializeApp({
  apiKey: "AIza....",
  appId: "1:27992087142:web:ce....",
  projectId: "my-firebase-project",
  databaseURL: "https://<OTHER_DATABASE_NAME>.firebaseio.com",
  storageBucket: "<OTHER_STORAGE_BUCKET>.appspot.com"
}, "nameOfOtherApp");
```
## 4. firebase.auth  
https://firebase.google.com/docs/reference/node/firebase.app    
Gets the `Auth` service for the default app or a given app.  

```js
auth ( app ? :  App ) : Auth   // return Auth
```
example  
```js
// Get the Auth service for the default app
var defaultAuth = firebase.auth();
```
```js
const auth = app.auth(); // Get the Auth service for the default app
// The above is shorthand for:
// export const auth = firebase.auth(app);
```
## 5. firebase.auth.Auth
https://firebase.google.com/docs/reference/node/firebase.auth.Auth  
The Firebase Auth service interface.  
Do not call this constructor directly. Instead, use 
```js
firebase.auth()
```

## 6. firebase.app.App
https://firebase.google.com/docs/reference/node/firebase.app.App  
A Firebase App holds the initialization information for a collection of services.  
Do not call this constructor directly. Instead, use `firebase.initializeApp()` to create an app.
## 7. install bootstrap
`npm i bootstrap react-bootstrap`