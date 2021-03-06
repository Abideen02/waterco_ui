/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "https://waterco--api.herokuapp.com";

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl + "/routes",
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((route) => {
                addRecordToTable(route);
            });
        }
    });
});

function addRecordToTable(data) {
    var routeslist = document.getElementById("routeslist").getElementsByTagName("tbody")[0];
    var newRecord = routeslist.insertRow(routeslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.route_id;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.route_name;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                        <a href="index.php?page=routesdash&id="` + data.route_id + `>View</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function onFormSubmit() {
    var formData = {};
    formData["route_name"] = document.getElementById("route_name").value;
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
        url: baseUrl + "/routes",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTable(response.data);
        }
    });
}

function onEdit(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    document.getElementById("route_name").value = selectedRecord.cells[2].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/routes/" + selectedRecordID,
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
    selectedRecord.cells[1].innerHTML = data.route_id;
    selectedRecord.cells[2].innerHTML = data.route_name;

    function onDelete(td) {
        if (confirm('Are you sure you want to delete this record')) {
            row = td.parentElement.parentElement;
            document.getElementById("routeslist").deleteRow(row.rowIndex);
            clearForm();
        }

    }

    function clearForm() {
        document.getElementById("route_name").value = "";

    }
}