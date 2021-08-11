import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDqcxWatgNtHS25IRP8mNaKwMYDeFWb3io",
    authDomain: "facebook-clone-dan.firebaseapp.com",
    projectId: "facebook-clone-dan",
    storageBucket: "facebook-clone-dan.appspot.com",
    messagingSenderId: "520295256207",
    appId: "1:520295256207:web:923aae217b1284d3b4e0fa"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebase.Config) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };