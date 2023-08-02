var arrCart;
if (localStorage.getItem("arrCart")) {
    // user is coming again in the session
    //   alert("Getting from Session Storage");
    var myCartArr = JSON.parse(localStorage.getItem("arrCart"));
    arrCart = myCartArr;
    showData(arrCart);
    showPrice(arrCart);
    
  } else {
    // user is coming to the session for the very first time
    document.querySelector('.cartItems').innerHTML = `<h4>No Items in Cart</h4>`
  }

  function showData(arrCart) {
    document.querySelector(".cartItems").innerHTML = "";
    let innerhtml = "";
    arrCart.forEach((item) => {
      innerhtml += `
      <div class="citem">
        <div class='cimage'>
                <img src='${item.image}' alt="Item" />
                </div>
                <div class="cinfo">
                <h4> ${item.title}</h4>
                  <div class="crow">
                    <div class="cprice">Price: $${item.price}</div>
                  </div>
                </div>
                <button class="removetoCartBtn" onclick="removefromCart(${item.id})">Remove from Cart</button>
              </div>
      `;
    });
    document.querySelector(".cartItems").innerHTML = innerhtml;
  }

  function removefromCart(id){
    // console.log(id)
    arrCart = arrCart.filter((item) => item.id !== id);
    showData(arrCart);
    showPrice(arrCart);
    localStorage.setItem('arrCart', JSON.stringify(arrCart));
  }

  function showPrice(arrCart){
    document.querySelector(".checkoutItems").innerHTML = "";
    let innerhtml = "";
    arrCart.forEach((item,index) => {
      innerhtml += `
      <div class="pitem">
                <div class="pinfo">
                <p>${index+1}</p>
                <p class='strong'> ${(item.title)}</p>
                <div class="cprice">$${item.price}</div>
                </div>
              </div>
      `;
    });
    document.querySelector(".checkoutItems").innerHTML = innerhtml;
    document.querySelector(".totalprice").innerHTML = "";
    let price = 0;
    arrCart.forEach((item) => {
        price += item.price;
      });
      document.querySelector(".totalprice").innerHTML = `$${price}/-`
  }

  document.getElementById("rzp-button1").onclick =  function (e) {
    var options = {
      key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
      amount: 300 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#000",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    localStorage.removeItem('arrCart');
    arrCart =[]
    showData(arrCart);
    showPrice(arrCart);
    e.preventDefault();
  };