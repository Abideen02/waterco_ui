/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "http://localhost:2021";

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl + "/payments",
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((payment) => {
                addRecordToTable(payment);
            });
        }
    });
});

function addRecordToTable(data) {
    var paymentslist = document.getElementById("paymentslist").getElementsByTagName("tbody")[0];
    var newRecord = paymentslist.insertRow(paymentslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.bill_id;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.transaction_id;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.amount_paid;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                        <a href="index.php?page=paymentdash&id="` + data.bill_id + `>View</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function onFormSubmit() {
    var formData = {};
    formData["bill_id"] = document.getElementById("bill_id").value;
    formData["transaction_id"] = document.getElementById("transaction_id").value;
    formData["amount_paid"] = document.getElementById("amount_paid").value;


    if (selectedRecord == null) {
        saveFormData(formData);
    } else {
        updateFormRecord(formData);
    }
    clearForm();
}

function saveFormData(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/payments",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTable(response.data);
        }
    });
}

function on(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    document.getElementById("bill_id").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("transaction_id").value = selectedRecord.cells[2].innerHTML;
    document.getElementById("amount_paid").value = selectedRecord.cells[3].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/payments/" + selectedRecordID,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            updateTableRecord(data);
        }
    });

}

function updateTableRecord(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[1].innerHTML = data.bill_id;
    selectedRecord.cells[2].innerHTML = data.transaction_id;
    selectedRecord.cells[3].innerHTML = data.amount_paid;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("paymentslist").deleteRow(row.rowIndex);
        clearForm();
    }

}

function clearForm() {
    document.getElementById("bill_id").value = "";
    document.getElementById("transaction_id").value = "";
    document.getElementById("amount_paid").value = "";
}