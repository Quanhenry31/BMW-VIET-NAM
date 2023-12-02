const makh = document.querySelector("#makh");
    const tenkh = document.querySelector("#tenkh");
    const emailkh = document.querySelector("#emailkh");
    const mkkh = document.querySelector("#mkkh");
    const sdtkh = document.querySelector("#sdtkh");
    const diachikh = document.querySelector("#diachikh");

const timkiem_user = document.querySelector(".timkiem_user");
const addKH = document.querySelector(".addKH");
const updateKH = document.querySelector(".updateKH");
const deleteKH = document.querySelector(".deleteKH");
// Define the API endpoint
let apiEndpoint = "https://localhost:5000/api-admin/UserHandcontrollner/Create_user";
addKH.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    tenkh.value == "" ||
    emailkh.value == "" ||
    mkkh.value == "" ||
    sdtkh.value == "" ||
    diachikh.value == "" 
  ) {
    alert("Please enter all required fields.");
  } else {
    // Create a JavaScript object to send in the POST request
    const carData = {
        userName: tenkh.value,
        email: emailkh.value,
        password: mkkh.value,
        phone: sdtkh.value,
        queQuan: diachikh.value,
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

let apiUpdate = "https://localhost:5000/api-admin/UserHandcontrollner/update-account";
updateKH.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    makh.value == "" ||
    tenkh.value == "" ||
    emailkh.value == "" ||
    mkkh.value == "" ||
    sdtkh.value == "" ||
    diachikh.value == "" 
  ) {
    alert("Please enter all required fields.");
  } else {
    const makh = document.querySelector("#makh");
    // Create a JavaScript object to send in the POST request
    const carDataUpdate = {
        userID: makh.value,
        userName: tenkh.value,
        email: emailkh.value,
        password: mkkh.value,
        phone: sdtkh.value,
        queQuan: diachikh.value,
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
deleteKH.addEventListener("click", (e) => {
  // console.log(deleteSP);
  // console.log(masanpham.value);
e.preventDefault();

if (
    makh.value == "" 
) {
  alert("Please enter all required fields.");
} else {
  // Create a JavaScript object to send in the POST request
  const makh = document.querySelector("#makh");

  // Send a POST request to the API
  fetch("https://localhost:5000/api-admin/UserHandcontrollner/delete-car?id=" + makh.value, {
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

