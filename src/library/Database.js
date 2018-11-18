import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyABZmCyTfuenlYhCA2OLA4J0iNNhFTkoVk",
  authDomain: "vue-chat-fed93.firebaseapp.com",
  databaseURL: "https://vue-chat-fed93.firebaseio.com",
  projectId: "vue-chat-fed93",
  storageBucket: "",
  messagingSenderId: "654840825564"
};

let App = firebase.initializeApp(config);

export let FirebaseApp = App;
export let FirebaseDb = App.database();
export let FirebaseAuth = App.auth();
