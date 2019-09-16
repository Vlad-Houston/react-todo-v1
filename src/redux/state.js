import { rerenderEntireTree } from "../rerender";

let state = {
  notes: [{ note: "" }]
};

export let addNewNote = note => {
  let newNote = {
    note: note
  };
  state.notes.push(newNote);
  rerenderEntireTree(state);
};

export default state;
