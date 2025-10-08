// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwpdyvpCXht_eM6PBwqvl4anEBh1QXYSI",
  authDomain: "staffappx1.firebaseapp.com",
  projectId: "staffappx1",
  storageBucket: "staffappx1.firebasestorage.app",
  messagingSenderId: "286014398049",
  appId: "1:286014398049:web:4eb218bd7ffd2a20cd9420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth(app);

// Google sign-in
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Email + Password signup
export const signupWithEmailAndPassword = async (email, password) => 
  createUserWithEmailAndPassword(auth, email, password);

// Email + Password login
export const loginWithEmailAndPassword = async (email, password) => 
  signInWithEmailAndPassword(auth, email, password);

// Firestore
export const db = getFirestore(app);

// Create user document
export const createUserDoc = async (userAuth, otherinfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...otherinfo
      });
    } catch (error) {
      console.log("Error creating user doc:", error);
    }
  }

  return userDocRef;
};

export async function addstaffdatainfirestore(collectionname, objectstoadd) {
  const collectionRef = collection(db, collectionname)
  const batch = writeBatch(db)

  objectstoadd.forEach((object) => {
  const docref = doc(collectionRef, object.name)
  batch.set(docref, object);
  })
  await batch.commit()
  console.log("data added successfully in firestore")
}

export async function fetchstafflistdatafromfirestore() {

  const collectionRef = collection(db, 'Staff_List')
  const q = query(collectionRef)

  const querysnapshot = await getDocs(q);
  const staffapp = querysnapshot.docs.reduce((acc, docsnapshot) => {
    const {name, ...items} = docsnapshot.data();
    acc[name] = items;
    return acc;
  }, {})
  return staffapp;
}