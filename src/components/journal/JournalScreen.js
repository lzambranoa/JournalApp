import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { useSelector } from 'react-redux';


export const JournalScreen = () => {

    const {active} = useSelector( state => state.notes );
    return (
        <div className="journal__main-content animate_animated animate_fadeIn animate_faster">
            
            <Sidebar />

            
            <main>
                {
                    (active)
                        ?(<NoteScreen />)
                        :(<NothingSelected />)
                }

            </main>


        </div>
    )
}
