import * as React from "react";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  // IfUnAuthed
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import { config } from "./test-credentials";
import Button from "@material-ui/core/Button";

import "./App.css";

const IDontCareAboutFirebaseAuth = () => {
  return <div>This part won't react to firebase auth changes</div>;
};

const App = () => {
  return (
    <div className="App-header">
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
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        firebase.app().auth().signOut();
                      }}
                    >
                      Sign out
                    </Button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h2>You're not signed in </h2>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        firebase.app().auth().signInAnonymously();
                      }}
                    >
                      Sign in anonymously
                    </Button>
                  </div>
                );
              }
            }}
          </FirebaseAuthConsumer>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Sign in with Google
          </Button>
        </div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default App;
