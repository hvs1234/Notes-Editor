const notesContainer = document.querySelector('.notes-container');
const noteBtn = document.querySelector('#note-btn');
let notes = document.querySelectorAll('.input-box')

showStorage = () => {
    notesContainer.innerHTML = localStorage.getItem('notes')
};

showStorage();

updateStorage = () => {
    localStorage.setItem('notes',notesContainer.innerHTML);
};

noteBtn.addEventListener('click',() => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable','true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click',(e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();  
        updateStorage();
    }
    else if(e.target.tagName === 'P')
    {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            };
        });
    } 
});