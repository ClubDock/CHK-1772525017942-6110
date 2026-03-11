import { db } from "../firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const saveUser = async (user) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    });
  } catch (error) {
    console.error("Error saving user:", error);
  }
};