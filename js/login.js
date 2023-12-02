// const container = document.getElementById("container");
// const registerBtn = document.getElementById("register");
// const loginBtn = document.getElementById("login");

// registerBtn.addEventListener("click", () => {
//   container.classList.add("active");
// });

// loginBtn.addEventListener("click", () => {
//   container.classList.remove("active");
// });

// login
// let apiUser = "https://localhost:44391/api/UserHandcontrollner/get-all";
// let apiUserToken = "https://localhost:44391/api/Usercontrollner/login";

// //login
// const username = document.querySelector(".input-login-username");
// const password = document.querySelector(".input-login-password");
// const bntLogin = document.querySelector(".login__signInButton");
// const form_section = document.querySelector(".form-section");

// // get user
// const getUser = async () => {
//   const response = await fetch(apiUser);
//   const data = await response.json();
//   return data;
// };

// // login
// bntLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (username.value == "" || password.value == "") {
//     alert("Please enter your username and password");
//   } else {
//     getUser().then((data) => {

//       const user = data.find(
//         (user) =>
//           user.userName == username.value && user.password == password.value
//       );
//       if (user) {
//         const userID = user.userID; 
//         localStorage.setItem("userID", userID);
//         console.log(userID)
//         alert("Login success");
//         window.location.href = "index.html";
       
//       } else {
//         alert("Login failed");
//       }
//     });
//   }
// });
// const sigin_btn = document.querySelector(".signInButton");
// if(sigin_btn.onclick){
//   sigin__signInButton();
// }
// function sigin__signInButton(){
//   window.location.href = "../signup.html";
// }


import fetchAPI from "./fetchAPI.js";
import storage from "./storageAPI.js";

var API_url = "https://localhost:5000"
fetchAPI.use(API_url);
const login = async (data) => {
  // /api-user/Account/login
  const response = await fetchAPI.get("/api-user/Usercontrollner/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
const logout = () => {
  storage.remove("account");
};
export { login, logout};

////
const sigin_btn = document.querySelector(".signInButton");
sigin_btn.addEventListener("click",()=>{
  location.href = "../signup.html"
})

function handleform() {
  const form = document.forms["login"];
  const btnlogin = document.querySelector(".login__signInButton");
  const sigin_btn = document.querySelector(".signInButton");

  btnlogin.addEventListener('click',(e)=>{
      e.preventDefault();
  })

  sigin_btn.addEventListener('click',(e)=>{
    e.preventDefault();
})

  btnlogin.onclick = async function () {
    console.log(123);
    var username = form.elements.username.value;
    var password = form.elements.password.value;
    if (username === "" || password === "") {
      alert("Bạn chưa nhập đủ thông tin tài khoản!");
      return;
    }
    var formData = {
      username,
      password,
    };

    const userID = await login(formData);
    if (!userID) {
      alert("bạn nhập sai tài khoản hoặc mật khẩu");
      form.elements.username.value = "";
      form.elements.username.focus();
      form.elements.password.value = "";
      return;
    }

    storage.set("account", userID);
    userID.userID === 6
      ? location.assign("/admin/TongQuan.html")
      : location.assign("/");
    console.log(userID.typeID);
  };

}


handleform();