// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

var loginbutton = document.querySelector('.loginbtn');
var signupbutton = document.querySelector('.sighupbtn');


loginbutton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("first")
    window.location.href = "./login/index.html";
});

signupbutton.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("first")
    window.location.href = "./signup/index.html";
});

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