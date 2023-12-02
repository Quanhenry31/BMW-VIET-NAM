const UserID = document.querySelector("#UserID");
const ngaytao = document.querySelector("#ngaytao");
const diachi = document.querySelector("#diachi");
const dukientoi = document.querySelector("#dukientoi");
const Time = document.querySelector("#Time");
const priceall = document.querySelector("#priceall");
const Status = document.querySelector("#Status");
const OrderID = document.querySelector("#OrderID");

const addHoadon = document.querySelector(".addHoadon");
const deleteHoadon = document.querySelector(".deleteHoadon");
const timkiem_btn_hd = document.querySelector(".timkiem_btn_hd");
const s_trang = document.querySelector("#s_trang");
const s_quantity = document.querySelector("#s_quantity");
const s_name_hd = document.querySelector("#s_name_hd");
const updateHoadon = document.querySelector(".updateHoadon");
// Define the API endpoint
let apiEndpoint = "https://localhost:5000/api-admin/Oders/Create";
addHoadon.addEventListener("click", (e) => {
  e.preventDefault();
    console.log(addHoadon)
  if (
    UserID.value == "" ||
    ngaytao.value == "" ||
    diachi.value == "" ||
    dukientoi.value == "" ||
    Time.value == "" ||
    priceall.value == "" ||
    Status.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
        userID: UserID.value,
        orderDate: ngaytao.value,
        address : diachi.value,
        dateOk: dukientoi.value, // Parse the date as a Date object
        time: Time.value,
        allPrice: priceall.value,
        tatus: Status.value,
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

let apiUpdate = "https://localhost:5000/api-admin/Oders/update_oder";
updateHoadon.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    UserID.value == "" ||
    ngaytao.value == "" ||
    diachi.value == "" ||
    dukientoi.value == "" ||
    Time.value == "" ||
    priceall.value == "" ||
    Status.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    const masanpham = document.querySelector("#masanpham");
    // Create a JavaScript object to send in the POST request
    const carDataUpdate = {
      orderID: OrderID.value,
      userID: UserID.value,
      orderDate: ngaytao.value,
      address : diachi.value,
      dateOk: dukientoi.value, // Parse the date as a Date object
      time: Time.value,
      allPrice: priceall.value,
      tatus: Status.value,
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
deleteHoadon.addEventListener("click", (e) => {
  // console.log(deleteSP);
  // console.log(masanpham.value);
e.preventDefault();

if (
  OrderID.value == "" 
) {
  alert("Please enter all required fields.");
} else {
  // Create a JavaScript object to send in the POST request
  const OrderID = document.querySelector("#OrderID");

  // Send a POST request to the API
  fetch("https://localhost:5000/api-admin/Oders/delete-oder?id=" + OrderID.value, {
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

// timkiem_btn_hd.addEventListener("click", (e) => {
//   // console.log(deleteSP);
//   // console.log(masanpham.value);
// e.preventDefault();

// if (
//   s_name_hd.value == "" 
// ) {
//   alert("Please enter all required fields.");
// } else {
//   // Create a JavaScript object to send in the POST request
//   const s_name_hd = document.querySelector("#s_name_hd");

//   // Send a POST request to the API
//   fetch("https://localhost:44391/api/Oders/get-by-id/" + s_name_hd.value, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": "true",
//       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
//       "Access-Control-Allow-Methods": "allow",
//     },
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
//   alert("Tim kiem thanh cong!")
 
// }
// });



