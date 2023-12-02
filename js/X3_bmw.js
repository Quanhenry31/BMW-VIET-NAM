function getCategories_3(callback) {
  fetch("https://localhost:5000/api-user/Carcontrollner/get-all")
    .then((response) => response.json())
    .then((cars) => {
      const filteredCars = cars.filter((car) => car.categoryID === 3);
      callback(filteredCars);
    });
}

function render_3(cars) {
  const menu_item_car = document.querySelector(".menu_item_car");
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

export { getCategories_3, render_3 };
