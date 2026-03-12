import {db,auth} from "./firebase.js"

import {
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.sendMessage = async()=>{

let text=document.getElementById("msg").value

await addDoc(collection(db,"messages"),{

user:auth.currentUser.uid,
text:text,
time:Date.now()

})

}

const q=query(collection(db,"messages"),orderBy("time"))

onSnapshot(q,(snap)=>{

let box=document.getElementById("chat")

box.innerHTML=""

snap.forEach(doc=>{

let m=doc.data()

box.innerHTML+=`

<div class="msg">

${m.text}

</div>

`

})

})
