import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC7BygxspYMaHDLql2lPBhw0whMmrPm-60',
  authDomain: 'memify-dev.firebaseapp.com',
  projectId: 'memify-dev',
  storageBucket: 'memify-dev.appspot.com',
  messagingSenderId: '634462634043',
  appId: '1:634462634043:web:1692fb172ef25739d45c1e',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
