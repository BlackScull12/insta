import {db,storage,auth} from "./firebase.js"

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


window.createPost = async()=>{

let file=document.getElementById("image").files[0]

let caption=document.getElementById("caption").value

let storageRef=ref(storage,"posts/"+Date.now())

await uploadBytes(storageRef,file)

let url=await getDownloadURL(storageRef)

await addDoc(collection(db,"posts"),{

user:auth.currentUser.uid,
image:url,
caption:caption,
likes:[],
time:Date.now()

})

}
