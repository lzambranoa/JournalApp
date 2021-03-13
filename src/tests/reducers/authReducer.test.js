import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('debe de realizar el login', () => {

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Leonardo'
            }
        }
        const state = authReducer( initState, action);

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Leonardo'
        })
    })

    test('debe de realizar el logout', () => {

        const initState = {
            uid: 'jkjsjhjghgh454822',
            name: 'Leonardo'
        };

        const action = {
            type: types.logout,
        }

        const state = authReducer( initState, action);

        expect( state ).toEqual({})
    })

    test('no debe de hacer cambios ene el state', () => {

        const initState = {
            uid: 'jkjsjhjghgh454822',
            name: 'Leonardo'
        };

        const action = {
            type: 'jhkjkjskajk',
        }

        const state = authReducer( initState, action);

        expect( state ).toEqual(initState)
    })
})