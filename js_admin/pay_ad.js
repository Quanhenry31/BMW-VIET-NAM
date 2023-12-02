function pay_bmw(callback) {
    fetch("https://localhost:5000/api-admin/PaymentsControllner/get-all")
      .then((response) => response.json())
      .then(callback);
  }
  function render_bmw_pay(cars) {
    const pay_model = document.querySelector(".pay_model");
    setTimeout(()=> {
    const xoa = document.querySelectorAll(".fa-trash-alt");// xoa
    const soluong = document.querySelector("#soluong");
    const PaymentID = document.querySelector("#PaymentID");
    const OrderID = document.querySelector("#OrderID");
    const Name = document.querySelector("#Name");
    const PaymentDate = document.querySelector("#PaymentDate");
    const Amount = document.querySelector("#Amount");
    const PaymentMethod = document.querySelector("#PaymentMethod");
    
    
    const tr_list = document.querySelectorAll(".tr_list");

    const icon_cthoadon = document.querySelectorAll(".fa-file-lines");

      // const td = document.querySelectorAll("td");
      /// duyet product
      tr_list.forEach((hv, index) => {
        soluong.innerHTML = index + 1;
        hv.addEventListener("click", () => {
          // Lấy giá trị của cột "masanpham" trong hàng được click
        const selectedRow = cars[index];
        PaymentID.value = selectedRow.paymentID;
        OrderID.value = selectedRow.orderID;
        Name.value = selectedRow.name;
        PaymentDate.value = selectedRow.paymentDate;
        Amount.value = selectedRow.amount;
        PaymentMethod.value = selectedRow.paymentMethod;

        localStorage.setItem("orderID", selectedRow.orderID);
        icon_cthoadon.forEach((hoadon, indexhoadon) => {
          hoadon.addEventListener("click", () =>{
            location.href = "../admin/HoaDonBan.html"
            console.log(selectedRow.orderID)
          })
        })
        
        });
      });
      // Lấy tất cả các phần tử <td> có class là "kieuthanhtoan"
const kieuthanhtoanElements = document.querySelectorAll('td.kieuthanhtoan');

// Khởi tạo biến đếm
let creditCardCount = 0;
let bankTransferCount = 0;

// Lặp qua mỗi phần tử và kiểm tra giá trị
kieuthanhtoanElements.forEach((element) => {
  const kieuthanhtoanValue = element.textContent.trim();

  // Kiểm tra giá trị và tăng đếm cho từng kiểu thanh toán
  if (kieuthanhtoanValue === 'Thẻ tín dụng') {
    creditCardCount++;
  } else if (kieuthanhtoanValue === 'Chuyển khoản ngân hàng') {
    bankTransferCount++;
  }
localStorage.setItem("tt_the", creditCardCount);
localStorage.setItem("tt_bank", bankTransferCount);

});

    })
    const htmlss = cars.map(
      (car) => `
      <tr class="tr_list">
        <td>${car.paymentID}</td>
        <td>${car.orderID}</td>
        <td>${car.name}</td>
        <td>${car.paymentDate}</td>
        <td>${car.amount}</td>
        <td class="kieuthanhtoan">${car.paymentMethod}</td>
        <td style="text-align: center;">
        <i class="fa-regular fa-file-lines icon_product" style="color: #005cfa;" title="Chi tiết hóa đơn"></i>
        
        </td>
    </tr>
      `
    );
    pay_model.innerHTML = htmlss.join("");
  }
  export { pay_bmw, render_bmw_pay };
  
  
  