import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDXTxj231HHPQ0OMqsRbDu49sF-d9Qfxt4",
  authDomain: "acdemia-bar.firebaseapp.com",
  databaseURL:'https://acdemia-bar-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: "acdemia-bar",
  storageBucket: "acdemia-bar.appspot.com",
  messagingSenderId: "491761807467",
  appId: "1:491761807467:web:d8d358735de41de5f2c12e"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
