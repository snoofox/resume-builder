import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../libs/firebase";

interface AuthState {
    user: User | null;
}

export const useAuth = (): AuthState => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return { user };
};
