export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (title, note) => {
  return {
    type: ADD_NOTE,
    noteData: {
      title,
      note,
    },
  };
};

export const deleteNote = (noteId) => {
  return { type: DELETE_NOTE, nid: noteId };
};
