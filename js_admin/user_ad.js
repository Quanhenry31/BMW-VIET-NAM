function user_bmw(callback) {
    fetch("https://localhost:5000/api-admin/UserHandcontrollner/get-all")
      .then((response) => response.json())
      .then(callback);
  }
  function render_bmw_user(cars) {
    const listCustomer = document.querySelector("#listCustomer");
    setTimeout(()=> {
    const xoa = document.querySelectorAll(".fa-trash-alt");// xoa
    const soluong = document.querySelector("#soluong");
    const makh = document.querySelector("#makh");
    const tenkh = document.querySelector("#tenkh");
    const emailkh = document.querySelector("#emailkh");
    const mkkh = document.querySelector("#mkkh");
    const sdtkh = document.querySelector("#sdtkh");
    const diachikh = document.querySelector("#diachikh");

    const tr_list = document.querySelectorAll(".tr_list");
    const search_customer = document.querySelector("#search-customer");
    var idkh = localStorage.getItem("khID")



      // const td = document.querySelectorAll("td");
      /// duyet product
      tr_list.forEach((hv, index) => {
        soluong.innerHTML = index + 1;
        hv.addEventListener("click", () => {
          // Lấy giá trị của cột "masanpham" trong hàng được click
        const selectedRow = cars[index];
        makh.value = selectedRow.userID;
        tenkh.value = selectedRow.userName;
        emailkh.value = selectedRow.email;
        mkkh.value = selectedRow.password;
        sdtkh.value = selectedRow.phone;
        diachikh.value = selectedRow.queQuan;
    
  

        });
      });
      search_customer.value = idkh;
    })
    // <td style="text-align: center;padding-top: 10px;"><input type="checkbox"
    //           value="" id=""></td>
    const htmlss = cars.map(
      (car) => `
      <tr class="tr_list">
      <td style="text-align: center;padding-top: 10px;"><input type="checkbox"
              value="" id=""></td>
      <td>${car.userID}</td>
      <td>${car.userName}</td>
      <td>${car.email}</td>
      <td>${car.password}</td>
      <td>${car.phone}</td>
      <td>${car.queQuan}</td>
      <td style="text-align: center;">
          <i class="fas fa-trash-alt" title="Xóa"></i>
      </td>
  </tr>
      `
    );
    listCustomer.innerHTML = htmlss.join("");
  }
  export { user_bmw, render_bmw_user };
  
  
  