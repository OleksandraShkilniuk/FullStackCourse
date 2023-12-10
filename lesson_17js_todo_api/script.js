//create an array to store data
let todolist = [];

//chatting with server :)
let server = {
    url: 'https://crudapi.co.uk/api/v1/todo-list',
    api_token: 'zwu1AxR-rU3QlgEEIbNe-WNu7R_drDzk4Dk-w3UHf_9f5BOxTQ',

    store: function store(task) {
        return fetch(`${this.url}`, {
            method: 'post',
            headers: new Headers({
                'Authorization': `Bearer ${this.api_token}`,
                'Content-type': 'application/json',
            }),
            body: JSON.stringify([task])
        })
            .then((response) => response.json())
    },

    list: function list() {
        return fetch(`${this.url}`, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${this.api_token}`,
                'Content-type': 'application/json',
            })
        })
            .then((response) => {
                return response.json()
            })
    },

    put: function put(uid, task) {
        return fetch(`${this.url}/${uid}`, {
            method: 'put',
            headers: new Headers({
                'Authorization': `Bearer ${this.api_token}`,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(task),
        })
            .then((response) => {
                return response.json();
            });
    },

    remove: function remove(uid) {
        return fetch(`${this.url}/${uid}`, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': `Bearer ${this.api_token}`,
                'Content-Type': 'application/json',
            }),
        }).then((response) => {
            return response.json();
        });
    }
}

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


//saving to api
function init() {
    //take from local storage
     server.list().then((list) => {

        //reformatting items for ones from server
        list.items.sort(function(a,b) {
            return b._created - a._created;
        }).forEach((task) => {
            let formattedTask = {
                uid: task._uuid,
                title: task.title,
                description: task.description,
            };
            //create html for each item
            createHtmLtodoItem(formattedTask)
            todolist.push(formattedTask);
            console.log(formattedTask)
        })
    })
}

//
// //empty the field
//
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
        deletefromApi(uid);
        hideModal()
    })
}

//delete from local storage
function deletefromApi(uid) {
    //get item from local storage
    server.remove(uid).then((data) => {
        let index = todolist.findIndex((item) => item.uid === uid);
        if (index !== -1) {
            todolist.splice(index, 1);
        }
        });
}

//save Li
function save(data) {

    if(!data.uid) {
        server.store({
            title: data.title,
            description: data.description
        }).then((data) => {
            let formattedTask = {
                uid: data.items[0]._uuid,
                title: data.items[0].title,
                description: data.items[0].description,
            };
            todolist.push(formattedTask);
            createHtmLtodoItem(formattedTask);
        })
    } else {
        server.put(data.uid, {
            title: data.title,
            description: data.description,
        })
            .then((data) => {
                let formattedTask = {
                    uid: data._uuid,
                    title: data.title,
                    description: data.description,
                };

                let index = todolist.findIndex((item) => item.uid === formattedTask.uid);
                if (index !== -1) {
                    todolist[index] = formattedTask;
                    edit(formattedTask);
                }
            })
}}


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

//TODO: чекнути ініт функцію, чому вона занадто пізно апдейтить сторінку, і я отримую помилку