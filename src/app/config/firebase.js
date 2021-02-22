import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const fireBaseConfig = {
  apiKey: "AIzaSyBBy9VODxGD3fsS17XWaPBphSDgxDcxf7w",
  authDomain: "t-share-282f4.firebaseapp.com",
  projectId: "t-share-282f4",
  storageBucket: "t-share-282f4.appspot.com",
  messagingSenderId: "489637854647",
  appId: "1:489637854647:web:3bce2ac492cc90ec4dbc32",
  measurementId: "G-HZ5WMG6S1C",
};

firebase.initializeApp(fireBaseConfig);
firebase.firestore();

export default firebase;
