// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { appConfig } from '../appConfig';

// Initialize Firebase
const app = initializeApp(appConfig.firebase);

export const db = getFirestore(app);

export const userDb = collection(db, 'users');
