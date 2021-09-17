import { ADD_NOTE, DELETE_NOTE } from "./note-action";
import Note from "../models/note";

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = new Note(
        new Date().toString(),
        action.noteData.title,
        action.noteData.note
      );
      return {
        notes: state.notes.concat(newNote),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.nid),
      };
    default:
      return state;
  }
};
