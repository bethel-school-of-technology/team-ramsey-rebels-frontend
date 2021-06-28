import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDroUfOYKMtGWP3p67xkMoIcL8RvWdpsuM",
  authDomain: "bethel-final-project.firebaseapp.com",
  databaseURL: "https://bethel-final-project-default-rtdb.firebaseio.com",
  projectId: "bethel-final-project",
  storageBucket: "bethel-final-project.appspot.com",
  messagingSenderId: "234795665792",
  appId: "1:234795665792:web:13b6fbfb6282987d775965"
});



export const auth = app.auth()
export default app;