import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { AppRouter } from '../../routers/AppRouter';
import { login } from '../../actions/auth';
import { act } from 'react-dom/test-utils';
import { firebase } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';




// esta código nos permite saber si se esta llmando una funcion especificada
jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}));


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'ABC',
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn(); 



describe('Pruebas en <AppRouter />', () => {

    test('debe de llamar al login si estoy autenticado', async() => {

        let user;

        await act( async () => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
            user = userCred.user;
            
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                       <AppRouter /> 
                    </MemoryRouter>
                </Provider>
                )
        });

        expect( login ).toHaveBeenCalledWith('r29Yd8zI8rcQYWKbXdJp6J2Attq2', null);

    });

})