import {db,auth} from "./firebase.js"

import {
doc,
updateDoc,
arrayUnion
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.follow = async(userId)=>{

let ref=doc(db,"users",userId)

await updateDoc(ref,{

followers:arrayUnion(auth.currentUser.uid)

})

}
