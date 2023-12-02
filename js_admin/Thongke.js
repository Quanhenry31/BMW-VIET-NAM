var soluong_sp = localStorage.getItem("soluong_sp")
const soluongsnapham = document.querySelector(".sanpham");
soluongsnapham.innerHTML = soluong_sp + " Sản phẩm";


// tong doanh thu
var tongdoanhthu = JSON.parse(localStorage.getItem("tongdoanhthu"));
const tienbanhang = document.querySelector(".tienbanhang")
var all_doanhthu = tongdoanhthu;
tienbanhang.innerHTML = tongdoanhthu.toLocaleString('vi-VN') + " VND";

var soluong_spdaban = localStorage.getItem("soluong_spdaban");
const so_sp_daban = document.querySelector(".so_sp_daban");
so_sp_daban.innerHTML = soluong_spdaban + " Sản phẩm"
///// hoa don
var soluonghoadon = localStorage.getItem("soluong_sp");
const sl_hoadon = document.querySelector(".sl_hoadon");
sl_hoadon.innerHTML = soluonghoadon  + " Đơn";

var dangduyet = localStorage.getItem("dang_duyet");
const dang_duyet = document.querySelector(".dang_duyet");
dang_duyet.innerHTML = dangduyet + " Đơn";


var daduyet = localStorage.getItem("da_duyet");
const da_duyet = document.querySelector(".da_duyet");
da_duyet.innerHTML = daduyet + " Đơn";
// thanh toan
var tt_bank = localStorage.getItem("tt_bank");
const ngan_hang = document.querySelector(".ngan_hang");
ngan_hang.innerHTML = tt_bank;

var tt_the = localStorage.getItem("tt_the");
const tin_dung = document.querySelector(".tin_dung");
tin_dung.innerHTML = tt_the;

// phan loai bmw
const BMW_I = document.querySelector(".BMW_I");
const BMW_X = document.querySelector(".BMW_X");
const BMW_3 = document.querySelector(".BMW_3");
const BMW_4 = document.querySelector(".BMW_4");
const BMW_5 = document.querySelector(".BMW_5");
const BMW_7 = document.querySelector(".BMW_7");
const BMW_8 = document.querySelector(".BMW_8");
const BMW_z4_o = document.querySelector(".BMW_z4_o");
var BMW_1_local = localStorage.getItem("BMW_1")
var BMW_2_local = localStorage.getItem("BMW_2")
var BMW_3_local = localStorage.getItem("BMW_3")
var BMW_4_local = localStorage.getItem("BMW_4")
var BMW_5_local = localStorage.getItem("BMW_5")
var BMW_6_local = localStorage.getItem("BMW_6")
var BMW_7_local = localStorage.getItem("BMW_7")
var BMW_8_local = localStorage.getItem("BMW_8")

BMW_I.innerHTML = BMW_1_local + " Sản phẩm";
BMW_X.innerHTML = BMW_2_local + " Sản phẩm";
BMW_3.innerHTML = BMW_3_local + " Sản phẩm";
BMW_4.innerHTML = BMW_4_local + " Sản phẩm";
BMW_5.innerHTML = BMW_5_local + " Sản phẩm";
BMW_7.innerHTML = BMW_6_local + " Sản phẩm";
BMW_8.innerHTML = BMW_7_local + " Sản phẩm";
BMW_z4_o.innerHTML = BMW_8_local + " Sản phẩm";

// Chuyển đổi các giá trị từ chuỗi sang số
soluong_sp = parseInt(soluong_sp);
BMW_1_local = parseInt(BMW_1_local);
BMW_2_local = parseInt(BMW_2_local);
BMW_3_local = parseInt(BMW_3_local);
BMW_4_local = parseInt(BMW_4_local);
BMW_5_local = parseInt(BMW_5_local);
BMW_6_local = parseInt(BMW_6_local);
BMW_7_local = parseInt(BMW_7_local);
BMW_8_local = parseInt(BMW_8_local);
// Kiểm tra nếu soluong_sp khác 0 để tránh chia cho 0
if (soluong_sp !== 0) {
  // Tính phần trăm cho BMW_1_local và BMW_2_local
  var phanTram_BMW_1 = (BMW_1_local / soluong_sp) * 100;
  var phanTram_BMW_2 = (BMW_2_local / soluong_sp) * 100;
  var phanTram_BMW_3 = (BMW_3_local / soluong_sp) * 100;
  var phanTram_BMW_4 = (BMW_4_local / soluong_sp) * 100;
  var phanTram_BMW_5 = (BMW_5_local / soluong_sp) * 100;
  var phanTram_BMW_6 = (BMW_6_local / soluong_sp) * 100;
  var phanTram_BMW_7 = (BMW_7_local / soluong_sp) * 100;
  var phanTram_BMW_8 = (BMW_8_local / soluong_sp) * 100;
  // In kết quả
} else {
  console.log("Số lượng sản phẩm (soluong_sp) phải khác 0 để tránh chia cho 0.");
} 
//localStorage bieu do user
var carID_1 = localStorage.getItem("carID_1")
var carID_1031 = localStorage.getItem("carID_1031")
var carID_1032 = localStorage.getItem("carID_1032")
var carID_1033 = localStorage.getItem("carID_1033")
carID_1 = parseInt(carID_1);
carID_1031 = parseInt(carID_1031);
carID_1032 = parseInt(carID_1032);
carID_1033 = parseInt(carID_1033);

// localstorage bieu do thang nam
var thongke_thang = localStorage.getItem("thongke_thang");

// Parse the JSON string back to an object
var thongke_thang_object = JSON.parse(thongke_thang);

// Access the element at index 11
console.log(thongke_thang_object[11]);

// bieu do
window.onload = function () {
    /// bieu do product
    var chart_3 = new CanvasJS.Chart("chartContainer_3", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Product"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: phanTram_BMW_1, name: "BMW_I", exploded: true },
                { y: phanTram_BMW_2, name: "BMW_X" },
                { y: phanTram_BMW_3, name: "BMW_3" },
                { y: phanTram_BMW_4, name: "BMW_4" },
                { y: phanTram_BMW_5, name: "BMW_5" },
                { y: phanTram_BMW_6, name: "BMW_7" },
                { y: phanTram_BMW_7, name: "BMW_8"},
                { y: phanTram_BMW_8, name: "BMW_z4"}
            ]
        }]
    });
    //bieu do user vip
    var chart_2 = new CanvasJS.Chart("chartContainer_2", {
        theme: "dark1", // "light1", "light2", "dark1"
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Top 10 Top Car BMW"
        },
        axisX: {
            margin: 10,
            labelPlacement: "inside",
            tickPlacement: "inside"
        },
        axisY2: {
            title: "Views (in billion)",
            titleFontSize: 14,
            includeZero: true,
            suffix: "X"
        },
        data: [{
            type: "bar",
            axisYType: "secondary",
            yValueFormatString: "#,###.##x",
            indexLabel: "{y}",
            dataPoints: [
                { label: "car 1", y: carID_1 },
                { label: "car 1031", y: carID_1031 },
                { label: "car 1032", y: carID_1032 },
                { label: "car 1033", y: carID_1033 }
            ]
        }]
    });
    // bieu do thong ke so luong hang ban
    var chart_1 = new CanvasJS.Chart("chartContainer_1", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Month - 2023"
    },
    axisY: {
        title: "Growth Rate (in %)",
        suffix: "%"
    },
    axisX: {
        title: "Countries"
    },
    data: [{
        type: "column",
        yValueFormatString: "#,##0#\"\"",
        dataPoints: [
            { label: "1", y: 2 },	
            { label: "2", y: 3 },	
            { label: "3", y: 4 },
            { label: "4", y: 44 },	
            { label: "5", y: 5},
            { label: "6", y:66 },
            { label: "7", y:33 },
            { label: "8", y:55 },
            { label: "9", y: 63 },
            { label: "10", y: 9 },
            { label: "11", y: thongke_thang_object[11] },
            { label: "12", y: 64 }
                
                
            ]
        }]
    });
    chart_1.render();
    
    chart_3.render();
    chart_2.render();
    chart_1.render();
    }
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart_3.render();
        e.chart_2.render();
        e.chart_1.render();
    }