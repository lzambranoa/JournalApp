import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Estos datos son traidos desde la consola de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyACgl9Vuf2ka3B2Qwr_gjkGF43_cldBzHI",
    authDomain: "react-app-cursos-5dc57.firebaseapp.com",
    projectId: "react-app-cursos-5dc57",
    storageBucket: "react-app-cursos-5dc57.appspot.com",
    messagingSenderId: "755900948998",
    appId: "1:755900948998:web:8c2177a80744464697d987"
  };
  // Se llama a la inicializacion de Firebase
  firebase.initializeApp(firebaseConfig);

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


