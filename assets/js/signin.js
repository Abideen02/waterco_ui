
var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "https://waterco--api.herokuapp.com";

// Get cookie
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            console.log('cookie:'+ decodeURIComponent(cookiePair[1]))
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}


// User Login
function userLogin(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/users/signin",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            var data = response.user;
            console.log(data);

            console.log("token:" + response.token);
    
            document.cookie =  'authToken=' + response.token
            window.location.href = ".../index.php";
        },
        headers:{
            Accept:"application/json; charset=utf-8",
            Content_Type:"application/json; charset=utf-8",
            Authorization: getCookie('authToken')
        }
       
        
    });
}

function onLoginDetailsSubmit() {
    var formData = {};
    formData["email_address"] = document.getElementById("email_address").value;
    formData["password"] = document.getElementById("password").value;
    
    userLogin(formData);
}

// User sign-Up (Create User)
function addUserRecordToTable(data) {
    var allus = document.getElementById("allus").getElementsByTagName("tbody")[0];
    var newRecord =allus.insertRow(allus.length);

    var cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.UserID;
    var cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.UserName;
    var cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.Email;
    var cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.createdAt;
    var cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.updatedAt;
    var cell6 = newRecord.insertCell(5);
    cell6.innerHTML = '<a onclick="onUserEdit(this)">Edit</a> <a onClick="onUserDelete(this)">Delete</a>';   
}

function addUser(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/users/",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            var data = response.data;
            console.log(data);
            addUserRecordToTable(data);
            // window.location.href = "./loginbiller.html";
            
        },
        headers:{
            Accept:"application/json; charset=utf-8",
            Content_Type:"application/json; charset=utf-8",
            Authorization: getCookie('authToken')
        }
       
        
    });
}

function onUserDetailsSubmit() {
  console.log("Function called : add user");
  document.getElementById("loginbox").style.display = "none";
    var formData = {};
    formData["email_address"] = document.getElementById("email_address").value;
    formData["full_name"] = document.getElementById("full_name").value;
    formData["password"] = document.getElementById("password").value;
    
    if (selectedRecord == null) {
        addUser(formData);
    } else {
        updateUserRecord(formData);
    }
    // alert("User Edited Successfully");
    clearUserForm();

}

function onUserDetailsSubmitTwo() {
    console.log("userdetails");
    var formData = {};
    formData["email_address"] = document.getElementById("email_address").value;
    formData["full_name"] = document.getElementById("full_name").value;
    formData["password"] = document.getElementById("password").value;
    addUser(formData);
    // window.location.href = "./index.html";
    clearUserForm();

}

// Get all users
$(document).ready(function () {
    document.getElementById("loginbox").style.display = "none";
    $.ajax({
        type: "GET",
        url: baseUrl + "/users/",
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((user) => {
                addUserRecordToTable(user);
            });
        },
        headers:{
            Authorization: `token ${getCookie('authToken')}`
        }
    });
});

// View one User
function onUserIdSubmit() {
    var pid = document.getElementById("Userid").value;
    viewOneUser(pid);

}

function viewOneUser(id) {
    $.ajax({
        type: "GET",
        url: baseUrl + "/users/" + id,
        cache: false,
        success: function (response) {
            console.log(response.message);
            console.log(id);
            $("#allus tbody tr").remove();
            var data = response.data;
            data.forEach((user) => {
                addUserRecordToTable(user);
            });
        },
        headers: {
            Authorization: `token ${getCookie('authToken')}`
        }
    });

}

// Updating a user
function onUserEdit(td) {
    document.getElementById("loginbox").style.display = "block";
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("UserName").value = selectedRecord.cells[2].innerHTML;
   
}

function updateUserTableRecord(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[1].innerHTML = data.Email;
    selectedRecord.cells[2].innerHTML = data.UserName;
    }


function updateUserRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/users/" + selectedRecordID,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            updateUserTableRecord(data);
        },
        headers:{
            Accept:"application/json; charset=utf-8",
            Content_Type:"application/json; charset=utf-8",
            'Access-Control-Allow-Credentials': true,
            Authorization: `token ${getCookie('authToken')}`
        }
    });

}

function onUserDelete(td) {
    if (confirm('Are you sure you want to delete this record')) {
        var row = td.parentElement.parentElement;
        deleteUserData(row);
        
        
    }

}

function deleteUserData(row){
    $.ajax({
        type: "DELETE",
        url: baseUrl + "/users/" + row.cells[0].innerHTML,
        cache: false,
        success: function (response) {
            console.log(response.message);
            console.log(selectedRecordID);
        },
        headers:{
            Authorization: `token ${getCookie('authToken')}`
        }
    });

}

function clearUserForm() {
    document.getElementById("email_address").value = "";
    document.getElementById("full_name").value = "";
    document.getElementById("password").value = "";
    
}