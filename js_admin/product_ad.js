function getI4product_bmw(callback) {
  fetch("https://localhost:5000/api-admin/Carcontrollner/get-all")
    .then((response) => response.json())
    .then(callback);
}
function render_bmw_i4pro(cars) {
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

  const s_id = document.querySelector("#s_id");
  var ixe = localStorage.getItem("carID")
    // const td = document.querySelectorAll("td");
    /// duyet product
    tr_list.forEach((hv, index) => {
      soluong.innerHTML = index + 1;
      localStorage.setItem("soluong_sp",  soluong.innerHTML);

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
    s_id.value = ixe
      // Lấy tất cả các phần tử <td> có class là "kieuthanhtoan"
      const loai_idElements = document.querySelectorAll('.loai_id');

      // Khởi tạo biến đếm
      let BMW_1Count = 0;
      let BMW_2Count = 0;
      let BMW_3Count = 0;
      let BMW_4Count = 0;
      let BMW_5Count = 0;
      let BMW_6Count = 0;
      let BMW_7Count = 0;
      let BMW_8Count = 0;
      let tongphantram = 0;
      // Lặp qua mỗi phần tử và kiểm tra giá trị
      loai_idElements.forEach((element) => {
        const loai_idValue = element.textContent.trim();
      
        // Kiểm tra giá trị và tăng đếm cho từng kiểu thanh toán
        if (loai_idValue === "1") {
          BMW_1Count++;
          
        } else if (loai_idValue === "2") {
          BMW_2Count++;
         
        }else if (loai_idValue === "3") {
          BMW_3Count++;
         
        }else if (loai_idValue === "4") {
          BMW_4Count++;
        
        }else if (loai_idValue === "5") {
          BMW_5Count++;
          
        }else if (loai_idValue === "6") {
          BMW_6Count++;
         
        }else if (loai_idValue === "7") {
          BMW_7Count++;
          

        }else if (loai_idValue === "8") {
          BMW_8Count++;
        }
      localStorage.setItem("BMW_1", BMW_1Count);
      localStorage.setItem("BMW_2", BMW_2Count);
      localStorage.setItem("BMW_3", BMW_3Count);
      localStorage.setItem("BMW_4", BMW_4Count);
      localStorage.setItem("BMW_5", BMW_5Count);
      localStorage.setItem("BMW_6", BMW_6Count);
      localStorage.setItem("BMW_7", BMW_7Count);
      localStorage.setItem("BMW_8", BMW_8Count);
    // var allphantram_sp = (BMW_1Count + BMW_2Count + BMW_3Count +BMW_4Count+BMW_5Count+BMW_6Count+BMW_7Count+BMW_8Count);
    
  });
 

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
          <td class="loai_id">${car.categoryID}</td>
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
  // let carIDs = cars.map(car => car.carID);
  // localStorage.setItem('carIDs', JSON.stringify(carIDs));
  hiden_pro_menu.innerHTML = htmlss.join("");
}
export { getI4product_bmw, render_bmw_i4pro };


