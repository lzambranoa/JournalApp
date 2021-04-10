import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { startGoogleLogin, startLoginEmailPassWord } from '../../../actions/auth';


// esta código nos permite saber si se esta llmando una funcion especificada
jest.mock('../../../actions/auth.js', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassWord: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn(); 

const wrapper = mount(
     <Provider store={store}>
         <MemoryRouter>
            <LoginScreen /> 
         </MemoryRouter>
     </Provider>
     )


describe('Pruebas en <LoginScreen />', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();  // se recomienda limpiar todos los mocks
    })

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de disparar la accion startGoogleLogin', () => {

        //esta linea simula el onClick del boton
        wrapper.find('.google-btn').prop('onClick')();

        // Es llamado por lo menos una vez
        expect( startGoogleLogin ).toHaveBeenCalled();
    })

    test('debe de disparar el starLogin con los respectivos argumentos', () => {

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(startLoginEmailPassWord).toHaveBeenLastCalledWith('leonardo@hotmail.com', '123456');
    })
})