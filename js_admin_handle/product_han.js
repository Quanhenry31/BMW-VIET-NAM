const tensanpham = document.querySelector("#tensanpham");
const chaybang = document.querySelector("#chaybang");
const giaban = document.querySelector("#giaban");
const ngaysanxuat = document.querySelector("#ngaysanxuat");
const LoaiID = document.querySelector("#LoaiID");
const linkimg = document.querySelector("#linkimg");
const slsp = document.querySelector("#slsp");
const addSP = document.querySelector(".addSP");
const deleteSP = document.querySelector(".deleteSP");
const timkiem_btn = document.querySelector(".timkiem_btn");
const s_trang = document.querySelector("#s_trang");
const s_quantity = document.querySelector("#s_quantity");
const s_name = document.querySelector("#s_name");
const updateSP = document.querySelector(".updateSP");
// Define the API endpoint
let apiEndpoint = "https://localhost:5000/api-admin/Carcontrollner/Create";
addSP.addEventListener("click", (e) => {
    console.log( tensanpham.value);
    console.log( chaybang.value);
    console.log( giaban.value);
    console.log( ngaysanxuat.value);
    console.log( LoaiID.value);
    console.log( linkimg.value);
    console.log( slsp.value);
  e.preventDefault();

  if (
    tensanpham.value == "" ||
    chaybang.value == "" ||
    giaban.value == "" ||
    ngaysanxuat.value == "" ||
    LoaiID.value == "" ||
    linkimg.value == "" ||
    slsp.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
      name: tensanpham.value,
      modelCode: chaybang.value,
      price: giaban.value,
      year: new Date(ngaysanxuat.value), // Parse the date as a Date object
      categoryID: parseInt(LoaiID.value),
      imgLink: linkimg.value,
      quantity: slsp.value,
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

let apiUpdate = "https://localhost:5000/api-admin/Carcontrollner/update-account";
updateSP.addEventListener("click", (e) => {
    console.log( tensanpham.value);
    console.log( chaybang.value);
    console.log( giaban.value);
    console.log( ngaysanxuat.value);
    console.log( LoaiID.value);
    console.log( linkimg.value);
    console.log( slsp.value);
  e.preventDefault();

  if (
    tensanpham.value == "" ||
    chaybang.value == "" ||
    giaban.value == "" ||
    ngaysanxuat.value == "" ||
    LoaiID.value == "" ||
    linkimg.value == "" ||
    slsp.value == ""
  ) {
    alert("Please enter all required fields.");
  } else {
    const masanpham = document.querySelector("#masanpham");
    // Create a JavaScript object to send in the POST request
    const carDataUpdate = {
      carID: masanpham.value,
      name: tensanpham.value,
      modelCode: chaybang.value,
      price: giaban.value,
      year: new Date(ngaysanxuat.value), // Parse the date as a Date object
      categoryID: parseInt(LoaiID.value),
      imgLink: linkimg.value,
      quantity: slsp.value,
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
deleteSP.addEventListener("click", (e) => {
  // console.log(deleteSP);
  // console.log(masanpham.value);
e.preventDefault();

if (
  masanpham.value == "" 
) {
  alert("Please enter all required fields.");
} else {
  // Create a JavaScript object to send in the POST request
  const masanpham = document.querySelector("#masanpham");

  // Send a POST request to the API
  fetch("https://localhost:5000/api-admin/Carcontrollner/delete-car?id=" + masanpham.value, {
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

