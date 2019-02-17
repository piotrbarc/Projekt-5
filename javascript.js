
//initialization
document.addEventListener('DOMContentLoaded', addNote2) 


class form  {};
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
  let br = "<br/>"
  let text = form.noteText.value;
  let text2 = form.noteText2.value;
  let All=text+br+text2;
  let temp1 =localStorage.getItem('content')+br+br+All;
  let note = document.createElement(`div`);
 

  note.classList.add(`note`);
 //Add note to form
  note.innerHTML = `<br/><br/><div class='note-text'>${text}</div><div class='note-text'>${text2}</div>`;
  
//save value to local storage
  localStorage.setItem('content',temp1);
  notes.appendChild(note);

  // clear areatext after press button
  form.noteText.value = ``;
  form.noteText.focus();
  form.noteText2.value = ``;
  form.noteText2.focus();

 
}



//funcion get value from local storage and diplay on the form 

function addNote2() {
//get value from local storage
    let text = localStorage.getItem('content');
    let note = document.createElement(`div`);
   
  
    note.classList.add(`note`);
   //display on the form 
    note.innerHTML = `<div class='note-text'>${text}</div>`;
    notes.appendChild(note);
  
    // clear areatext after press button
    form.noteText.value = ``;
    form.noteText.focus();
    form.noteText2.value = ``;
    form.noteText2.focus();
  










// buttons - event listeners
form.addButton.addEventListener(`click`, function (e) {
  e.preventDefault();  
  if (form.noteText.value != `` && form.noteText2.value != ``) {
    addNote();
    
   

  }
})
}
