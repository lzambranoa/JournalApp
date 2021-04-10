import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';


// esta código nos permite saber si se esta llmando una funcion especificada
jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),    
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),    
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

const wrapper = mount(
     <Provider store={store}>
         <MemoryRouter>
            <Sidebar /> 
         </MemoryRouter>
     </Provider>
     )

describe('Pruebas en el <Sidebar />', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();  // se recomienda limpiar todos los mocks
    })


    test('debe de mostrarse correctamente', () => {
        // snapshot
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de llamar al startLogout', () => {

        wrapper.find('.btn').prop('onClick')();
        // debe de llamar la accion del startLogout
        expect( startLogout ).toHaveBeenCalled();

    });

    test('debe de llamar el startNewNote', () => {

        wrapper.find('.journal__new-entry').prop('onClick')();

        expect( startNewNote ).toHaveBeenCalled();

    });




})