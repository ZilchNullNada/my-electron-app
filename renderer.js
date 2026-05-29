const inputinfo = {
    notes : document.getElementById("notes"),
}



function showNotes() {
    document.getElementById("view").innerHTML = `
        <h2>Notes</h2>
        <textarea id = "notes"; style="width:100%; height:100%; background:black; color:white; resize: none; "  placeholder = "Start Your notes..."; onchange = "save('notes',notes.value)"></textarea>
    `;
    document.getElementById("notes").value = load('notes');
}

function removeTask(index){
    let checklistitems = JSON.parse(load("checklistitems"));
    if(checklistitems.length>1){
        checklistitems.splice(index, 1);
        save("checklistitems", checklistitems, true);
    }
    showChecklist();
}

function addTask(index){
    let checklistitems = JSON.parse(load("checklistitems"));
    checklistitems.splice(index+1, 0,"");
    save("checklistitems", checklistitems, true);
    showChecklist();
}
function saveTask(index){
    let id = document.getElementById("checklistitem"+index.toString())
    console.log(id.value)
    let checklistitems = JSON.parse(load("checklistitems"));
    checklistitems.splice(index, 1,id.value);
    save("checklistitems", checklistitems, true);
    showChecklist();
}

function showChecklist() {
    var display
    var checklistitems
    var test =  ["asd", 2, "sa"]

    if (load("checklistitems") === null){
        save("checklistitems", ["",""], true)
    }
    if (load("numitems") === null){
        save("numitems",1)
    }
    checklistitems = JSON.parse(load("checklistitems"))
    display =`
        <h2>Checklist</h2>
    `;
    for(let i = 0; i < checklistitems.length; i++){
        display += `
        <div class="task-row">
            <input
                id="checklistitem${i}"
                class="task-input"
                type="text"
                placeholder="New task"
                value="${checklistitems[i]}"
                onchange="saveTask(${i})">
            <input 
                type = "button" 
                onclick="addTask(${i})"
                class="task-input"
                value = "Add" >
            <input 
                type = "button" 
                onclick="removeTask(${i})"
                class="task-input" 
                value = "Remove" >
        </div>
        `;
    }
    document.getElementById("view").innerHTML = display
}

function showCalendar() {
    document.getElementById("view").innerHTML = `
        <h2>Calendar</h2>
        <p>(coming soon)</p>
    `;
}



// SAVE 
function save(key, data, stringify = false) {
    const value = stringify ? JSON.stringify(data) : data;
    localStorage.setItem(key, value);
}

// LOAD
function load(key, parse = false) {
    const data = localStorage.getItem(key);

    if (data === null) return null;

    return parse ? JSON.parse(data) : data;
}

// Load Data Appon Load
loadData();