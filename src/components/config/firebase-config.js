import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAs3ALUdtSepldPQRlzSCEJi4EbkyzeoQM",
    authDomain: "student-f8670.firebaseapp.com",
    databaseURL: "https://student-f8670.firebaseio.com",
    projectId: "student-f8670",
    storageBucket: "student-f8670.appspot.com",
    messagingSenderId: "592787927258",
    appId: "1:592787927258:web:7dd5383050e7404e"
};

firebase.initializeApp(config);

var storage = firebase.storage();

export {
    storage, firebase as default
};