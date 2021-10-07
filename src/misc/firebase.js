/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCVSYlS_Gqr_W4H6Mel2HzWb8GgRvFphq4',
  authDomain: 'chat-web-app-7b222.firebaseapp.com',
  projectId: 'chat-web-app-7b222',
  storageBucket: 'chat-web-app-7b222.appspot.com',
  messagingSenderId: '1087819709375',
  appId: '1:1087819709375:web:5625f33be26c90a8e6ff0a',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
