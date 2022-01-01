import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBU1ltIfcUSFxNCEPFk64sJP0OHjyK1tl8',
  authDomain: 'memify-a9dec.firebaseapp.com',
  projectId: 'memify-a9dec',
  storageBucket: 'memify-a9dec.appspot.com',
  messagingSenderId: '254432886207',
  appId: '1:254432886207:web:69a8c4a7213f16f25df50a',
};

initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const auth = getAuth();
