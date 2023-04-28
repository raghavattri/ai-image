import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCDIGXEwm9JSmpxC0leEUf6ZEsCHmeURoc",
  authDomain: "image-generator-7f025.firebaseapp.com",
  projectId: "image-generator-7f025",
  storageBucket: "image-generator-7f025.appspot.com",
  messagingSenderId: "378137570099",
  appId: "1:378137570099:web:4d0ea2bba99cf873cbec46"
};

export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
