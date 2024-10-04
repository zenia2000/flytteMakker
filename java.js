let text = "";
let idCount = 0;

const tasks =   [
    {'dato' :'1','opg': 'a'},
    {'dato' :'2','opg': 'b'},
    {'dato': '3','opg': 'c'},
    {'dato': '4','opg': 'd'}
            ]; //creates an array called tasks - with objects.

buildTable(tasks)

//shows array in a table
function buildTable(data){
    let table = document.getElementById('myTable')
    for (let c=0;c<data.length;c++){
        let row = `<tr>
            <td>${data[c].dato}</td>
            <td>${data[c].opg}</td>
        </tr>`

        table.innerHTML += row

    }
}

//Different attempt at adding new stuff
function addNew(){
 let byId1    = document.getElementById('dateInput');
 let byId2    = document.getElementById('textInput');
tasks.push(byId1,byId2);
}


//attempt at adding new tasks to table
let btnAdd = document.querySelector('button');
let dateInput = document.querySelector('input');
let textInput = document.querySelector('input');

btnAdd.addEventListener('click', function () {
    tasks.push(dateInput.value , textInput.value);
    buildTable(tasks);
});



/*
//loops the array, each item on a new line. Gives each item an id.
for (let x=0; x<tasks.length;x++){

    idCount = tasks[x];
    text += tasks[x] + " Id: " + idCount + "<br>";
}

//gives array an id useable by html.
document.getElementById("taskList").innerHTML = text;

document.getElementById("id").innerHTML = idCount;
function removeFunc(x){
    if (idCount == tasks[x]){
        tasks.pop(x);
    }
}

function showId(x){
    if (idCount == tasks[x]){
        return idCount;
    }
}
*/
