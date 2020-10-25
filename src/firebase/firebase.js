import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCyjUSW76mGosgTYLQx7Y2MoOtTAOkSj98",
  authDomain: "cvbteam-63d08.firebaseapp.com",
  databaseURL: "https://cvbteam-63d08.firebaseio.com",
  projectId: "cvbteam-63d08",
  storageBucket: "cvbteam-63d08.appspot.com",
  messagingSenderId: "867685344522",
  appId: "1:867685344522:web:d4d06cdf18959f48f746f3"
};

firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();
export const fireStorage = firebase.storage();

export default firebase;