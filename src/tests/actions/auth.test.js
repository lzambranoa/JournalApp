import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLoginEmailPassWord, startLogout } from "../../actions/auth";
import { types } from "../../types/types";
import '@testing-library/jest-dom';


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {


    beforeEach(() => {
        store = mockStore(initState);
    })

    test('login y logout debe de crear la accion respectiva', () => {

        const uid = 'abc123';
        const displayName = 'Leonardo';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout
        });
    });

    test('debe de realiar el startlogout', async() => {

       await store.dispatch(startLogout());

       const actions = store.getActions();
       
       
       expect( actions[0] ).toEqual({
           type: types.logout
       });

       expect( actions[1] ).toEqual({
           type: types.notesLogoutCleaning
       });
    });

    test('debe de iniciar el startLoginEmailPassword', async() => {

        await store.dispatch( startLoginEmailPassWord('test@testing.com','123456'));

        const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: 'r29Yd8zI8rcQYWKbXdJp6J2Attq2',
                displayName: null 
            }
        })
    })

})