import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCqUZEiidVOK1xHW_rAQyz7VkELmdnb8z4",
  authDomain: "shop-db-1cc05.firebaseapp.com",
  databaseURL: "https://shop-db-1cc05.firebaseio.com",
  projectId: "shop-db-1cc05",
  storageBucket: "shop-db-1cc05.appspot.com",
  messagingSenderId: "886137757206",
  appId: "1:886137757206:web:25a0218851de0002addf37",
  measurementId: "G-M0K8XL3491"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;