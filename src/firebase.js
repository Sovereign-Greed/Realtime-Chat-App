import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA7fNC28dm5ILEQYhq0PyzKIegi8zODrq8",
  authDomain: "chatapp-mern-944c1.firebaseapp.com",
  databaseURL: "https://chatapp-mern-944c1.firebaseio.com",
  projectId: "chatapp-mern-944c1",
  storageBucket: "chatapp-mern-944c1.appspot.com",
  messagingSenderId: "108906171354",
  appId: "1:108906171354:web:201ab4f467109c41ee8ee3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;