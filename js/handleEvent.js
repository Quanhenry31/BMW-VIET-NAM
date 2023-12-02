import { getCategories_bmw, render_bmw } from "./I_bmw.js";
import { getCategories_x, render_x } from "./X_bmw.js";
import { getCategories_3, render_3 } from "./X3_bmw.js";
import { getCategories_4, render_4 } from "./X4_bmw.js";
import { getCategories_5, render_5 } from "./X5_bmw.js";
import { getCategories_7, render_7 } from "./X7_bmw.js";
import { getCategories_8, render_8 } from "./X8_bmw.js";
import { getCategories_Z4, render_Z4 } from "./Z4_bmw.js";


const BMW = document.querySelector(".BMW");
const BWM_X = document.querySelector(".BMW_X");
const BMW_X3 = document.querySelector(".BMW_X3");
const BMW_X4 = document.querySelector(".BMW_X4");
const BMW_X5 = document.querySelector(".BMW_X5");
const BMW_X7 = document.querySelector(".BMW_X7");
const BMW_X8 = document.querySelector(".BMW_X8");
const BMW_Z4 = document.querySelector(".BMW_Z4");

// hien thi
const menu_nav2 = document.querySelector(".menu_item_nav_2");
const sercive = document.querySelector(".sercive");
const views = document.querySelector(".views");
const seach = document.querySelector(".seach");

// ul_nav
const oder_car = document.querySelector(".oder_M_car");
const oder_D_car = document.querySelector(".oder_D_car");
const oder_K_car = document.querySelector(".oder_K_car");
// the dong
const close_oder_car = document.querySelector(".fa-xmark");
const sercice_i = document.querySelector(".sercice_i");
const view_i = document.querySelector(".view_i");
const seach_icon = document.querySelector(".seach_icon");
const seach_close = document.querySelector(".seach_close");
// active
const menu_item_nav = document.querySelector(".menu_item_nav");
//duyet nav => while
const okeoke = document.querySelectorAll(".oke");

// chuyen trang gio hang
const oder_car_main = document.querySelector(".oder_car_main");
// menu_user
const img_login = document.querySelector(".img_login_click");
// menu_avartar
const login_avatar = document.querySelector(".login_avatar");
const login_donhang = document.querySelector(".login_donhang");
const login_dang_xuat = document.querySelector(".login_dang_xuat");
let isLoginAvatarVisible = false;

//// seach_car_menu
const seach_seach = document.querySelector(".seach_seach"); 

const input_seach = document.querySelector(".input_seach"); 




function handleEvent() {

  seach_seach.addEventListener("click", () => {
    if(input_seach.value == "BMW i7" || input_seach.value == "BMW iX3"|| input_seach.value == "BMW iX4"){
      getCategories_bmw(render_bmw);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "BMW X3" || input_seach.value == "BMW X4"|| input_seach.value == "BMW X5"|| input_seach.value == "BMW X6" || input_seach.value == "BMW X7"){
      getCategories_x(render_x);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "THE NEW 3"){
      getCategories_3(render_3);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "BMW 4 Series"){
      getCategories_4(render_4);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "BMW 5 Series"){
      getCategories_5(render_5);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "THE NEW 7" ){
      getCategories_7(render_7);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "BMW 8 Series"){
      getCategories_8(render_8);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
    if(input_seach.value == "THE NEW Z4"){
      getCategories_Z4(render_Z4);
      seach.style = "display:none";
      menu_item_nav.classList.remove("active");
      menu_nav2.style = "display:block";
      menu_item_nav.classList.add("active");
    }
  })

  img_login.addEventListener("click", () => {
    if (isLoginAvatarVisible) {
      login_avatar.style = "display:none";
    } else {
      login_avatar.style = "display:block";
      menu_nav2.style = "display:none";
    menu_item_nav.classList.remove("active");
    }
  
    isLoginAvatarVisible = !isLoginAvatarVisible;
  });
  
  login_donhang.addEventListener("click", ()=>{
    location.href = '../giohang.html'
  })
  login_dang_xuat.addEventListener("click", ()=>{
    location.href = '../login.html'
    localStorage.removeItem("account");
    
  })
  //----------------------------
  okeoke.forEach((hv, index) => {
    hv.addEventListener("click", () => {
      menu_item_nav.classList.add("active");
    });
  });




  // ấn vào oder_car thì ren ra mau xe
  oder_car.addEventListener("click", () => {
    getCategories_bmw(render_bmw);
    menu_nav2.style = "display:block";
    sercive.style = "display:none";
    views.style = "display:none";
    login_avatar.style = "display:none"
    seach.style = "display:none";
  });
  close_oder_car.addEventListener("click", () => {
    menu_nav2.style = "display:none";
    menu_item_nav.classList.remove("active");
  });

  // ấn vào oder_d thì ren ra dich vu
  oder_D_car.addEventListener("click", () => {
    sercive.style = "display:block";
    views.style = "display:none";
    menu_nav2.style = "display:none";
    seach.style = "display:none";
  });
  sercice_i.addEventListener("click", () => {
    sercive.style = "display:none";
    menu_item_nav.classList.remove("active");
    seach.style = "display:none";
  });
  // ấn vào oder_k thì ren ra kham pha
  oder_K_car.addEventListener("click", () => {
    views.style = "display:block";
    sercive.style = "display:none";
    menu_nav2.style = "display:none";
    seach.style = "display:none";
  });
  view_i.addEventListener("click", () => {
    views.style = "display:none";
    menu_item_nav.classList.remove("active");
  });
  // ấn vào icon ren ra seach
  seach_icon.addEventListener("click", () => {
    menu_item_nav.classList.add("active");
    seach.style = "display:block";
    views.style = "display:none";
    sercive.style = "display:none";
    menu_nav2.style = "display:none";
  });
  seach_close.addEventListener("click", () => {
    seach.style = "display:none";
    menu_item_nav.classList.remove("active");
  });

  BMW.addEventListener("click", () => {
    getCategories_bmw(render_bmw);
  });

  BWM_X.addEventListener("click", () => {
    getCategories_x(render_x);
  });

  BMW_X3.addEventListener("click", () => {
    getCategories_3(render_3);
  });
  BMW_X4.addEventListener("click", () => {
    getCategories_4(render_4);
  });
  BMW_X5.addEventListener("click", () => {
    getCategories_5(render_5);
  });
  BMW_X7.addEventListener("click", () => {
    getCategories_7(render_7);
  });
  BMW_X8.addEventListener("click", () => {
    getCategories_8(render_8);
  });
  BMW_Z4.addEventListener("click", () => {
    getCategories_Z4(render_Z4);
  });

  oder_car_main.addEventListener("click", () => {
    location.assign("giohang.html");
  });
}


export default handleEvent;
