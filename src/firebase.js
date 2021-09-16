//import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEmoZz0c1F8mSNjSLp6AWqLZivtm9aqaY",
  authDomain: "reto-hexacta.firebaseapp.com",
  databaseURL: "https://reto-hexacta-default-rtdb.firebaseio.com",
  projectId: "reto-hexacta",
  storageBucket: "reto-hexacta.appspot.com",
  messagingSenderId: "129638477025",
  appId: "1:129638477025:web:7295b6644e82d82144dba0"
};

//export default firebase.initializeApp(firebaseConfig)
// export const db = getFirestore(app)

const  app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app)
