
function seachid_bmw(callback) {
    const s_id = document.querySelector("#s_id");
    fetch("https://localhost:5000/api-admin/Carcontrollner/get-all")
      .then((response) => response.json())
      .then((cars) => {
        const filteredCars = cars.filter((car) => car.carID == s_id.value);
        callback(filteredCars);
      });
  }
  function render_bmw_seachid(cars) {
    const hiden_pro_menu = document.querySelector(".hiden_pro_menu");
    setTimeout(()=> {
    const xoa = document.querySelectorAll(".fa-trash-alt");// xoa
    const soluong = document.querySelector("#soluong");
    const masanpham = document.querySelector("#masanpham");
    const tensanpham = document.querySelector("#tensanpham");
    const chaybang = document.querySelector("#chaybang");
    const giaban = document.querySelector("#giaban");
    const ngaysanxuat = document.querySelector("#ngaysanxuat");
    const LoaiID = document.querySelector("#LoaiID");
    const linkimg = document.querySelector("#linkimg");
    const slsp = document.querySelector("#slsp");
    const tr_list = document.querySelectorAll(".tr_list");
      // const td = document.querySelectorAll("td");
      /// duyet product
      tr_list.forEach((hv, index) => {
        soluong.innerHTML = index + 1;
        hv.addEventListener("click", () => {
          // Lấy giá trị của cột "masanpham" trong hàng được click
        const selectedRow = cars[index];
        masanpham.value = selectedRow.carID;
        tensanpham.value = selectedRow.name;
        chaybang.value = selectedRow.modelCode;
        giaban.value = selectedRow.price;
        ngaysanxuat.value = selectedRow.year;
        LoaiID.value = selectedRow.categoryID;
        linkimg.value = selectedRow.imgLink;
        slsp.value = selectedRow.quantity;
  
        });
      });
      var ixe = localStorage.removeItem("carID")
    
    })
    const htmlss = cars.map(
      (car) => `
      <tr class="tr_list">
          <td style="text-align: center;padding-top: 10px;"><input type="checkbox"
                  value="" id=""></td>
          <td>${car.carID}</td>
          <td>${car.name}</td>
          <td>${car.modelCode}</td>
          <td>${car.price}</td>
          <td>${car.year}</td>
          <td>${car.categoryID}</td>
          <td>
          <img src=".${car.imgLink}" alt="" />
          </td>
          <td>${car.quantity}</td>
          <td style="text-align: center;">
              <i class="fas fa-edit icon_product" title="Sửa"></i>
              <i class="fas fa-trash-alt icon_product" title="Xóa"></i>
          </td>
      </tr>
      `
    );
    hiden_pro_menu.innerHTML = htmlss.join("");
  }
  export {seachid_bmw, render_bmw_seachid };
  
  
  