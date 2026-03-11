import { db } from "../firebase/firebaseConfig"
import { collection, addDoc, getDocs } from "firebase/firestore"

const eventCollection = collection(db,"events")

export async function addEvent(event){
await addDoc(eventCollection,event)
}

export async function getEvents(){

const snapshot = await getDocs(eventCollection)

return snapshot.docs.map(doc=>({
id:doc.id,
...doc.data()
}))

}