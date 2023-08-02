var spsignUpbtn = document.querySelector('.spSignbtn');

var usersObj;
var firstName;
var lastName;
var email;
var password;
var cpassword;



var userFirstName = document.getElementById('firstName');
userFirstName.addEventListener('input', () => {
    firstName = userFirstName.value;
});

var userLastName = document.getElementById('lastName');
userLastName.addEventListener('input', () => {
    lastName = userLastName.value;
});

var userEmail = document.getElementById('email');
userEmail.addEventListener('input', () => {
    email = userEmail.value;
});


var userPassword = document.getElementById('password');
userPassword.addEventListener('input', () => {
    password = userPassword.value;
});

var usercPassword = document.getElementById('cpassword');
usercPassword.addEventListener('input', () => {
    cpassword = usercPassword.value;
});

if (localStorage.getItem('usersObj')) {
    var data = localStorage.getItem('usersObj');
    usersObj = JSON.parse(data);
}
else {
    usersObj = [];
}

spsignUpbtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("first");
    if (usersObj.length > 0) {
        for (var i = 0; i < usersObj.length; i++) {
            if (usersObj[i].email === email) {
                alert('userEmail already exist');
                return;
            }
        }
    }
    if( password != cpassword){
        alert('password is not matching');
        return;
    }
    var user = {
        id: usersObj.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
    usersObj.push(user);
    // console.log(usersObj);
    localStorage.setItem('usersObj', JSON.stringify(usersObj));
    var myForm = document.getElementById("myForm");
    myForm.reset();
    window.location.href = "/login.html";
})


var myCart = document.querySelector('.myCart');

myCart.addEventListener('click', (e) => {
    if(!sessionStorage.getItem('currentUserObj')){
        alert('Login First');
    }
    else{
        window.location.href = "/cart.html"
    }
})

var myProfile = document.querySelector('.profile');

myProfile.addEventListener('click', (e) => {
    if(!sessionStorage.getItem('currentUserObj')){
        alert('Login First');
    }
    else{
        window.location.href = "/profile.html"
    }
})