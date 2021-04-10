import { types } from "../types/types";
import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from "./notes";


/*Esta action nos va permitir logearnos con un susraio y contraseña
ya creados o registrados */
export const startLoginEmailPassWord = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
            dispatch(login(user.uid, user.displayName));

            dispatch( finishLoading() );
        })
        .catch( e => {
            console.log(e);
            dispatch( finishLoading() );
            Swal.fire('Error', e.message, 'error');
        })
    }
}

/*Esta action nos va permitir registrar el email, password y el name en el firebase*/

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name }); // actualiza la informacion del name
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
    }
}



/*Esta action nos va permitir la autenticación de Google
es una funcion con un callback que nos retorna una promesa usando el Provider
definido en el archivo firebaseConfig.js*/

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
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
};

/*Creacion de una acción asincrona que permita iniciar
el boton del Logout*/
export const startLogout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();  // cierra la sesion en firebase

      dispatch(logout())
      dispatch( noteLogout());
    }
}

export const logout = () => ({
    type: types.logout
});