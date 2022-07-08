import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyCq0nAOZfMCe17hpj_fwSap30TN_zSq47g",
  authDomain: "selva-unsplash.firebaseapp.com",
  projectId: "selva-unsplash",
  storageBucket: "selva-unsplash.appspot.com",
  messagingSenderId: "194703186860",
  appId: "1:194703186860:web:a397e03e71b0c10789b809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);