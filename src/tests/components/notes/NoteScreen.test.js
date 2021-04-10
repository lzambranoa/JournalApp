import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';



// esta código nos permite saber si se esta llmando una funcion especificada
jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),    
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
            title: 'Hola',
            body: 'Mundo',
            date: 0
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn(); 

const wrapper = mount(
     <Provider store={store}>
            <NoteScreen /> 
     </Provider>
     )

describe('Pruebas en <NoteScreen />', () => {


    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de disparar el active note', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de Nuevo'
            }
        });

        expect( activeNote ).toHaveBeenLastCalledWith(
            'ABC',
            {
                body: 'Mundo',
                title: 'Hola de Nuevo',
                id: 'ABC',
                date: 0
            }
        );
    })
})