import {auth,db} from './firebase.js'

import {
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.send = async ()=>{

const text=document.getElementById("msg").value

await addDoc(collection(db,"messages"),{

text:text,
user:auth.currentUser.email,
time:Date.now()

})

document.getElementById("msg").value=""

}


const q=query(collection(db,"messages"),orderBy("time"))

onSnapshot(q,(snap)=>{

const box=document.getElementById("messages")

box.innerHTML=""

snap.forEach(doc=>{

const m=doc.data()

box.innerHTML+=`

<div class="message">

<b>${m.user}</b> : ${m.text}

</div>

`

})

})
