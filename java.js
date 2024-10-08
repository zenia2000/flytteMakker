const tasks =   [
    {'id' : '1', 'link' :'<a href="https://www.borger.dk">Borger.dk</a>','opg': 'Flytte adresse på borger.dk', 'done' : '[_]' , 'missing' : '[_]'},
    {'id' : '2', 'link' :'<a href="https://www.borger.dk">Borger.dk</a>','opg': 'Vælg Læge', 'done': '[_]' , 'missing' : '[_]'},
    {'id' : '3', 'link': '<a href="https://www.silvan.dk/produkter/bolig-moebler/opbevaring/flyttekasser-tilbehoer">Silvan.dk</a>','opg': 'Køb flytte kasser', 'done': '[_]' , 'missing' : '[_]'},
    {'id' : '4', 'link': ' ','opg': 'spørg forældre om hjælp til flyt af ting', 'done': '[_]' , 'missing':'[_]'}
            ]; //creates an array called tasks - with objects.

buildTable(tasks)

//shows array in a table
function buildTable(data){
    let table = document.getElementById('myTable')
    for (let c=0;c<data.length;c++){
        let row = `<tr>
            <td>${data[c].id}</td>
            <td>${data[c].link}</td>
            <td>${data[c].opg}</td>
            <td>${data[c].done}</td>
            <td>${data[c].missing}</td>
        </tr>`

        table.innerHTML += row
        document.getElementById("myBtn").addEventListener("click",ryd);
        document.getElementById("red").addEventListener("click",red);


    }
}

function ryd(){
    document.getElementById("myTable").innerHTML = "";
}

function red(){
    document.getElementById("myTable").style.color = "red"
}

// ----------------------------------------------------------------------------------------------------------------

const buy = ["Havregryn","Pasta", "Ketchup"]

function addToArray(){
    let template = buy.map(item => `<li>${item}</li>`).join('\n');
    document.querySelector('ul').innerHTML = template;
}

addToArray();

let btnAdd = document.getElementById('add');
let textInput = document.getElementById('input');

btnAdd.addEventListener('click', function () {
    buy.push(textInput.value);
    textInput.value = '';
    addToArray()
});


let btnDelete = document.getElementById('delete');

btnDelete.addEventListener('click', function () {
    buy.pop();
    addToArray()
});