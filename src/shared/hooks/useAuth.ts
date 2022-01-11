import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut as signOutUser,
  UserCredential,
  User,
} from 'firebase/auth';

import { auth } from 'shared/services/firebase';

type GetUser = () => User | null;
type SignIn = (email: string, password: string) => Promise<UserCredential>;
type SignOut = () => Promise<void>;
type SignUp = (email: string, password: string) => Promise<UserCredential>;

const useAuth = () => {
  const storageKey = 'user';
  const storedUser = JSON.parse(localStorage.getItem(storageKey) || 'null');

  const [user, setUser] = useState<User | null>(storedUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authedUser) => {
      localStorage.setItem(storageKey, JSON.stringify(authedUser));
      setUser(authedUser);
    });

    return () => unsubscribe();
  }, []);

  const getUser: GetUser = () => user;

  const signIn: SignIn = (email, password) => (
    signInWithEmailAndPassword(auth, email, password)
  );

  const signOut: SignOut = () => (
    signOutUser(auth)
  );

  const signUp: SignUp = (email, password) => (
    createUserWithEmailAndPassword(auth, email, password)
  );

  return {
    getUser,
    signIn,
    signOut,
    signUp,
  };
};

export default useAuth;
