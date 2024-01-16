import {
  addDoc,
  getDocs,
  collection,
  where,
  query,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import { IUpdateUserPasswordType, IUserType } from '@types';
import { db, userDb } from './initialize';

const usersRef = collection(db, 'users');

const findUserQuery = async (user: IUserType) => {
  const q = query(
    usersRef,
    where('username', '==', user.username),
    where('country', '==', user.country)
  );
  const qDocRef = await getDocs(q);
  return qDocRef;
};

export const fSaveUser = async (
  user: IUserType,
  success?: () => void,
  error?: (code?: string) => void
) => {
  try {
    /* Verify username already exists in DB */
    const qDocRef = await findUserQuery(user);
    const userExists = qDocRef?.size > 0;
    if (userExists) {
      error && error('USER_EXISTS');
    } else {
      try {
        /* if not exists add username to DB */
        const docRef = await addDoc(userDb, {
          ...user,
          createdOn: new Date().toISOString(),
        });
        if (docRef.id && success) {
          success();
          return;
        }
        error && error();
      } catch (e) {
        console.warn('Error adding document: ', e);
        error && error();
      }
    }
  } catch (err) {
    console.warn('Error getting document', err);
    error && error();
  }
};

export const fGetUser = async (
  user: IUserType,
  success?: (user: IUserType) => void,
  error?: () => void
) => {
  try {
    const doc_refs = await findUserQuery(user);
    if (doc_refs.size === 1) {
      doc_refs.forEach((doc) => {
        const userData = doc?.data() as IUserType;

        if (doc.id && success) {
          success({ id: doc.id, ...userData });
        }
      });
      return;
    }

    error && error();
  } catch (err) {
    console.warn('Error update document: ', err);
    error && error();
  }
};

export const fChangeUserPassword = async (
  val: IUpdateUserPasswordType,
  success?: () => void,
  error?: (code: string) => void
) => {
  try {
    /* Verify username already exists in DB */
    const userDocRef = doc(db, 'users', val.id || '');
    const qDocRef = await getDoc(userDocRef);
    const userData = qDocRef?.data();

    if (userData) {
      const isValidateUser =
        typeof btoa === 'function' &&
        atob(userData?.['password']) === val.oldPassword;
      if (isValidateUser) {
        setDoc(
          userDocRef,
          {
            password: val?.password,
            updatedOn: new Date().toISOString(),
          },
          {
            merge: true,
          }
        )
          .then(() => success && success())
          .catch(() => {
            error && error('FAILED_TO_UPDATE_PASSWORD');
          });
        return;
      }

      error && error('INVALID_PASSWORD');
      return;
    }
    error && error('FAILED_TO_UPDATE_PASSWORD');
  } catch (err) {
    console.warn('Error update document: ', err);
    error && error('FAILED_TO_UPDATE_PASSWORD');
  }
};
