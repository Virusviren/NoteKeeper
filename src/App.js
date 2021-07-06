import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(Newnote) {
    console.log(Newnote);
    setNotes((previousNotes) => {
      return [...previousNotes, Newnote];
    });
  }
  function deleteNote(id) {
    setNotes((previousNotes) => {
      return previousNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={uuidv4()}
          title={note.title}
          content={note.content}
          id={note.id}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
