import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList=({notes,handleAddNote,handleDelete}) =>{
    return (
        <div className="notes-list">
           {notes.map((note)=>
               <Note id={note.id} text={note.text} date={note.date}
               handleDelete={handleDelete}
               />
           )}
           <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList
