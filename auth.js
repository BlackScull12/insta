import {auth,db} from "./firebase.js"

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.signup = async()=>{

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

let user = await createUserWithEmailAndPassword(auth,email,pass)

await setDoc(doc(db,"users",user.user.uid),{

email:email,
bio:"",
followers:[],
following:[]

})

alert("Account created")

}

window.login = async()=>{

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

await signInWithEmailAndPassword(auth,email,pass)

location.href="index.html"

}
