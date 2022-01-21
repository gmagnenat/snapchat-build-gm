import { initializeApp } from 'firebase/app';

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	serverTimestamp,
	doc,
	orderBy,
	limit,
	onSnapshot,
	query,
} from 'firebase/firestore';

import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyADNNYKc11zRxcxTupX1FhxBSUG0qVrGrU',
	authDomain: 'snapshat-clone-gm.firebaseapp.com',
	projectId: 'snapshat-clone-gm',
	storageBucket: 'snapshat-clone-gm.appspot.com',
	messagingSenderId: '327727920784',
	appId: '1:327727920784:web:8dcf20fbf1d8c69bda0a15',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export {
	db,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	serverTimestamp,
	doc,
	auth,
	orderBy,
	limit,
	onSnapshot,
	query,
	googleProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
};
