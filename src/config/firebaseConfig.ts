// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: 'AIzaSyAqX_1zC-PrDbCQKMU3X5iuWzxHVpoAqHQ',
  // authDomain: 'intrinsic-value-app.firebaseapp.com',
  // // authDomain: 'auth.intrinsicvalue.app',
  // projectId: 'intrinsic-value-app',
  // storageBucket: 'intrinsic-value-app.appspot.com',
  // messagingSenderId: '534761462171',
  // appId: '1:534761462171:web:9c57eae7621628df00e93e',
  // measurementId: 'G-L3VTJDB8PE',

  apiKey: 'AIzaSyAqX_1zC-PrDbCQKMU3X5iuWzxHVpoAqHQ',
  authDomain: 'intrinsic-value-app.firebaseapp.com',
  projectId: 'intrinsic-value-app',
  storageBucket: 'intrinsic-value-app.appspot.com',
  messagingSenderId: '534761462171',
  appId: '1:534761462171:web:832e991ab457cc5900e93e',
  measurementId: 'G-FV71W7G0VC',

  // apiKey: 'AIzaSyCsURxQcN7SShHjqjy5BC2qd_9Zgto86y0',
  // authDomain: 'private-market-data.firebaseapp.com',
  // projectId: 'private-market-data',
  // storageBucket: 'private-market-data.appspot.com',
  // messagingSenderId: '126114183301',
  // appId: '1:126114183301:web:f6d25ddcc512ef6f1091ec',
}

// const firebaseConfig = {
//   apiKey: 'AIzaSyCsURxQcN7SShHjqjy5BC2qd_9Zgto86y0',
//   authDomain: 'private-market-data.firebaseapp.com',
//   projectId: 'private-market-data',
//   storageBucket: 'private-market-data.appspot.com',
//   messagingSenderId: '126114183301',
//   appId: '1:126114183301:web:f6d25ddcc512ef6f1091ec',
// }

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const dbh = getFirestore(app)
