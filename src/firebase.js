import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCEmoZz0c1F8mSNjSLp6AWqLZivtm9aqaY",
  authDomain: "reto-hexacta.firebaseapp.com",
  databaseURL: "https://reto-hexacta-default-rtdb.firebaseio.com",
  projectId: "reto-hexacta",
  storageBucket: "reto-hexacta.appspot.com",
  messagingSenderId: "129638477025",
  appId: "1:129638477025:web:7295b6644e82d82144dba0"
};


const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig