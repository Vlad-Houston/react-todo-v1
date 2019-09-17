import { rerenderEntireTree } from "../rerender";

let state = {
  notes: []
};

export let addNewNote = note => {
  let newNote = {
    note: note
  };
  if (note !== "") {
    state.notes.push(newNote);
  }
  rerenderEntireTree(state);
};

export default state;
