// src/context/AuthProvider.js
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebaseConfig';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Create user
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await saveUserToDatabase(user);
            return user;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    // Sign in user
    const signInUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await saveUserToDatabase(user);
            return user;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    // Google login
    const googleLogin = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential.user;
            await saveUserToDatabase(user);
            return user;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    // Logout
    const logout = async () => {
        setUser(null);
        await signOut(auth);
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Save user to the backend database
    const saveUserToDatabase = async (user) => {
        try {
            const response = await fetch('https://ideabattle-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save user to database');
            }
        } catch (error) {
            console.error('Error saving user to database:', error);
        }
    };

    const allvalues = {
        createUser, signInUser, googleLogin, user, loading, logout
    };

    return (
        <AuthContext.Provider value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
