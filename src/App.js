// import * as React from "react";
// import {
//   FirebaseAuthProvider,
//   // FirebaseAuthConsumer
// } from "@react-firebase/auth";
// import firebase from "firebase/app";

// import "./App.css";
// import "firebase/auth";
// import "firebase/firestore";

// import { config } from "./test-credentials";

// const IDontCareAboutFirebaseAuth = () => {
//   return <div>this part won't react to firebase auth changes</div>
// };
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import Header from "./components/header/header.component";

// const firebaseConfig = {
//   apiKey: "AIzaSyD5H3PNsatfePZ5N0LRlb8v5yKQDCgt3yA",
//   authDomain: "sleepercelll-web.firebaseapp.com",
//   projectId: "sleepercelll-web",
//   storageBucket: "sleepercelll-web.appspot.com",
//   messagingSenderId: "477193796172",
//     appId: "1:477193796172:web:08864695bfd9e32454d2e9",
//     measurementId: "G-TGERGB0CN7"
// }

// firebase.initializeApp(firebaseConfig);


// const App = () => {
//   return (
//     <div>
//       <IDontCareAboutFirebaseAuth />
//       <FirebaseAuthProvider {...config} firebase={firebase}></FirebaseAuthProvider>
//     </div>
//   )
// }
// export default App;

import * as React from "react";
import { render } from "react-dom";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5H3PNsatfePZ5N0LRlb8v5yKQDCgt3yA",
  authDomain: "sleepercelll-web.firebaseapp.com",
  projectId: "sleepercelll-web",
  storageBucket: "sleepercelll-web.appspot.com",
  messagingSenderId: "477193796172",
  appId: "1:477193796172:web:08864695bfd9e32454d2e9",
  measurementId: "G-TGERGB0CN7"
}

const IDontCareAboutFirebaseAuth = () => {
  return <div>This part won't react to firebase auth changes</div>;
};

const App = () => {
  return (
    <div>
      <IDontCareAboutFirebaseAuth />
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <div>
          Hello <div>From Auth Provider Child 1</div>
          <FirebaseAuthConsumer>
            {({ isSignedIn, firebase }) => {
              if (isSignedIn === true) {
                return (
                  <div>
                    <h2>You're signed in 🎉 </h2>
                    <button
                      onClick={() => {
                        firebase
                          .app()
                          .auth()
                          .signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h2>You're not signed in </h2>
                    <button
                      onClick={() => {
                        firebase
                          .app()
                          .auth()
                          .signInAnonymously();
                      }}
                    >
                      Sign in anonymously
                    </button>
                  </div>
                );
              }
            }}
          </FirebaseAuthConsumer>
        </div>
        <div>Another div</div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default App;