function add () {
    //create uid so each time button is clicked ID is generated

    let uid = generateUid();

    //create Li element
    document.getElementById('to-do-list');
    let liElement = document.createElement('li');

    //creating content inside Li with prompt
    let text = prompt('Set your plans');

    //giving Li Id

    liElement.id = `item-${uid}`;

    //creating elements inside Li
    liElement.innerHTML = `
    <div id = 'title-${uid}'>${text}</div>
    <div id = 'div-${uid}'>
      <button type="button" class="btn btn-warning" onclick="edit('${uid}')">Edit</button>
      <button type="button" class="btn btn-danger" onclick="deleteLi('${uid}')">Delete</button>
    </div>
    `
    //appending elements in LI and adding some Bootstrap
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    document.getElementById('to-do-list').appendChild(liElement);
};

//edit function
function edit(uid) {
    //finding div with text and assigning its value to the const
    const oldText = document.getElementById(`title-${uid}`).innerText;
    //assigning new value to the text
    const newText = prompt(oldText);
    //checking if this value is empty
    if (newText != null) {
        document.getElementById(`title-${uid}`).innerText = newText;
    }

}
function deleteLi (uid) {
    //confirm deletion
    let confirmDeletion = confirm('Are you sure?')
   // add a clause if user confirms then delete
    if(confirmDeletion) {
        let liElementRemoved = document.getElementById(`item-${uid}`);
        liElementRemoved.remove();
    }
}

//generate password
function generateUid () {
    return Math.random().toString(16).slice(2);
};
//
// //Dynamic table
//
//
// function createRowsNumber() {
//
//     //asking user how many cells and rows he wants
//
//     let rowsNumber = prompt('How many rows do you want?');
//     let cellsNumber = prompt('How many cells do you want?');
//
//     //creating number of rows
//
//     for (let i = 0; i < rowsNumber; i++) {
//         //creating uid for rows
//         let uidforRow = generateIDforTR();
//
//         //creating tr
//         let tableRow = document.createElement('tr');
//
//         //assigning id for tr
//         tableRow.id = `row-${uidforRow}`;
//
//         //appending row to the tbody
//         document.getElementById('ourTable').appendChild(tableRow);
//
//         //creating cells
//
//         for (let k = 0; k < cellsNumber; k++) {
//
//             // Generate unique ID for each cell
//             let uidforCell = generateIDforTR();
//
//             //creating cell
//             let tableCell = document.createElement('td');
//
//             //appending cell
//             document.getElementById(`row-${uidforRow}`).appendChild(tableCell);
//
//             //adding some text inside
//             tableCell.innerText = 'some text';
//
//             // Use the unique ID for each cell
//             tableCell.id = `cell-${uidforCell}`;
//
//             //addEventListener to each cell which will change inner Text
//
//             tableCell.addEventListener('click', function () {
//                 const oldValue = document.getElementById(`cell-${uidforCell}`).innerText;
//                 const newValue = prompt(oldValue);
//                 if (newValue !== null) {
//                     document.getElementById(`cell-${uidforCell}`).innerText = newValue;
//                 }
//             });
//         }
//     }
// }
//


function generateIDforTR () {
    return Math.random().toString(16).slice(2);
}


//let cols = prompt('How many cols do you want in each row?');

function createRows() {
    let rows = prompt('How many rows do you want?');
    let rowUidArray = [];

    for (let i = 0; i < rows; i++) {
        let rowUid = generateIDforTR();
        rowUidArray.push(rowUid);
        let rowElement = document.createElement('tr');
        rowElement.id = rowUid;
        document.getElementById('ourTable').appendChild(rowElement);
    }

    createCells(rowUidArray);
}

function createCells(rowUidArray) {
    let cells = prompt('How many cells do you want?');

    for (let i = 0; i < rowUidArray.length; i++) {
        for (let j = 0; j < cells; j++) {
            let cellUid = generateIDforTR();
            let cellElement = document.createElement('td');
            cellElement.id = cellUid;
            cellElement.addEventListener('click', function() {
                fillYourCell(cellUid);
            });
            document.getElementById(rowUidArray[i]).appendChild(cellElement);
        }
    }
}

let buttonToCreateRows = document.getElementById('table-creation');
buttonToCreateRows.addEventListener('click', createRows);

function fillYourCell (cellUid) {
    const oldText = document.getElementById(cellUid).innerText;
    const newText = prompt(oldText);
    if (newText != null) {
        document.getElementById(cellUid).innerText = newText;
    }
}