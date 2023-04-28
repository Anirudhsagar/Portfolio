import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlJbj-cdimjbTTjfsBVh3yyi_gKefzg_E",
  authDomain: "anirudh-efbfb.firebaseapp.com",
  projectId: "anirudh-efbfb",
  storageBucket: "anirudh-efbfb.appspot.com",
  messagingSenderId: "853399647149",
  appId: "1:853399647149:web:699de884e2014839c1a724",
  measurementId: "G-LEB84PWV9D"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();