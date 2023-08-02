// Write your script here
// console.log("first")
showProfile();
var firstName;
var lastName;
var email;
var password;
var oldPassword;
var newPassword;
var newCPassword;
var  usersProfileObj;
var  usersObj;

function showProfile(){
var data = sessionStorage.getItem('currentUserObj');
usersProfileObj = JSON.parse(data);
console.log(usersProfileObj);
document.getElementById('firstName').value = usersProfileObj.firstName;
document.getElementById('lastName').value = usersProfileObj.lastName;
}

firstName = usersProfileObj.firstName;
lastName =usersProfileObj.lastName;
password = usersProfileObj.password


var userFirstName = document.getElementById('firstName');
userFirstName.addEventListener('input', () => {
    firstName = userFirstName.value;
    // console.log(firstName);
});

var userLastName = document.getElementById('lastName');
userLastName.addEventListener('input', () => {
    lastName = userLastName.value;
});

var saveInfobtn  = document.querySelector('.saveInfo');
saveInfobtn.addEventListener('click', (e) => {
    e.preventDefault();
    var editUser = {
        id :usersProfileObj.id,
        firstName:firstName,
        lastName:lastName,
        email: usersProfileObj.email,
        password: usersProfileObj.password
    }
    
    var alldata = localStorage.getItem('usersObj');
    usersObj = JSON.parse(alldata);
    for (var i = 0; i < usersObj.length; i++) {
        if(usersObj[i].id === usersProfileObj.id ){
            usersObj[i] = editUser;
        }
    }
    localStorage.setItem('usersObj',JSON.stringify(usersObj));
    
    editUser.token = usersProfileObj.token

    sessionStorage.setItem('currentUserObj',JSON.stringify(editUser));
    showProfile();
});

var useroldPassword = document.getElementById('oldpassword');
useroldPassword.addEventListener('input', () => {
    oldPassword = useroldPassword.value;
    
});

var userNewPassword = document.getElementById('password');
userNewPassword.addEventListener('input', () => {
    newPassword = userNewPassword.value;
    
});

var userNewCPassword = document.getElementById('cpassword');
userNewCPassword.addEventListener('input', () => {
    newCPassword = userNewCPassword.value;
    
});


var changePassswordbtn  = document.querySelector('.changePassword');
changePassswordbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if( oldPassword != password){
        alert('Incorrect old password');
        return;
    }
    if( newPassword != newCPassword){
        alert('password is not matching');
        return;
    }

    var editUser = {
        id :usersProfileObj.id,
        firstName:firstName,
        lastName:lastName,
        email: usersProfileObj.email,
        password: newPassword
    }
    showProfile();
    
    var alldata = localStorage.getItem('usersObj');
    usersObj = JSON.parse(alldata);
    for (var i = 0; i < usersObj.length; i++) {
        
        if(usersObj[i].id === usersProfileObj.id ){
            usersObj[i] = editUser;
        }
        
    }
    
    localStorage.setItem('usersObj',JSON.stringify(usersObj));
    
    editUser.token = usersProfileObj.token

    sessionStorage.setItem('currentUserObj',JSON.stringify(editUser));
    var myForm = document.getElementById("editpass");
    myForm.reset();
});

var logoutbtn  = document.querySelector('.logout');
logoutbtn.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem('currentUserObj');
    window.location.href = "/login.html";
})


