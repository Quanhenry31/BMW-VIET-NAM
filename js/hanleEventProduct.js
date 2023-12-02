// chuyen trang gio hang
const oder_car_main = document.querySelector(".oder_car_main");

const mau_ngoaithat = document.querySelector(".mau_ngoaithat");
const mam_xe = document.querySelector(".mam_xe");
const chat_lieu = document.querySelector(".chat_lieu");
const noi_that = document.querySelector(".noi_that");

// color car
const img_mamxe = document.querySelector(".img_mamxe");
const img_xanh = document.querySelector(".img_xanh");
const img_cam = document.querySelector(".img_cam");
const img_trang = document.querySelector(".img_trang");
const img_car_color = document.querySelectorAll(".img_100");
const li_product_car = document.querySelectorAll(".li_product_car");

const conten_controler_sevice = document.querySelector(
  ".conten_controler_sevice"
);
const conten_controler_sevice_2 = document.querySelector(
  ".conten_controler_sevice_2"
);

//video
const i4_video1 = document.querySelector("#back-video");
const i4_video2 = document.querySelector("#back-video_2");

function handleEventProduct() {

  img_car_color.forEach((element, index) => {
    element.addEventListener("click", () => {
      console.log(index);
      if (index == 16) {
        img_cam.style = "display:none";
        img_trang.style = "display:block";
        img_xanh.style = "display:none";
      } else if (index == 14) {
        img_xanh.style = "display:none";
        img_cam.style = "display:block";
        img_trang.style = "display:none";
      } else if (index == 15) {
        img_xanh.style = "display:block";
        img_cam.style = "display:none";
        img_trang.style = "display:none";
      }
    });
  });

   li_product_car.forEach((element, index) => {
    element.addEventListener("click", () => {
      console.log(index);
      if (index == 0) {
        img_mamxe.style = "display:none ";
        img_cam.style = "display:block";
        conten_controler_sevice.style = "display:block";
        conten_controler_sevice_2.style = "display:none";
      } else if (index == 1) {
        conten_controler_sevice_2.style = "display:block";
        conten_controler_sevice.style = "display:none";
        img_mamxe.style = "display:block";
        img_xanh.style = "display:none";
        img_cam.style = "display:none";
        img_trang.style = "display:none";
      }
    });
  });
  var isPlaying = false;
  i4_video1.addEventListener("click", function () {
    if (isPlaying) {
      // Nếu video đang chạy, dừng nó
      i4_video1.pause();
    } else {
      // Nếu video đang tạm dừng hoặc chưa bắt đầu, play nó
      i4_video1.play();
    }
    // Cập nhật trạng thái của video
    isPlaying = !isPlaying;
  });

  var isPlaying2 = false;
  i4_video2.addEventListener("click", function () {
    if (isPlaying2) {
      // Nếu video đang chạy, dừng nó
      i4_video2.pause();
    } else {
      // Nếu video đang tạm dừng hoặc chưa bắt đầu, play nó
      i4_video2.play();
    }
    // Cập nhật trạng thái của video
    isPlaying2 = !isPlaying2;
  });
  
}
export default handleEventProduct;
