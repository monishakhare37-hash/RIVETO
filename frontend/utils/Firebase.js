import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvHueMYRVIpPrxysTnOkzamnTASA7g_oQ",
  authDomain: "riveto-56a49.firebaseapp.com",
  projectId: "riveto-56a49",
  storageBucket: "riveto-56a49.firebasestorage.app",
  messagingSenderId: "665369204411",
  appId: "1:665369204411:web:1e3ca07099f82e30fc7b9e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();