import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    id: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((previousState) => {
      return {
        ...previousState,
        [name]: value,
        id: uuidv4(),
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note...."
          rows="3"
          value={note.content}
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
