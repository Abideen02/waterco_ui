// /* 
//  * To change this license header, choose License Headers in Project Properties.
//  * To change this template file, choose Tools | Templates
//  * and open the template in the editor.
//  */

// var selectedRecord = null;
// var selectedRecordID = null;
// var baseUrl = "http://localhost:2021";

// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: baseUrl + "/premises",
//         cache: false,
//         success: function (response) {
//             var data = response.data;
//             data.forEach((premise) => {
//                 addRecordToTable(premise);
//             });
//         }
//     });
// });
   
// function addRecordToTable(data) {
//     var premiseslist = document.getElementById("premiseslist").getElementsByTagName("tbody")[0];
//     var newRecord = premiseslist.insertRow(premiseslist.length);

//     cell1 = newRecord.insertCell(0);
//     cell1.innerHTML = data.premise_id;
//     cell2 = newRecord.insertCell(1);
//     cell2.innerHTML = data.customer_id;
//     cell3 = newRecord.insertCell(2);
//     cell3.innerHTML = data.meter_in;
//     cell4 = newRecord.insertCell(3);
//     cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
//                         <a href="index.php?page=premisedash&id="` + data.premise_id + `>View</a>
//                         <a onClick="onDelete(this)">Delete</a>`;
// }

// function onFormSubmit() {
//     var formData = {};
//     formData["premise_id"] = document.getElementById("premise_id").value;
//     formData["customer_id"] = document.getElementById("customer_id").value;
//     formData["meter_in"] = document.getElementById("meter_in").value;
    

//     if (selectedRecord == null) {
//         saveFormData(formData);
//     } else {
//         updateFormRecord(formData);
//     }
//     clearForm();
// }

// function saveFormData(data) {
//     var postData = JSON.stringify(data);
//     $.ajax({
//         type: "POST",
//         url: baseUrl + "/premises",
//         dataType: 'json',
//         data: postData,
//         contentType: "application/json; charset=utf-8",
//         cache: false,
//         success: function (response) {
//             addRecordToTable(response.data);
//         }
//     });
// }

// function on(td) {
//     selectedRecord = td.parentElement.parentElement;
//     selectedRecordID = selectedRecord.cells[0].innerHTML;
//     document.getElementById("premise_id").value = selectedRecord.cells[1].innerHTML;
//     document.getElementById("customer_id").value = selectedRecord.cells[2].innerHTML;
//     document.getElementById("meter_in").value = selectedRecord.cells[3].innerHTML;
// }

// function updateFormRecord(data) {
//     var updateData = JSON.stringify(data);
//     $.ajax({
//         type: 'PUT',
//         url: baseUrl + "/premises/" + selectedRecordID,
//         dataType: 'json',
//         data: updateData,
//         contentType: "application/json; charset=utf-8",
//         cache: false,
//         success: function () {
//             updateTableRecord(data);
//         }
//     });

// }

// function updateTableRecord(data) {
//     selectedRecord.cells[0].innerHTML = selectedRecordID;
//     selectedRecord.cells[1].innerHTML = data.premise_id;
//     selectedRecord.cells[2].innerHTML = data.customer_id;
//     selectedRecord.cells[3].innerHTML = data.meter_in;
// }

// function onDelete(td) {
//     if (confirm('Are you sure you want to delete this record')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("premiseslist").deleteRow(row.rowIndex);
//         clearForm();
//     }

// }

// function clearForm() {
//     document.getElementById("premise_id").value = "";
//     document.getElementById("customer_id").value = "";
//     document.getElementById("meter_in").value = "";
// }