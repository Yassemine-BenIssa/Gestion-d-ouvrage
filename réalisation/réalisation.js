var selectedRow = null
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validate()) {
        var crud = readwork();
        if (selectedRow == null)
            insertNewRow(crud);
        else
        if (confirm("Confirmer que vous voulez modifier cette œuvre?"))
            editRow(crud)
        resetForm();
    } else {
        alert("Remplissez tous les champs")
    }
})
function resetForm() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputAuthor").value = "";
    document.getElementById("inputPrix").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputLanguage").value = "";
    document.querySelector('input[name="workType"]:checked').checked = false
    selectedRow = null;
}
var onEditButton = document.getElemen
function readwork() {

    var crud = {};
    crud.title = document.getElementById("inputTitle").value;
    crud["author"] = document.getElementById("inputAuthor").value;
    crud["price"] = parseFloat(document.getElementById("inputPrix").value);
    crud["date"] = document.getElementById("inputDate").value;
    crud["language"] = document.getElementById("inputLanguage").value;
    crud["type"] = document.querySelector('input[name="workType"]:checked').value
    return crud;
}
function insertNewRow(crud) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = crud.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = crud.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = crud.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = crud.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = crud.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = crud.type
    cell7 = newRow.insertCell(6)
    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")
    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.className = "btn btn-primary me-1"
    editButton.setAttribute('onclick', 'onEdit(this)')
    var deleteContent = document.createTextNode('Delete')
    deleteButton.appendChild(deleteContent)
    deleteButton.className = "btn btn-secondary"
    deleteButton.setAttribute("onclick", 'onDelete(this)')
    cell7.appendChild(editButton)
    cell7.appendChild(deleteButton)

}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputTitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputAuthor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputPrix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputLanguage").value = selectedRow.cells[4].innerHTML;

    var checkValue = document.getElementsByName("workType");
    for (var i = 0; i < checkValue.length; i++) {
        if (checkValue[i].value == selectedRow.cells[5].innerHTML) {
            checkValue[i].checked = true
        }
    }
}

function editRow(crudToEdit) {
    selectedRow.cells[0].innerHTML = crudToEdit.title;
    selectedRow.cells[1].innerHTML = crudToEdit.author;
    selectedRow.cells[2].innerHTML = crudToEdit.price;
    selectedRow.cells[3].innerHTML = crudToEdit.date;
    selectedRow.cells[4].innerHTML = crudToEdit.language;
    selectedRow.cells[5].innerHTML = crudToEdit.type;

}
function onDelete(td) {
    if (confirm("Sûr vous voulez supprimer cette œuvre!?")) {
        row = td.parentElement.parentElement;
        document.getElementById("worksTable").deleteRow(row.rowIndex)
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("inputTitle").value == "") {
        isValid = false;
    }
    if (document.getElementById("inputAuthor").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputPrix").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputDate").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputLanguage").value == "") {
        isValid = false;
    } 
    if (document.querySelector('input[name="crudType"]').value == null) {
        isValid = false;
    }  
    return isValid;
}