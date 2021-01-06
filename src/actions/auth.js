import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLoginEmailPassWord = (email, password) =>{
    return (dispatch) =>{

        setTimeout(() => {
            dispatch(login(123,'dani00'));
        }, 3500);
    }
}

/*Esta action nos va permitir la autenticación de Google
es una funcion con un callback que nos retorna una promesa usando el Provider
definido en el archivo firebaseConfig.js*/

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}