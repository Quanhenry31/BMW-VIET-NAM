var idoder = localStorage.getItem("orderID")
function hoadon_bmw_seach(callback) {
    const s_name_hd = document.querySelector("#s_name_hd");
    fetch("https://localhost:5000/api-admin/Oders/get-all_oder")
      .then((response) => response.json())
      .then((cars) => {
        const filteredCars = cars.filter((car) => car.orderID == s_name_hd.value );
        callback(filteredCars);
      });
  }
  function render_bmw_hoadon_seach(cars) {
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
    const tr_list = document.querySelectorAll(".tr_list");
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

        ///
        localStorage.setItem("khID", selectedRow.userID);
        fa_user_icon.forEach((kh, indexkh) => {
         kh.addEventListener("click", () =>{
            location.href = "../admin/KhachHang.html"
            console.log(selectedRow.userID)
          })
        })
        });
      });

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
        <td>${car.tatus}</td>
        <td style="text-align: center;">
        <i class="fa-solid fa-circle-user icon_product" style="color: #005cfa;" title="Chi tiết user"></i>
        </td>
    </tr>
      `
    );
    hoadonban.innerHTML = htmlss.join("");
  }
  
  export { hoadon_bmw_seach, render_bmw_hoadon_seach };
  
  
  