import {
  addDoc,
  getDocs,
  collection,
  where,
  query,
  getDoc,
  doc,
} from 'firebase/firestore';
import { IUserType } from '@types';
import { db, userDb } from './initialize';

export const fSaveUser = async (
  user: IUserType,
  success?: () => void,
  error?: () => void
) => {
  try {
    /* Verify username already exists in DB */
    const d = await getDoc(doc(userDb, 'username', user.username));
    const userExists = d?.data();
    if (userExists) {
      error && error();
    } else {
      try {
        /* if not exists add username to DB */
        const docRef = await addDoc(userDb, {
          ...user,
          createdOn: new Date().toISOString(),
        });
        if (docRef.id && success) {
          success();
        } else {
          error && error();
        }
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
        error && error();
      }
    }
  } catch (err) {
    console.error('Error getting document', err);
    error && error();
  }
};

export const fGetUser = async (
  user: IUserType,
  success?: (user: IUserType) => void,
  error?: () => void
) => {
  const { username, password, country } = user;
  const usersRef = collection(db, 'users');
  const q = query(
    usersRef,
    where('username', '==', username),
    where('password', '==', password),
    where('country', '==', country)
  );
  try {
    const doc_refs = await getDocs(q);
    if (doc_refs.empty) {
      error && error();
      return;
    }
    doc_refs.forEach((doc) => {
      const userData = doc?.data() as IUserType;

      if (doc.id && success) {
        success({ id: doc.id, ...userData });
      }
    });
  } catch (err) {
    console.error('Error update document: ', err);
    error && error();
  }
};
