import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getStorage } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


const firebaseConfig = {

apiKey:"PASTE",
authDomain:"PASTE",
projectId:"PASTE",
storageBucket:"PASTE",
messagingSenderId:"PASTE",
appId:"PASTE"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
