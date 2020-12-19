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
## 8. React Context 
Context provides a way to pass data through the component tree without having to pass props down manually at every level.  
### React.createContext
```js
const MyContext = React.createContext(defaultValue);
```
```js
<MyContext.Provider value={/* some value */}>
```
#### before
```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```
#### after
```js
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
## 9. React Hooks  
### State Hook
This example renders a counter. When you click the button, it increments the value:  
```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
Declaring multiple state variables  
```js
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```
! Hooks don’t work inside classes  
! You can also create your own Hooks  
### Effect Hook
The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.  
! By using this Hook, you tell React that your component needs to do something after render.  
For example, this component sets the document title after React updates the DOM:  
#### before
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
#### after
```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
### Ref Hook
```js
const refContainer = useRef(initialValue);
``` 
`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument `(initialValue)`. The returned object will persist for the full lifetime of the component.  
#### example
```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
