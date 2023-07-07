import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE4_ywMM8QI80xjfwNMMI8Oz6VIJWhZjM",
  authDomain: "crud-759da.firebaseapp.com",
  projectId: "crud-759da",
  storageBucket: "crud-759da.appspot.com",
  messagingSenderId: "197664981469",
  appId: "1:197664981469:web:831dbb9dede584cbcd7634"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore()