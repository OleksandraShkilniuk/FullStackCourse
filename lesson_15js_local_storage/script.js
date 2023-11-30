//create an array to store data
let todolist = [];



//generate Uid

function generateUid () {
    return Math.random().toString(16).slice(2);
}

//show modal
function showModal() {
    document.getElementById('modal-content').classList.add('d-block')
}
document.getElementById('add-task').addEventListener('click', create);

//hide modal
function hideModal() {
    document.getElementById('modal-content').classList.remove('d-block');
    document.getElementById('delete-modal').classList.remove('d-block');
}
document.getElementById('close-modal').addEventListener('click', hideModal);


//saving to local storage

function init() {
    //take from local storage
    todolist = JSON.parse(localStorage.getItem('todo-list'))
    //create html for each item
    todolist.forEach((item) => createHtmLtodoItem(item))
}


//empty the field

function create() {
    document.getElementById('form-title').value = '';
    document.getElementById('form-uid').value = '';
    document.getElementById('form-description').value = '';
    showModal()
}

//edit

function edit(uid) {
    const title = document.getElementById(`title-${uid}`).innerText;
    const description = document.getElementById(`description-${uid}`).innerText;

    document.getElementById('form-title').value = title;
    document.getElementById('form-uid').value = uid;
    document.getElementById('form-description').value = description;
    showModal()
}


//delete
function deleteLi(uid) {
    document.getElementById('delete-modal').classList.add('d-block');
    let confirmDeletion = document.querySelector('.confirm-deletion');
    confirmDeletion.addEventListener('click', function(event) {
        let liElementDeleted = document.getElementById(`item-${uid}`);
        liElementDeleted.remove();
        //add a delete from local storage function that will delete item with uid from lS when deleteLi is called
        deletefromLocalStorage(uid);
        hideModal()
    })
}

//delete from local storage
function deletefromLocalStorage(uid) {
    //get item from local storage
    let storedTodo = JSON.parse(localStorage.getItem('todo-list'));

    //find index of deleted item
    let index = storedTodo.findIndex((item) => item.uid === uid);

    //if item exists use an array splice method to remove 1 item under this index
    if (index !== -1) {
        storedTodo.splice(index, 1); // Remove the item from the array
        localStorage.setItem('todo-list', JSON.stringify(storedTodo)); // Save the updated array
    }
}

//save Li
function save(data) {
    let uid = data.uid ? data.uid : generateUid();

    data.uid = uid;

    let index = todolist.findIndex((item) => item.uid === uid)

    if (index===-1) {
        todolist.push(data);
    } else {
        todolist[index] = data;
    }

    localStorage.setItem('todo-list', JSON.stringify(todolist));

    let editedLi = document.getElementById(`item-${uid}`);
    if(editedLi) {
        editedLi.querySelector(`#title-${uid}`).innerText = data.title;
        editedLi.querySelector(`#description-${uid}`).innerText = data.description;
        return
    }
    createHtmLtodoItem(data)
}


//saving html elements

function createHtmLtodoItem(data) {
    let liElement = document.createElement('li');
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    liElement.id = `item-${data.uid}`;
    liElement.innerHTML = `
    <div>
    <p>Task:</p>
    <div id="title-${data.uid}">${data.title}</div>
    </div>
    <div>
    <p>Description:</p>
    <div id="description-${data.uid}">${data.description}</div>
    </div>
    <div class="d-flex align-items-end">
        <button data-uid="${data.uid}" class="btn btn-warning edit-modal" type="button">Edit</button>
        <button data-uid="${data.uid}" class="btn btn-danger delete-button" type="button">Delete</button>
    </div>
    `
    document.getElementById('todo').appendChild(liElement);

    let editButton = liElement.querySelector('.edit-modal');
    editButton.addEventListener('click', function(event) {
        edit(event.target.dataset.uid);
    })

    let deleteButton = liElement.querySelector('.delete-button');
    deleteButton.addEventListener('click', function(event) {
        deleteLi(event.target.dataset.uid);
    })
}


//preventing form from reloading
document.getElementById('save-modal').addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.getElementById('form-title').value;
    const uid = document.getElementById('form-uid').value;
    const description = document.getElementById('form-description').value;

    let data = {
        title,
        uid,
        description,
    }
    if(validationForm(data)) {
        save(data);
        hideModal();
    }
})

function validationForm(data) {

    clearErrors()

    let decision = true;

    if(!data.title) {
    document.getElementById('form-title-invalid-feedback').innerText = 'This field is required';
    document.getElementById('form-title').classList.add('is-invalid');
    decision = false;
    } else if(data.title.trim() === '') {
        document.getElementById('form-title-invalid-feedback').innerText = 'Add some text';
        document.getElementById('form-title').classList.add('is-invalid');
        decision = false;
    } else if(data.title.length > 255) {
        document.getElementById('form-title-invalid-feedback').innerText = 'Max amount of symbols is 255';
        document.getElementById('form-title').classList.add('is-invalid');
        decision = false;
    }

    if (data.description && !data.description.trim()) {
        document.getElementById('form-description-invalid-feedback').innerText = 'Description cannot consist of only spaces';
        document.getElementById('form-description').classList.add('is-invalid');
        decision = false;
    }
    return decision;
};

function clearErrors() {
    document.getElementById('form-title').classList.remove('is-invalid');
}

init();