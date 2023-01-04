import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDuJij9U1fWgeflLPP-49V-AUMclu1bgrc",
  authDomain: "my-portfolio-arjun.firebaseapp.com",
  projectId: "my-portfolio-arjun",
  storageBucket: "my-portfolio-arjun.appspot.com",
  messagingSenderId: "383261436391",
  appId: "1:383261436391:web:87b7f8c6378609701b3542",
  measurementId: "G-MZRMYEYDD5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);