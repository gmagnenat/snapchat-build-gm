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

import { getStorage, uploadBytes, uploadString } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBxe0eMF0Ac8Sk1_3F3T1Ri5YuNPeId0lM',
	authDomain: 'thsnap-gm-ceb41.firebaseapp.com',
	projectId: 'thsnap-gm-ceb41',
	storageBucket: 'thsnap-gm-ceb41.appspot.com',
	messagingSenderId: '859950524300',
	appId: '1:859950524300:web:5773695828d68d4d7a58a9',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// storage
const storage = getStorage(app);

export {
	app,
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
	storage,
	uploadBytes,
	uploadString,
};
