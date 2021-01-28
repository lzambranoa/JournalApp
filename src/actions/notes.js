import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

/*getState es una funcion que nos permite acceder a todos nuestro state y de alli podemos
extraer el uid del usuario que crea la nota */
export const startNewNote = () =>{
    return async ( dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // hacemos referenia a nuestra base de datos
        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );

        dispatch( activeNote( doc.id, newNote ))
    }
}

/*Activamos la nota para cargar a la base de datos la información completa*/
export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async ( dispatch ) => {

        const notes = await loadNotes(uid);
        dispatch( setNotes(notes))
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});