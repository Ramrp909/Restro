import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAW2qnRIRu8LuyXYol7ae_kg_3Xuzukc-o",
  authDomain: "restro-8b919.firebaseapp.com",
  databaseURL: "https://restro-8b919-default-rtdb.firebaseio.com",
  projectId: "restro-8b919",
  storageBucket: "restro-8b919.appspot.com",
  messagingSenderId: "338420931141",
  appId: "1:338420931141:web:b4ddb469c3749ea679a12c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
export default firebaseDB.ref();