import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
     apiKey: "AIzaSyDo_6mHh5YEiHkwZl_yGfBUj4cyNXwR5Hk",
     authDomain: "multimart-a2321.firebaseapp.com",
     projectId: "multimart-a2321",
     storageBucket: "multimart-a2321.appspot.com",
     messagingSenderId: "28491253200",
     appId: "1:28491253200:web:5dec91c1f552c3dbe0a5d5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
