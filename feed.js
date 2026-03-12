import {db} from "./firebase.js"

import {
collection,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const q=query(collection(db,"posts"),orderBy("time","desc"))

onSnapshot(q,(snap)=>{

let feed=document.getElementById("feed")

feed.innerHTML=""

snap.forEach(doc=>{

let p=doc.data()

feed.innerHTML+=`

<div class="post">

<img src="${p.image}">

<p>${p.caption}</p>

<button onclick="like('${doc.id}')">❤️</button>

<div id="comments-${doc.id}"></div>

<input id="c-${doc.id}" placeholder="comment">

<button onclick="comment('${doc.id}')">Post</button>

</div>

`

})

})
