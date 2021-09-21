// const classNames = {
//     TODO_ITEM: 'todo-container',
//     TODO_CHECKBOX: 'todo-checkbox',
//     TODO_TEXT: 'todo-text',
//     TODO_DELETE: 'todo-delete',
// }
var uncheckedCount = 0;
var count = 0;
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');


function checked() {
    let elems = [...document.querySelectorAll('li')];
    for (let i = 0; i < elems.length; i++) {
        elems[i].onclick = function(e) {
            e.preventDefault();
            if (this.classList.value !== 'active') {
                this.classList.add('active');
                uncheckedCount--;
            } else if (this.classList.value === 'active') {
                this.classList.remove('active');
                uncheckedCount++;
            }
            uncheckedCountSpan.innerHTML = uncheckedCount;
            itemCountSpan.innerHTML = count;
        }
    }
}


function addElem() {
    const li = document.createElement("li");
    const input = document.getElementById("Input");
    const t = document.createTextNode(input.value);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    li.appendChild(t);
    li.appendChild(deleteButton)
    if (input.value === '') {
        alert('You must write smth');
    } else {
        list.appendChild(li);
        count++;
        uncheckedCount++;
    }
    deleteButton.addEventListener('click', event => {
        list.removeChild(li)
        count--;
        if (li.classList.value === 'active') {
            uncheckedCount--;
        }
    });

    itemCountSpan.innerHTML = count;
    uncheckedCountSpan.innerHTML = uncheckedCount;
    input.value = '';
    list.onclick = checked();
}