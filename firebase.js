import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDl45un8t_zsUuigrHV228YERyIyTd3OVM",
  authDomain: "reactsample-7c707.firebaseapp.com",
  projectId: "reactsample-7c707",
  storageBucket: "reactsample-7c707.appspot.com",
  messagingSenderId: "166244589201",
  appId: "1:166244589201:web:63ac0524ac0a4e28d42930"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };