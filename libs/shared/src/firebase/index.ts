// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  addDoc,
  getDocs,
  updateDoc,
  collection,
} from 'firebase/firestore';
import { appConfig } from '../appConfig';

// Initialize Firebase
const app = initializeApp(appConfig.firebase);

const db = getFirestore(app);

export const fBase = { db, collection, getDocs, addDoc, updateDoc };
