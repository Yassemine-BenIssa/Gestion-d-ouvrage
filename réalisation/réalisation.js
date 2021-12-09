var selectedRow = null
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var crud = readcrud();
    if(selectedRow ===null){
        insertNewRow(crud);
    }
    else{
        updateRecord(crud);
    }
    resetForm();
});


function readwork() {

    var work = {};
    crud["title"] = document.getElementById("inputTitle").value;
    crud["author"] = document.getElementById("inputAuthor").value;
    crud["price"] = parseFloat(document.getElementById("inputPrix").value);
    crud["date"] = document.getElementById("inputDate").value;
    crud["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("workType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            crud["type"] = cheackValues[i].value;
            break;
        }
    }
    return crud;
}



function insertNewRow(crud) {
    if(confirm('are you sure ?')){
        var tableBody = document.getElementById("crudsTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = crud.title;

    newRow.insertCell(1).innerHTML = crud.author;
    
    newRow.insertCell(2).innerHTML = crud.price;
        
    newRow.insertCell(3).innerHTML= crud.date;
    
    newRow.insertCell(4).innerHTML= crud.language
   
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = crud.type;
    
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button>  <button onClick='onDelete(this)'>Delete</button>`;

    }
    



}
//Edit the crud
function onEdit(td){
    
    selectedRow = td.parentElement.parentElement;
    document.getElementById('inputTitle').value = selectedRow.cells[0].innerHTML;
    document.getElementById('inputAuthor').value = selectedRow.cells[1].innerHTML;
    document.getElementById('inputPrix').value = selectedRow.cells[2].innerHTML;
    document.getElementById('inputDate').value = selectedRow.cells[3].innerHTML;
    document.getElementById('inputLanguage').value = selectedRow.cells[4].innerHTML;
    document.getElementById('gridCheck').value = selectedRow.cells[5].innerHTML;


}
function updateRecord(work){
    selectedRow.cells[0].innerHTML = crud.title;
    selectedRow.cells[1].innerHTML = crud.author;
    selectedRow.cells[2].innerHTML = crud.price;
    selectedRow.cells[3].innerHTML = crud.date;
    selectedRow.cells[4].innerHTML = crud.language;
    selectedRow.cells[5].innerHTML = crud.type;


}
//Delete the crud
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
      var  row = td.parentElement.parentElement;
        document.getElementById('crudsTable').deleteRow(row.rowIndex)
    }
    resetForm();
}

//reset the crud
function resetForm(){
    document.getElementById('inputTitle').value ='';
    document.getElementById('inputAuthor').value ='';
    document.getElementById('inputPrix').value ='';
    document.getElementById('inputDate').value ='';
    document.getElementById('inputLanguage').value ='';
    document.getElementById('gridCheck').value ='';

}