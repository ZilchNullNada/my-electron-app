const inputinfo = {
    input : document.getElementById("noteInput"),
    inputDate : document.getElementById("noteDate"),
    inputTitle : document.getElementById("noteTitle")
}
const output = document.getElementById("output");


// SAVE
for (input in inputinfo){
    inputinfo[input].addEventListener("change", () => {
        const saveData = {
            input: inputinfo.input.value,
            inputDate: inputinfo.inputDate.value,
            inputTitle: inputinfo.inputTitle.value
        };

        localStorage.setItem("savedData", JSON.stringify(saveData));

        output.innerText = "Saved!";
    });
}

// LOAD
document.getElementById("loadBtn").addEventListener("click", () => {

    const savedData = localStorage.getItem("savedData");

    const parsedData = JSON.parse(savedData);

    inputinfo.input.value = parsedData.input;
    inputinfo.inputDate.value = parsedData.inputDate;
    inputinfo.inputTitle.value = parsedData.inputTitle;

    output.innerText = "Loaded!";
});


// CLEAR
document.getElementById("clearBtn").addEventListener("click", () => {

    localStorage.removeItem("savedData");

    output.innerText = "Cleared!";
});