import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDws89PuG_kIl8LXp-2t9DRfjf6Lll2BJ0",
  authDomain: "clubdock-b5a91.firebaseapp.com",
  projectId: "clubdock-b5a91",
  storageBucket:  "clubdock-b5a91.firebasestorage.app",
  messagingSenderId: "404747375792",
  appId: "1:404747375792:web:4d00e4c033fbc52e5e9775",
  measurementId: "G-HBMKHP50C0"
}

const app = initializeApp(firebaseConfig)


export const auth = getAuth(app)
export const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider)
  return result.user
}