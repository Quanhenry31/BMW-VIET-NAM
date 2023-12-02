const carID1 = document.querySelector("#carID1");
const OrderID1 = document.querySelector("#OrderID1");
const Quantity1 = document.querySelector("#Quantity1");
const Allmoney1 = document.querySelector("#Allmoney1");

const OrderDetailID1 = document.querySelector("#OrderDetailID1");

const addctHoadon = document.querySelector(".addctHoadon");
const deletectHoadon = document.querySelector(".deletectHoadon");
const timkiem_btn = document.querySelector(".timkiem_btn");
const s_trang = document.querySelector("#s_trang");
const s_quantity = document.querySelector("#s_quantity");
const s_name = document.querySelector("#s_name");
const updatectHoadon = document.querySelector(".updatectHoadon");
// Define the API endpoint
let apiEndpoint = "https://localhost:5000/api-admin/OderDetailsControllner/Create";
addctHoadon.addEventListener("click", (e) => {
  e.preventDefault();
    console.log(addctHoadon)
  if (
    carID1.value == "" ||
    OrderID1.value == "" ||
    Quantity1.value == "" ||
    Allmoney1.value == "" 
   
  ) {
    alert("Please enter all required fields.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
        carID: carID1.value,
        orderID: OrderID1.value,
        quantity: Quantity1.value, // Parse the date as a Date object
        allmoney: Allmoney1.value,  
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

let apiUpdate = "https://localhost:5000/api-admin/OderDetailsControllner/update_oder";
updatectHoadon.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    carID1.value == "" ||
    OrderID1.value == "" ||
    Quantity1.value == "" ||
    Allmoney1.value == "" 
  ) {
    alert("Please enter all required fields.");
  } else {
    const masanpham = document.querySelector("#masanpham");
    // Create a JavaScript object to send in the POST request
    const carDataUpdate = {
        OrderDetailID: OrderDetailID1.value,
        carID: carID1.value,
        orderID: OrderID1.value,
        quantity: Quantity1.value, // Parse the date as a Date object
        allmoney: Allmoney1.value,  
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
deletectHoadon.addEventListener("click", (e) => {
  // console.log(deleteSP);
  // console.log(masanpham.value);
e.preventDefault();

if (
    OrderDetailID1.value == "" 
) {
  alert("Please enter all required fields.");
} else {
  // Create a JavaScript object to send in the POST request
  const OrderDetailID1 = document.querySelector("#OrderDetailID1");

  // Send a POST request to the API
  fetch("https://localhost:5000/api-admin/OderDetailsControllner/delete-oder?id=" + OrderDetailID1.value, {
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

// let apiSeach = "https://localhost:44391/api/Carcontrollner/search";
// timkiem_btn.addEventListener("click", (e) => {
//     console.log( s_trang.value);
//     console.log( s_quantity.value);
//     console.log( s_name.value);
//   e.preventDefault();

//   if (
//     s_trang.value == "" ||
//     s_quantity.value == "" ||
//     s_name.value == "" 
//   ) {
//     alert("ALL XE.");
//   } else {
//     // Create a JavaScript object to send in the POST request
//     const carData = {
//       pageIndex: s_trang.value,
//       pageSize: s_quantity.value,
//       name: s_name.value,
//     };
//     // Send a POST request to the API
//     fetch(apiSeach, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Credentials": "true",
//         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
//         "Access-Control-Allow-Methods": "allow",
//       },
//       body: JSON.stringify(carData),
//     })
//     .then((res) => res.json())
//     .then(callback);
//   }
// });

