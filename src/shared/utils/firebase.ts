import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC9TT03CKV-yj4P8fEUW_J51IaMA29wF0Q',
  authDomain: 'memify-prod.firebaseapp.com',
  projectId: 'memify-prod',
  storageBucket: 'memify-prod.appspot.com',
  messagingSenderId: '39176808638',
  appId: '1:39176808638:web:c22a74e2fdaaadcf3b16ef',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
