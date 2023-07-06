// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAi30qBhTMJqi-sIleO6ilMSr1yo0S1qjs',
  authDomain: 'hangry-6e8fa.firebaseapp.com',
  projectId: 'hangry-6e8fa',
  storageBucket: 'hangry-6e8fa.appspot.com',
  messagingSenderId: '430096350518',
  appId: '1:430096350518:web:e9e437a6f636b02335c797',
  measurementId: 'G-GQVJ94S5GW',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const dbh = getFirestore(app)
