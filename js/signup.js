const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const email = document.querySelector(".input-signup-email");
const phone = document.querySelector(".input-signup-phone");
const queQuan = document.querySelector(".input-signup-dress");
const bntSignup = document.querySelector(".signup__signInButton");
// signup

let apiUser = "https://localhost:5000/api-user/UserHandcontrollner/Create_user";
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    username.value == "" ||
    email.value == "" ||
    password.value == "" ||
    phone.value == "" ||
    queQuan.value == ""
  ) {
    alert("Please enter your username and password");
  } else {
    const user = {
      userName: username.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      queQuan: queQuan.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Methods": "allow",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      window.location.href = "../login.html";
  }
});

///localstorage
// var list = JSON.parse(localStorage.getItem('Customer')) || [];
// function DangKy() {
//   var makh;
//   var username2 = username.value;
//   var password2 =password.value;
//   var email2 = email.value;
//   var phone2 = phone.value;
//   var queQuan2 = queQuan.value;
//   if (makh == null || makh == "") {
//       var d = new Date();
//       makh = Number(d);
//   }

//   if (username2 == null || username2 == "") {
//       alert("Tên khách hàng không được để trống! Vui lòng nhập lại!");
//       return false;
//   }
//   else if (phone2 == null || phone2 == "") {
//       alert("Số điện thoại khách hàng không được để trống! Vui lòng nhập lại!");
//       return false;
//   } else if (!phone2.match(number) || phone2.length != 10) {
//       alert("Số điện thoại khách hàng phải là kiểu số và có độ dài là 10 ký tự! Vui lòng nhập lại!");
//       return false;
//   }
//   else if (email2 != "" && email2 != null && (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= email2.length)) {
//       alert("Email khách hàng không hợp lệ! Vui lòng nhập lại!");
//       return false;
//   }
//   else if (password2 == null || password2 == "") {
//       alert("Mật khẩu khách hàng không được để trống! Vui lòng nhập lại!");
//       return false;
//   }
//   else if (queQuan2 == null || queQuan2 == "") {
//       alert("Địa chỉ khách hàng không được để trống! Vui lòng nhập lại!");
//       return false;
//   }

//  list.push({
//   username:username2,
//   password:password2,
//   email:email2,
//   phone:phone2,
//   queQuan:queQuan2,
//  })
//  localStorage.setItem("list",JSON.stringify(list))
//   location.reload();
// }

/////////////////////////////////////////////// cách thầy giáo //////////////////////////////////////////////////

// var app = angular.module('appsigin', []);
// app.controller("HomeCtrl", function ($scope, $http) {
// 	$scope.listItem;	
//     $scope.Sigin= function () {
//         $http({
//             method: 'POST',
//             data: {userName: "a", email: "a", password: "a", phone: "a", queQuan: "a"},
//             url: 'https://localhost:44391/api/UserHandcontrollner/Create_user',
//         }).then(function (response) {  
//             debugger;
//             $scope.listItem = response.data.data;  
//         });
//     };   
// 	$scope.Sigin();
// });