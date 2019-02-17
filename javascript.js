document.addEventListener('DOMContentLoaded', updateLocalStorage)







class form {}
// add button and areatext to js
form.noteText = document.querySelector(`#formNoteText1`);
form.noteText2 = document.querySelector(`#formNoteText2`);
form.addButton = document.querySelector(`#formAddButton`);

const notes = document.querySelector(`#notes`);

form.noteText.focus();
form.noteText2.focus();

// Functions

// add new note
function addNote() {
  let text = form.noteText.value;
  let text2 = form.noteText2.value;
  let note = document.createElement(`div`);
  let deleteButton = document.createElement(`span`);

  note.classList.add(`note`);
  
  note.innerHTML = `<div class='note-text'>${text}</div> <div class='note-text'>${text2}</div>`;
  // delate note
  deleteButton.classList.add(`note-delete`);
  deleteButton.innerHTML = `&times;`;

  updateLocalStorage()


  note.appendChild(deleteButton);  
  notes.appendChild(note);

  // clear areatext after press button
  form.noteText.value = ``;
  form.noteText.focus();
  form.noteText2.value = ``;
  form.noteText2.focus();
// adding delate button
  addListenerDeleteButton(deleteButton);
}


function updateLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes))
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener(`click`, function (e) {
    e.stopPropagation();      
    deleteNote(e);
  });
}

function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}



// buttons - event listeners
form.addButton.addEventListener(`click`, function (e) {
  e.preventDefault();  
  if (form.noteText.value != `` && form.noteText2.value != ``) {
    addNote();
  }
})

