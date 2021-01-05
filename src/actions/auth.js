import { types } from "../types/types"

export const startLoginEmailPassWord = (email, password) =>{
    return (dispatch) =>{

        setTimeout(() => {
            dispatch(login(123,'dani00'));
        }, 3500);
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