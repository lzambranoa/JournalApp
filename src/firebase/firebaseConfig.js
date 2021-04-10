import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// console.log( process.env );

// Estos datos son traidos desde la consola de Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };

  // const firebaseConfigTesting = {
  //   apiKey: "AIzaSyA7mLV91bgf62A5Df3XSZ__Vtaa9pb9_rs",
  //   authDomain: "redux-demo-fe25e.firebaseapp.com",
  //   projectId: "redux-demo-fe25e",
  //   storageBucket: "redux-demo-fe25e.appspot.com",
  //   messagingSenderId: "1057039354147",
  //   appId: "1:1057039354147:web:532c4b6ba9c6f691f7a496"
  // };

  // if( process.env.NODE_ENV === 'test' ) {
  //     //testing
  //   firebase.initializeApp(firebaseConfigTesting);
  // } else {
  //     //dev/prod
  //     // Se llama a la inicializacion de Firebase
      firebase.initializeApp(firebaseConfig);
  // }

  // esta variable hace referencia a la base de datos
  // la vamos a usar para grabar la información
  const db = firebase.firestore();

  /*Esta variable hace referencia a el auth Provider
  para que nos permita hacer la autenticacion con Google*/
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }


