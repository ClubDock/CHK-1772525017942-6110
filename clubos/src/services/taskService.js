import { db } from "../firebase/firebaseConfig"
import { collection, addDoc, getDocs } from "firebase/firestore"

const taskCollection = collection(db,"tasks")

export async function addTask(task){
await addDoc(taskCollection,task)
}

export async function getTasks(){

const snapshot = await getDocs(taskCollection)

return snapshot.docs.map(doc=>({
id:doc.id,
...doc.data()
}))

}