import * as firebase from "firebase/app"
import "firebase/auth"
import { config } from "./firebase-variables"

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = config

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export default firebase
