import {db,auth} from "./firebase.js"

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.comment = async(postId)=>{

let text=document.getElementById("c-"+postId).value

await addDoc(collection(db,"comments"),{

post:postId,
user:auth.currentUser.uid,
text:text,
time:Date.now()

})

}
