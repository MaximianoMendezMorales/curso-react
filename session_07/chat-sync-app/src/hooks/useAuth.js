import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../main.jsx";

export const useAuth = () => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth, (user) => {
                setUser(user);
                setLoading(false);
            }
        )

        return () => unsubscribe();
    }, [])

    const login = async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (e) {
            let message = ""
            switch (e.code) {
                case "auth/invalid-credential":
                    message = "Invalid credentials";
                    break;
                case "auth/too-many-requests":
                    message = "Too many requests";
                    break;
                default:
                    message = "An error occurred.";
                    break;
            }

            throw new Error(message)
        }
    }

    const logout = async () => {
        try {
            await auth.signOut();
        } catch (e) {
            console.log(e)
        }
    }

    return { login, logout, user, loading }
}