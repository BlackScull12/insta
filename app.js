import {auth,db,storage} from './firebase.js'

import {
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

import {signOut} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.logout = () =>{
signOut(auth)
location.href="login.html"
}


window.post = async () =>{

const file=document.getElementById("image").files[0]
const caption=document.getElementById("caption").value

const storageRef=ref(storage,"posts/"+Date.now())

await uploadBytes(storageRef,file)

const url=await getDownloadURL(storageRef)

await addDoc(collection(db,"posts"),{

image:url,
caption:caption,
user:auth.currentUser.email,
time:Date.now()

})

}


const q=query(collection(db,"posts"),orderBy("time","desc"))

onSnapshot(q,(snap)=>{

const feed=document.getElementById("feed")
feed.innerHTML=""

snap.forEach(doc=>{

const p=doc.data()

feed.innerHTML+=`

<div class="post">

<h4>${p.user}</h4>

<img src="${p.image}">

<p>${p.caption}</p>

</div>

`

})

})
