import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCPbQwl-bWK0Zg0_6FhOYErpCFe87HAB5s",
    authDomain: "react-redux-firebase-950e0.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-950e0.firebaseio.com",
    projectId: "react-redux-firebase-950e0",
    storageBucket: "react-redux-firebase-950e0.appspot.com",
    messagingSenderId: "1038269763008",
    appId: "1:1038269763008:web:7eda476adfed8a56c4cc25",
    measurementId: "G-64ZTYTNTPH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore()

export default firebase;