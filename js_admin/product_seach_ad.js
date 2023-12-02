let apiSeach = "https://localhost:5000/api-admin/Carcontrollner/search";
function seach_bmw(callback,data) {
       const s_trang = document.querySelector("#s_trang");
const s_quantity = document.querySelector("#s_quantity");
const s_name = document.querySelector("#s_name");
       const carData = {
        pageIndex: s_trang.value,
        pageSize: s_quantity.value,
        name: s_name.value,
      };
      fetch(apiSeach, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Methods": "allow",
        },
        body: JSON.stringify(carData),
      })
      .then((res) => res.json())
      .then(callback);
    }
  
function render_bmw_seach(cars) {
    console.log("🚀 ~ file: product_seach_ad.js:31 ~ render_bmw_seach ~ cars:", cars)
    const hiden_pro_menu = document.querySelector(".hiden_pro_menu");
    const htmlss = cars.data.map(
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
              <i class="fas fa-edit" title="Sửa"></i>
              <i class="fas fa-trash-alt" title="Xóa"></i>
          </td>
      </tr>
      `
    );

    hiden_pro_menu.innerHTML = htmlss.join("");
  }

  
  export { seach_bmw, render_bmw_seach };