let text = "";
let idCount = 0;
const tasks = ["1","2","3","4"]; //creates an array called tasks



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