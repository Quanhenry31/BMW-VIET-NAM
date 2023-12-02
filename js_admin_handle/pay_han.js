const OrderID = document.querySelector("#OrderID");
const Name = document.querySelector("#Name");
const PaymentDate = document.querySelector("#PaymentDate");
const Amount = document.querySelector("#Amount");
const PaymentMethod = document.querySelector("#PaymentMethod");
const PaymentID = document.querySelector("#PaymentID");

const addPay = document.querySelector(".addPay");
const deletePay = document.querySelector(".deletePay");
const timkiem_btn = document.querySelector(".timkiem_btn");
const s_trang = document.querySelector("#s_trang");
const s_quantity = document.querySelector("#s_quantity");
const s_name = document.querySelector("#s_name");
const updatePay = document.querySelector(".updatePay");
// Define the API endpoint
let apiEndpoint = "https://localhost:5000/api-admin/PaymentsControllner/Create";
addPay.addEventListener("click", (e) => {
  e.preventDefault();
   
  if (
    OrderID.value == "" ||
    Name.value == "" ||
    PaymentDate.value == "" ||
    Amount.value == "" ||
    PaymentMethod.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
        orderID: OrderID.value,
        name: Name.value,
        paymentDate : PaymentDate.value,
        amount: Amount.value, // Parse the date as a Date object
        paymentMethod: PaymentMethod.value,
    };

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
    alert('Them thanh cong!')
    setTimeout(function() {
      location.reload();
    }, 0.5);
  }
});


// update product

let apiUpdate = "https://localhost:5000/api-admin/PaymentsControllner/update";
updatePay.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    OrderID.value == "" ||
    Name.value == "" ||
    PaymentDate.value == "" ||
    Amount.value == "" ||
    PaymentMethod.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    const masanpham = document.querySelector("#masanpham");
    // Create a JavaScript object to send in the POST request
    const carDataUpdate = {
        paymentID: PaymentID.value,
        orderID: OrderID.value,
        name: Name.value,
        paymentDate : PaymentDate.value,
        amount: Amount.value, // Parse the date as a Date object
        paymentMethod: PaymentMethod.value,
    };

    // Send a POST request to the API
    fetch(apiUpdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Methods": "allow",
      },
      body: JSON.stringify(carDataUpdate),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
    alert('cap nhap thanh cong!')
    setTimeout(function() {
      location.reload();
    }, 0.5);
  }
});


// delete product
deletePay.addEventListener("click", (e) => {
  // console.log(deleteSP);
  // console.log(masanpham.value);
e.preventDefault();

if (
    PaymentID.value == "" 
) {
  alert("Please enter all required fields.");
} else {
  // Create a JavaScript object to send in the POST request
  const PaymentID = document.querySelector("#PaymentID");

  // Send a POST request to the API
  fetch("https://localhost:5000/api-admin/PaymentsControllner/delete?id=" + PaymentID.value, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
      "Access-Control-Allow-Methods": "allow",
    },
  })
  .then((res) => res.json())
  .then((data) => console.log(data));
  alert("xoa thanh cong!")
  setTimeout(function() {
    location.reload();
  }, 0.5);
}
});



//// seach

let apiSeach = "https://localhost:5000/api-admin/Carcontrollner/search";
timkiem_btn.addEventListener("click", (e) => {
    console.log( s_trang.value);
    console.log( s_quantity.value);
    console.log( s_name.value);
  e.preventDefault();

  if (
    s_trang.value == "" ||
    s_quantity.value == "" ||
    s_name.value == "" 
  ) {
    alert("ALL XE.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
      pageIndex: s_trang.value,
      pageSize: s_quantity.value,
      name: s_name.value,
    };
    // Send a POST request to the API
    fetch(apiSeach, {
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
    .then(callback);
  }
});

