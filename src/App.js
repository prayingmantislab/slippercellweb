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
import MUIDataTable from "mui-datatables";

import "./App.css";

const columns = ["Participants", "Id", "Hour", "Noise", "Light"]
const data = [
  ["Asi Meir", "123412345", "18:00", 5, 6],
  ["Liran Meir", "123412345", "18:00", 10, 5],
  ["Joe James", "123412345", "19:00", 12, 7],
  ["jessie James", "123412345", "20:00", 13, 6]
]

const options = {
  filterType: 'checkbox',
};

const App = () => {
  return (
    <div className="grid-container">
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <div>
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
      <div>
        <MUIDataTable
        tilte={"Dashboard"}
        data={data}
        columns={columns}
        options={options}
        />
      </div>
    </div>
  );
};

export default App;
