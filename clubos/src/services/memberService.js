import { db } from "../firebase/firebaseConfig"
import { collection, addDoc, getDocs } from "firebase/firestore"

const memberCollection = collection(db,"members")

export async function addMember(member){
await addDoc(memberCollection,member)
}

export async function getMembers(){

const snapshot = await getDocs(memberCollection)

return snapshot.docs.map(doc=>({
id:doc.id,
...doc.data()
}))

}