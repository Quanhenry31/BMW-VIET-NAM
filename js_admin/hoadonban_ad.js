
function hoadon_bmw(callback) {
    fetch("https://localhost:5000/api-admin/Oders/get-all_oder")
      .then((response) => response.json())
      .then(callback);
  }
  function render_bmw_hoadon(cars) {
    const hoadonban = document.querySelector(".hoadonban");
    setTimeout(()=> {
    const xoa = document.querySelectorAll(".fa-trash-alt");// xoa
    const soluong = document.querySelector("#soluong");
    const OrderID = document.querySelector("#OrderID");
    const UserID = document.querySelector("#UserID");
    const ngaytao = document.querySelector("#ngaytao");
    const diachi = document.querySelector("#diachi");
    const dukientoi = document.querySelector("#dukientoi");
    const Time = document.querySelector("#Time");
    const priceall = document.querySelector("#priceall");
    const Status = document.querySelector("#Status");
    const s_name_hd = document.querySelector("#s_name_hd");
    var idoder = localStorage.getItem("orderID")

    const tr_list = document.querySelectorAll(".tr_list");
    const timkiem_btn_hd = document.querySelectorAll(".timkiem_btn_hd");
    const fa_user_icon = document.querySelectorAll(".fa-circle-user");

      // const td = document.querySelectorAll("td");
      /// duyet product
      tr_list.forEach((hv, index) => {
        soluong.innerHTML = index + 1;
        hv.addEventListener("click", () => {
          // Lấy giá trị của cột "masanpham" trong hàng được click
        const selectedRow = cars[index];
        OrderID.value = selectedRow.orderID;
        UserID.value = selectedRow.userID;
        ngaytao.value = selectedRow.orderDate;
        diachi.value = selectedRow.address;
        dukientoi.value = selectedRow.dateOk;
        Time.value = selectedRow.time;
        priceall.value = selectedRow.allPrice;
        Status.value = selectedRow.tatus;
 //////
 localStorage.setItem("khID", selectedRow.userID);
 fa_user_icon.forEach((kh, indexkh) => {
  kh.addEventListener("click", () =>{
     location.href = "../admin/KhachHang.html"
     console.log(selectedRow.userID)
   })
 })
 ////
        });
      });
      s_name_hd.value = idoder;

      // Lấy tất cả các phần tử <td> có class là "tatus"
const tatusElements = document.querySelectorAll('td.tatus');

// Khởi tạo biến đếm
let daDuyetCount = 0;
let dangDuyetCount = 0;

// Lặp qua mỗi phần tử và kiểm tra giá trị
tatusElements.forEach((element) => {
  const tatusValue = element.textContent.trim();

  // Kiểm tra giá trị và tăng đếm cho từng trạng thái
  if (tatusValue === 'Đã duyệt') {
    daDuyetCount++;
  } else if (tatusValue === 'Đang duyệt') {
    dangDuyetCount++;
  }
 localStorage.setItem("da_duyet", daDuyetCount);
 var local_dang_duyet = localStorage.getItem("dang_duyet")
 const dang_duyet = document.querySelector("#dang_duyet");
 dang_duyet.innerHTML = local_dang_duyet;

 localStorage.setItem("dang_duyet",dangDuyetCount);
 var local_da_duyet = localStorage.getItem("da_duyet")
 const da_suyet = document.querySelector("#da_duyet");
 da_suyet.innerHTML = local_da_duyet;

});

/// lay du lieu thang ban hang thong ke
// Lấy tất cả các phần tử có class "tr_list"
const orderRows = document.querySelectorAll('.tr_list');

// Tạo một đối tượng để lưu trữ số lượng orderDate cho mỗi tháng
const orderCountByMonth = {};

// Duyệt qua mỗi phần tử "tr_list"
orderRows.forEach((row) => {
  // Lấy giá trị orderDate từ cột tương ứng trong hàng
  const orderDateValue = row.querySelector('td:nth-child(3)').innerText;

  // Chuyển đổi orderDate thành đối tượng Date
  const orderDate = new Date(orderDateValue);

  // Kiểm tra xem năm của orderDate có phải là 2023 hay không
  if (orderDate.getFullYear() === 2023) {
    // Lấy tháng từ orderDate
    const month = orderDate.getMonth() + 1; // Tháng bắt đầu từ 0

    // Cập nhật số lượng orderDate cho tháng hiện tại
    orderCountByMonth[month] = (orderCountByMonth[month] || 0) + 1;
  }
});
// Hiển thị số liệu trên console
console.log(orderCountByMonth);
localStorage.setItem('thongke_thang', JSON.stringify(orderCountByMonth));
// Retrieve the value from localStorage

    })
    const htmlss = cars.map(
      (car) => `
      <tr class="tr_list">
        <td>${car.orderID}</td>
        <td>${car.userID}</td>
        <td>${car.orderDate}</td>
        <td>${car.address}</td>
        <td>${car.dateOk}</td>
        <td>${car.time}</td>
        <td>${car.allPrice}</td>
        <td class="tatus">${car.tatus}</td>
        <td style="text-align: center;">
        <i class="fa-solid fa-circle-user icon_product" style="color: #005cfa;" title="Chi tiết user"></i>
        </td>
    </tr>
      `
    );
    hoadonban.innerHTML = htmlss.join("");
  }
  
  export { hoadon_bmw, render_bmw_hoadon };
  
  
  