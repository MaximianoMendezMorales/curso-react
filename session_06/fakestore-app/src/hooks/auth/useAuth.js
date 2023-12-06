import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../main.jsx";
import { useEffect, useState } from "react";

export const useAuth = () => {
    const [ user, setUser ] = useState(null);
    const [ loadingSession, setLoadingSession ] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoadingSession(false)
        })

        return () => unsubscribe()
    }, []);

    const authenticate = async ({ email, password }) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response.user);
            setUser(response.user)
        } catch (e) {
            let message = "";

            switch (e.code) {
                case "auth/invalid-login-credentials":
                    message = "Invalid credentials"
                    break;
                case "auth/too-many-requests":
                    message = "Too many requests"
                    break;
            }

            throw new Error(message)
        }
    }

    const logOut = async () => {
        await auth.signOut();
    }

    return {
        authenticate,
        logOut,
        user,
        loadingSession
    }
}