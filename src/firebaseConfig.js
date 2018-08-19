import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCBLDPYPdba6jV5dVvo6MJyAHB1KGRwZ5E",
    authDomain: "todo-app-react-redux-4a07d.firebaseapp.com",
    databaseURL: "https://todo-app-react-redux-4a07d.firebaseio.com",
    projectId: "todo-app-react-redux-4a07d",
    storageBucket: "todo-app-react-redux-4a07d.appspot.com",
    messagingSenderId: "315669519808"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const database = firebase.database()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()