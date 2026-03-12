import {db,auth} from "./firebase.js"

import {
doc,
updateDoc,
arrayUnion
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.like = async(id)=>{

let ref=doc(db,"posts",id)

await updateDoc(ref,{
likes:arrayUnion(auth.currentUser.uid)
})

}
