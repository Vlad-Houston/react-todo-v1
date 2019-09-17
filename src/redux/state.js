import { rerenderEntireTree } from "../rerender";

let state = {
  notes: [],
  id: 0
};

export let addNewNote = note => {
  let newNote = {
    note: note,
    id: state.id + 1
  };

  if (note !== "") {
    state.notes.push(newNote);
    state.id += 1;
  }
  rerenderEntireTree(state);
};

export default state;
