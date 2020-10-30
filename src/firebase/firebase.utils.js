import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' ;

const config = {
    apiKey: "AIzaSyBS0QTJVD1Cx9aV0e7ig1GUK-QJlKFAlh0",
    authDomain: "gh27-cloth-db.firebaseapp.com",
    databaseURL: "https://gh27-cloth-db.firebaseio.com",
    projectId: "gh27-cloth-db",
    storageBucket: "gh27-cloth-db.appspot.com",
    messagingSenderId: "922288763787",
    appId: "1:922288763787:web:ccb15e13f45afcc5f4f58e",
    measurementId: "G-2JH3FWPFMJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;