const fullname = document.querySelector("#full-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const paymentmethod = document.querySelector("#payment-method");
const submitbutton = document.querySelector(".submit-button");
var giaTri = localStorage.getItem('tongtien');
var userid = localStorage.getItem('userID');
var tongtien = localStorage.getItem('tongtien');

var account = localStorage.getItem("account");
var account_object = JSON.parse(account);


// Define the API endpoint
let apiEndpoint = "https://localhost:5000/api-user/Oders/Create";
let apiOderdretail = "https://localhost:5000/api-user/OderDetailsControllner/Create";
let apiPay = "https://localhost:5000/api-user/PaymentsControllner/Create";
submitbutton.addEventListener("click", (e) => {
    e.preventDefault();
    
  if (
    fullname.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    address.value == "" ||
    paymentmethod.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
        userID: account_object["userID"],
        orderDate: new Date(),
        address : address.value,
        dateOk: new Date(), // Parse the date as a Date object
        time: new Date(),
        allPrice: giaTri,
        tatus: "Đang duyệt",
    };
    // them bang oder user
    // Send a POST request to the API
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Methods": "allow",
      },
      body: JSON.stringify(carData),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
    
    
    timidoder();
thempay();
them_oderdetail();
  }
});

function timidoder(){
  setTimeout(function(){
    fetch("https://localhost:5000/api-admin/Oders/get-by-user-id?UserID=" + account_object["userID"], {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Credentials": "true",
       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
       "Access-Control-Allow-Methods": "allow",
     },
   })
   .then((res) => res.json())
   .then((data) => {
     // Lưu ID vào localStorage
   localStorage.setItem('orderID', data.orderID);
   console.log(data.orderID);     
  });

  },1000);
   // tim useroder
}

function thempay(){
  setTimeout(function() {
    var orderIDlocal = localStorage.getItem('orderID');
    const carDataPay = {
      orderID: orderIDlocal,
      name: fullname.value,
      paymentDate : new Date(),
      amount: 1, // Parse the date as a Date object
      paymentMethod: paymentmethod.value,
    };
    // Send a POST request to the API
    fetch(apiPay, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Methods": "allow",
    },
    body: JSON.stringify(carDataPay),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, 2000);
}


function them_oderdetail(){
  setTimeout(function() {
   //// them vao oderdetail
   var orderIDlocal = localStorage.getItem('orderID');
const carDetails = JSON.parse(localStorage.getItem('giohang'));
console.log(carDetails)
carDetails.forEach((carDetail) => {
const carOrderDetail  = {
  carID: parseInt(carDetail.carID),
  orderID: orderIDlocal,
  quantity :  parseInt(carDetail.carSoluong),
  allmoney:  carDetail.carToltal, 
};
fetch(apiOderdretail, {
method: "POST",
headers: {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  "Access-Control-Allow-Methods": "allow",
},
body: JSON.stringify(carOrderDetail),
})
.then((res) => res.json())
.then((data) => console.log(data));
alert('thanh toan thanh cong!')
localStorage.removeItem("giohang");
    setTimeout(function() {
      location.reload();
      window.location = "../giohang.html"
    }, 0.5);
});
  }, 2000);
}