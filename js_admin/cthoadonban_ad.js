function cthoadon_bmw(callback) {
    fetch("https://localhost:5000/api-admin/OderDetailsControllner/get-all_oder")
      .then((response) => response.json())
      .then(callback);
  }
  function render_bmw_cthoadon(cars) {
    const cthoadonban = document.querySelector(".cthoadonban");
    setTimeout(()=> {
    const xoa = document.querySelectorAll(".fa-trash-alt");// xoa
    const soluong = document.querySelector("#soluong");
    const soluong_spdaban = document.querySelector("#soluong_spdaban");
    const tongdoanhthu = document.querySelector("#tongdoanhthu");
    const OrderDetailID1 = document.querySelector("#OrderDetailID1");
    const carID1= document.querySelector("#carID1");
    const OrderID1 = document.querySelector("#OrderID1");
    const Quantity1 = document.querySelector("#Quantity1");
    const Allmoney1 = document.querySelector("#Allmoney1");
    const tr_list = document.querySelectorAll(".tr_list");
    
     const icon_cthoadon = document.querySelectorAll(".fa-file-lines");
     const icon_cthoadon_xe = document.querySelectorAll(".fa-car-side");

      // const td = document.querySelectorAll("td");
      /// duyet product
      tr_list.forEach((hv, index) => {
        soluong.innerHTML = index + 1;
        hv.addEventListener("click", () => {
          // Lấy giá trị của cột "masanpham" trong hàng được click
        const selectedRow = cars[index];
        OrderDetailID1.value = selectedRow.orderDetailID;
        carID1.value = selectedRow.carID;
        OrderID1.value = selectedRow.orderID;
        Quantity1.value = selectedRow.quantity;
        Allmoney1.value = selectedRow.allmoney;
        /// 
        localStorage.setItem("orderID", selectedRow.orderID);
        icon_cthoadon.forEach((hoadon, indexhoadon) => {
          hoadon.addEventListener("click", () =>{
            location.href = "../admin/HoaDonBan.html"
            
          })
        })
        //////
        localStorage.setItem("carID", selectedRow.carID);
        icon_cthoadon_xe.forEach((xe, indexxe) => {
          xe.addEventListener("click", () =>{
            location.href = "../admin/SanPham.html"
           
          })
        })
        ////
        });
      });
//////////////////////////////
      // Lấy tất cả các phần tử <td> có class là "allmonney"
const allMonneyElements = document.querySelectorAll('.allmonney');

// Khởi tạo biến tổng số tiền
let totalMonney = 0;

// Lặp qua mỗi phần tử và cộng giá trị vào tổng
allMonneyElements.forEach((monneyElement) => {
  // Lấy nội dung của mỗi phần tử và loại bỏ ký tự không phải là số
  const monneyValue = parseFloat(monneyElement.textContent.replace(/\D/g, ''));

  // Kiểm tra xem giá trị có phải là một số hợp lệ hay không trước khi cộng vào tổng
  if (!isNaN(monneyValue)) {
    totalMonney += monneyValue;
  }
});
tongdoanhthu.innerHTML =  totalMonney.toLocaleString('vi-VN') + " VND";
localStorage.setItem("tongdoanhthu", totalMonney);

/////////////////////////////////////
// Lấy tất cả các phần tử <td> có class là "quantity_sp"
const quantityElements = document.querySelectorAll('.quantity_sp');

// Khởi tạo biến tổng số tiền
let totalQuantity = 0;

// Lặp qua mỗi phần tử và cộng giá trị vào tổng
quantityElements.forEach((quantityElement) => {
  // Lấy nội dung của mỗi phần tử và chuyển đổi thành số nguyên
  const quantityValue = parseInt(quantityElement.textContent, 10);

  // Kiểm tra xem giá trị có phải là một số hợp lệ hay không trước khi cộng vào tổng
  if (!isNaN(quantityValue)) {
    totalQuantity += quantityValue;
  }
});

// Hiển thị tổng số lượng
soluong_spdaban.innerHTML =  totalQuantity.toLocaleString('vi-VN');
localStorage.setItem("soluong_spdaban", totalQuantity);


    })
    const htmlss = cars.map(
      (car) => `
      <tr class="tr_list">
        <td>${car.orderDetailID}</td>
        <td>${car.carID}</td>
        <td>${car.orderID}</td>
        <td class="quantity_sp">${car.quantity}</td>
        <td class="allmonney">${car.allmoney}</td>
        <td style="text-align: center;">
        <i class="fa-solid fa-car-side icon_product" style="color: #005cfa;" title="Chi tiết car"></i>
        <i class="fa-regular fa-file-lines icon_product" style="color: #005cfa;" title="Chi tiết hóa đơn"></i>
        </td>
    </tr>
      `
      
    );
    // Đối tượng để lưu trữ số lần xuất hiện của mỗi carID
const carIDCounts = {};
cars.map((car) => {
  // Kiểm tra xem carID đã xuất hiện trước đó hay chưa
  if (carIDCounts[car.carID]) {
    // Nếu đã xuất hiện, tăng giá trị lên 1
    carIDCounts[car.carID]++;
  } else {
    // Nếu chưa xuất hiện, khởi tạo giá trị là 1
    carIDCounts[car.carID] = 1;
  }})
  // In ra số lần xuất hiện của mỗi carID
for (const carID in carIDCounts) {
  localStorage.setItem(`carID_${carID}`, `${carIDCounts[carID]}`);
}

    cthoadonban.innerHTML = htmlss.join("");
  }
  export { cthoadon_bmw, render_bmw_cthoadon };
  
  
  