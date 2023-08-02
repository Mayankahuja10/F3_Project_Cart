// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };

var arr = [];
var arrCart;
// localStorage
if (localStorage.getItem("myArr")) {
  // user is coming again in the session
  //   alert("Getting from Session Storage");
  var myArr = JSON.parse(localStorage.getItem("myArr"));
  showData(myArr);
  arr = myArr;
} else {
  // user is coming to the session for the very first time
  getDataFromAPI();
}
async function getDataFromAPI() {
  // console.log("Fetching Data...");

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    arr = await response.json();
    localStorage.setItem("myArr", JSON.stringify(arr));
    // alert("Added to Session Storage");
    if (arr) {
      console.log("data", arr);
      showData(arr);
    }
  } catch (e) {
    console.log("Error--", e);
  }
}



document.getElementById("all").addEventListener("click", () => {
  document.getElementById("heading").innerText = "All Products";
  document.getElementById("mens").className = "filter";
  document.getElementById("all").className = "filter active";
  document.getElementById("women").className = "filter";
  document.getElementById("jewellery").className = "filter";
  document.getElementById("electronics").className = "filter";
  showData(arr);
});


document.getElementById("mens").addEventListener("click", () => {
  var newArr = arr.filter((item) => {
    return item.category === "men's clothing";
  });
  document.getElementById("heading").innerText = "Men's Clothing";
  document.getElementById("mens").className = "filter active";
  document.getElementById("all").className = "filter";
  document.getElementById("women").className = "filter";
  document.getElementById("jewellery").className = "filter";
  document.getElementById("electronics").className = "filter";

  showData(newArr);
});

document.getElementById("women").addEventListener("click", () => {
  var newArr = arr.filter((item) => {
    return item.category === "women's clothing";
  });
  document.getElementById("heading").innerText = "Women's Clothing";
  document.getElementById("mens").className = "filter";
  document.getElementById("all").className = "filter";
  document.getElementById("women").className = "filter active";
  document.getElementById("jewellery").className = "filter";
  document.getElementById("electronics").className = "filter";
  showData(newArr);
});

document.getElementById("jewellery").addEventListener("click", () => {
  var newArr = arr.filter((item) => {
    return item.category === "jewelery";
  });
  document.getElementById("heading").innerText = "Jewellery";
  document.getElementById("mens").className = "filter";
  document.getElementById("all").className = "filter";
  document.getElementById("women").className = "filter";
  document.getElementById("jewellery").className = "filter  active";
  document.getElementById("electronics").className = "filter";
  showData(newArr);
});

document.getElementById("electronics").addEventListener("click", () => {
  var newArr = arr.filter((item) => {
    return item.category === "electronics";
  });
  document.getElementById("heading").innerText = "Electronics";
  document.getElementById("mens").className = "filter";
  document.getElementById("all").className = "filter";
  document.getElementById("women").className = "filter";
  document.getElementById("jewellery").className = "filter";
  document.getElementById("electronics").className = "filter active";
  showData(newArr);
});

document.getElementById("search").addEventListener("input", () => {
  var newArr = arr.filter((item) =>
    item.title
      .toLowerCase()
      .includes(document.getElementById("search").value.trim().toLowerCase())
  );
  showData(newArr);
});

function showData(myArr) {
  document.querySelector(".items").innerHTML = "";
  let innerhtml = "";
  myArr.forEach((item) => {
    innerhtml += `
    <div class="item">
      <div class='image'>
              <img src='${item.image}' alt="Item" />
              </div>
              <div class="info">
              <h3> ${item.title}</h3>
                <div class="row">
                  <div class="price">$${item.price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating:${item.rating.rate}</div>
              </div>
              <button class="addtoCartBtn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
    `;
  });
  document.querySelector(".items").innerHTML = innerhtml;
}

if (localStorage.getItem("arrCart")) {
  var data = localStorage.getItem("arrCart");
  arrCart = JSON.parse(data);
} else {
  arrCart = [];
}

function addToCart(id) {
  // console.log(id);
  arr.forEach((item) => {
    if (item.id === id) {
      arrCart.push(item);
    }
  });
  localStorage.setItem('arrCart', JSON.stringify(arrCart));
}

// var addToCartbtn = document.querySelector('.addtoCartBtn');
// addToCartbtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   // console.log(e.target.closest('.item'))
//   console.log("first");

//   // arrCart.push(e.item);
//   // console.log(usersObj);
//   // localStorage.setItem('arrCart', JSON.stringify(arrCart));
// })


//Range rating and price

document.querySelector(".applybtn").addEventListener("click", () => {
  var rangeValue = document.getElementById("range").value;
  var zerototwo5 = document.getElementById("0-25").checked;
  var two5to50 = document.getElementById("25-50").checked;
  var five0to100 = document.getElementById("50-100").checked;
  var more100 = document.getElementById("100on").checked;
  // console.log(zerototwo5);
  // console.log(rangeValue)

 
  var newArr = arr.filter((item) => {
    return item.rating.rate >= rangeValue;
  });
  
  if(zerototwo5 || two5to50 || five0to100 || more100 ){
    newArr = newArr.filter((item) => {
      if(zerototwo5){
        return item.price <= 25
      }
      else if(two5to50){
        return (item.price > 25 &&  item.price <= 50);
      }
      else if(five0to100){
        return (item.price > 50 &&  item.price <= 100);
      }
      else if(more100){
        return (item.price > 100);
      }
    })
  }
  showData(newArr);
});