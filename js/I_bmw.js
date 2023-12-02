function getCategories_bmw(callback) {
  fetch("https://localhost:5000/api-user/Carcontrollner/get-all")
    .then((response) => response.json())
    .then((cars) => {
      const filteredCars = cars.filter((car) => car.categoryID === 1);
      callback(filteredCars);
    });
}

function render_bmw(cars) {
  const menu_item_car = document.querySelector(".menu_item_car");
  setTimeout(()=> {
    const menu_item_car_flex = document.querySelectorAll(".menu_item_car_flex");
    /// duyet product
    menu_item_car_flex.forEach((hv, index) => {
      hv.addEventListener("click", () => {
        console.log(index);
        if(index === 2){
          window.location.href = "../Product_I4.html";
        }
      });
    });
  })
  const htmls = cars.map(
    (car) => `
    <div class="menu_item_car_flex">
    <div class="menu_item_car_bmw">
      <img class="menu_item_car_img" src="${car.imgLink}" alt="" />
      <div class="conten_car">
        <a href="#">
          <span>${car.name}</span>
        </a>
        <div class="electro_car car_mr">
          <span>${car.modelCode}</span>
        </div>
        <span class="span_black">Giá từ ${car.price} VND</span>
        <div class="button_car car_mr">
          <ul>
            <i class="fa-solid fa-angle-right"></i>
            <li>
              <a class="display_i" href="#">Hiển thị thêm</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    `
  );
  menu_item_car.innerHTML = htmls.join("");
}

export { getCategories_bmw, render_bmw };





// var API = "http://localhost:3000";

// function getCategories_bmw(callback) {
//   fetch(API + "/bmw_car")
//     .then((response) => response.json())
//     .then(callback);
// }

// var API = "https://localhost:44391/api";
// function getCategories_bmw(callback) {
//   fetch("https://localhost:44391/api/Carcontrollner/get-all")
//     .then((response) => response.json())
//     .then(callback);
// }

// function render_bmw(cars) {
//   const menu_item_car = document.querySelector(".menu_item_car");
//   const htmls = cars.map(
//     (car) => `
//     <div class="menu_item_car_flex">
//     <div class="menu_item_car_bmw">
//       <img  class="menu_item_car_img" src="${car.imgLink}" alt="" />
//       <div class="conten_car">
//         <a href="#">
//           <span>${car.name}</span>
//         </a>
//         <div class="electro_car car_mr">
//           <span>${car.modelCode}</span>
//         </div>
//         <span class="span_black">${car.price}</span>
//         <div class="button_car car_mr">
//           <ul>
//             <i class="fa-solid fa-angle-right"></i>
//             <li>
//               <a class="display_i" href="#">Hiển thị thêm</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       </div>
//     </div>
//     `
//   );
//   menu_item_car.innerHTML = htmls.join("");
// }

// export { getCategories_bmw, render_bmw };