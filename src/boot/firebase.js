// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref, onUnmounted } from 'vue'
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4SSfFhGQjMJm-ok5jFqFWE5MkkB_GvJs",
  authDomain: "the3beez-4a743.firebaseapp.com",
  projectId: "the3beez-4a743",
  storageBucket: "the3beez-4a743.appspot.com",
  messagingSenderId: "1050575498273",
  appId: "1:1050575498273:web:9e7e2bc7d07b6f3b60c760"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
let firebaseAuth = app.auth()
const db = app.firestore()
const usersCollection = db.collection('users')
const database = getDatabase();
export {firebaseAuth,database}


export const createUser = user => {
  console.log("user Created")
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
