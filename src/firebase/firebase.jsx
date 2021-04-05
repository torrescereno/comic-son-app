import firebase from "firebase";
import "firebase/firestore";

require("dotenv").config();

const app = firebase.initializeApp({
	apiKey: "AIzaSyAqcHysjLTCSkWZbRruENkNm6CB2x0OE7Y",
	authDomain: "comic-son.firebaseapp.com",
	databaseURL: "https://comic-son-default-rtdb.firebaseio.com",
	projectId: "comic-son",
	storageBucket: "comic-son.appspot.com",
	messagingSenderId: "555409526154",
	appId: "1:555409526154:web:47bdf51dc8fd12747a0c73",
});

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
