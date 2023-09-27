import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.process.env.VITE_APIKEY,
  authDomain: import.meta.process.env.VITE_AUTHDOMAIN,
  projectId: import.meta.process.env.VITE_PROJECTID,
  storageBucket: import.meta.process.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.process.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.process.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
