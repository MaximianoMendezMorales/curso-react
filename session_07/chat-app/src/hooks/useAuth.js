import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main.jsx";

export const useAuth = () => {
    const [ user, setUser ] = useState(null)

    const authenticate = async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (e) {
            console.log(e)
        }
    }

    const logOut = async () => {
        try {
            await auth.signOut();
        } catch (e) {
            console.log(e)
        }
    }

    return {
        authenticate,
        logOut,
        user
    }
}