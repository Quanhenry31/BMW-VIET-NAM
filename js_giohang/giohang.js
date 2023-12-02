const table = document.querySelector('.carItem_main')
const carItems = document.querySelectorAll(".carItem");



// json
function giohang_bmw(callback) {
  fetch("https://localhost:5000/api-user/Carcontrollner/get-all")
  .then((response) => response.json())
  .then(callback);
}
//render_locarstorage
function render_local(){
  const tbody = table.querySelector('tbody')
          
            const giohang = JSON.parse(localStorage.getItem('giohang')) || [];
            const htmls = giohang.map(
              (car) => `
              <tr class="carItem">
                  <td class="id_sp">${car.carID}</td>
                  <td class="name_sp">${car.carName}</td>
                  <td class="giagoc">${car.carPrice}</td>
                  <td class="flex_td">
                      <div class="apart">-</div>
                      <input class="number_shopping" type="number" value="1" min="1" />
                      <div class="apart_all">+</div>
                  </td>
                  <td class="price">75000</td>
                  <td><button class="btn_xoa_giohang">Xóa</button></td>
              </tr>  
              `
            );
      tbody.innerHTML = htmls.join('')
      // xoa gio hang
      handleDeleteCar();
   tinhtoan();
   congtru();
}

function render_bmw_giohang(cars) {
  congtru();
 
    sanpham(cars)
    // them gio hang
    
    handleAddCar()
    tinhtoan()
    thanhtoan();
}
function congtru(){
  const carItems = document.querySelectorAll(".carItem");

// Lặp qua từng phần tử
carItems.forEach((carItem, index) => {
  // Lấy các phần tử con trong phần tử carItem
  const apart = carItem.querySelector(".apart");
  const apart_all = carItem.querySelector(".apart_all");
  const number_shopping = carItem.querySelector(".number_shopping");
 var so = 1;
  // Sự kiện click cho nút -
  apart.addEventListener("click", () => {
    // Lấy giá trị hiện tại của number_shopping
    let currentValue = parseInt(number_shopping.value);
    console.log(number_shopping.value)
    // Trừ 1 từ giá trị hiện tại, nhưng không dưới 1
    currentValue = Math.max(1, currentValue - so);

    // Cập nhật giá trị mới vào number_shopping
    number_shopping.value = currentValue;

    // Gọi hàm tính toán nếu cần
    tinhtoan();
  });

  // Sự kiện click cho nút +
  apart_all.addEventListener("click", () => {
    // Lấy giá trị hiện tại của number_shopping
    let currentValue = parseInt(number_shopping.value);
    console.log(number_shopping.value)

    // Cộng 1 vào giá trị hiện tại
    currentValue = currentValue + so ;

    // Cập nhật giá trị mới vào number_shopping
    number_shopping.value = currentValue ;

    // Gọi hàm tính toán nếu cần
    tinhtoan();
  });
});
}
function tinhtoan(){
  const carItem = document.querySelectorAll(".carItem");
let totalGiaGoc = 0;
  
  carItem.forEach(item=> {
    const giagoc =  parseInt(item.querySelector(".giagoc").innerText.replace(/\./g, ''));
    const price = item.querySelector(".price");
    const number_shopping = item.querySelector(".number_shopping");

    // console.log("🚀 ~ file: giohang.js:185 ~ handleAddCar ~ name_1:", giagoc, price,number_shopping,apart,apart_all)
    let price_cham =  giagoc * number_shopping.value;
    price.innerHTML =  price_cham.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
        // Tích lũy giá gốc
        totalGiaGoc += giagoc * number_shopping.value;
    const total = document.querySelector(".total");
    total.innerHTML ="Total: " + totalGiaGoc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"
    localStorage.setItem("tongtien", total.innerHTML);
  })
}

function handleDeleteCar() {
  const carItem = document.querySelectorAll(".carItem");
  carItem.forEach(item=> {
    const btn_xoa_giohang = item.querySelector('.btn_xoa_giohang')
    const name_sp = item.querySelector(".name_sp");
    const giagoc = item.querySelector(".giagoc");
    // console.log("🚀 ~ file: giohang.js:185 ~ handleAddCar ~ name_1:", name_sp, giagoc)
    btn_xoa_giohang.onclick = ()=>{
      const giohang = JSON.parse(localStorage.getItem('giohang')) || [];
      const newCar2 = {
        carName :name_sp.value,
        carPrice :giagoc.value,
      }
      if(confirm("are you sure?")){

        giohang.splice(item,1);
      }
      localStorage.setItem('giohang',JSON.stringify(giohang));

      render_local();
    }

  })
}


function handleAddCar() {
    const tr_list = document.querySelectorAll(".tr_list_giohang");
    tr_list.forEach(item=> {
      const btnAdd = item.querySelector('.btn_them_giohang')
      const name_1 = item.querySelector(".name_1");
      const price_1 = item.querySelector(".price_1");
      const id_1 = item.querySelector(".id_1");
      // console.log("🚀 ~ file: giohang.js:185 ~ handleAddCar ~ name_1:", name_1, price_1)

      btnAdd.onclick = ()=>{
        const giohang = JSON.parse(localStorage.getItem('giohang')) || [];
        const newCar = {
          carID :id_1.textContent,
          carName :name_1.textContent,
          carPrice :price_1.textContent,
          carSoluong : 1,
          carToltal: 1,
        }
        giohang.push(newCar);
        localStorage.setItem('giohang',JSON.stringify(giohang));
        render_local();
      }

    })
}

// hien thi chon san pham
function sanpham(cars){
  const cart3 = document.querySelector(".cart3");
  const htmls = cars.map(
    (car) => `
    <tr class="tr_list_giohang">
    <td class="id_1">${car.carID}</td>
    <td class="name_1">${car.name}</td>
    <td class="img_1"> <img class="menu_item_car_img" src="${car.imgLink}" alt="" /></td>
    <td class="price_1">${car.price}</td>
    <td><button class="btn_them_giohang">Thêm</button></td>
  </tr>
    `
  );
  cart3.innerHTML = htmls.join("");
}

// Hàm để cập nhật tổng giá trị
function updatelocalstorage() {
  const checkout_btn = document.querySelector(".checkout-button");

  checkout_btn.onclick = () => {
    const carItem = document.querySelectorAll(".carItem");

    const giohang = JSON.parse(localStorage.getItem('giohang')) || [];
    carItem.forEach(item => {
      
      const name_sp = item.querySelector(".name_sp");
      const giagoc = item.querySelector(".giagoc");
      const number_shopping = item.querySelector(".number_shopping");
      const price = item.querySelector(".price");
      const id_sp = item.querySelector(".id_sp");

      const carName = name_sp.textContent;
      const existingCar = giohang.find(car => car.carName === carName);

      if (existingCar) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng và tổng cộng
        existingCar.carSoluong = number_shopping.value;
        existingCar.carToltal = price.innerHTML;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        const newCar = {
          carID:id_sp.textContent,
          carName:name_sp.textContent,
          carPrice: giagoc.textContent,
          carSoluong: number_shopping.value,
          carToltal: price.innerHTML,
        };
        giohang.push(newCar);
      }
    });

    localStorage.setItem('giohang', JSON.stringify(giohang));
  };
}
// cap nhap local gio hang
function thanhtoan(){
  updatelocalstorage();
}
export {giohang_bmw , render_bmw_giohang,render_local};