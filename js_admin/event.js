import { getI4product_bmw, render_bmw_i4pro } from "./product_ad.js";
import {  user_bmw, render_bmw_user } from "./user_ad.js";
import { hoadon_bmw, render_bmw_hoadon } from "./hoadonban_ad.js";
import{cthoadon_bmw , render_bmw_cthoadon} from "./cthoadonban_ad.js" ;
import{pay_bmw , render_bmw_pay} from "./pay_ad.js" ;

import{seach_bmw , render_bmw_seach} from "./product_seach_ad.js" ;
import{hoadon_bmw_seach, render_bmw_hoadon_seach} from "../js_admin/hoadonban_seach_id.js" ;
import{kh_bmw_seach, render_bmw_kh_seach} from "../js_admin/user_seach_id.js" ;
import{ seachid_bmw, render_bmw_seachid} from "../js_admin/xe_seach_id.js" ;
const timkiem_btn = document.querySelector(".timkiem_btn");
const timkiem_btn_hd = document.querySelector(".timkiem_btn_hd");
const timkiem_user = document.querySelector(".timkiem_user");
const s_trang = document.querySelector("#s_trang");
const s_quantity = document.querySelector("#s_quantity");
const s_name = document.querySelector("#s_name");
const s_id = document.querySelector("#s_id");
const s_name_hd = document.querySelector("#s_name_hd");
const search_customer = document.querySelector("#search-customer");
// phan khai bao const

function handleProduct() {
  timkiem_btn.addEventListener("click", () => {
    if (s_name.value == "" && s_trang.value == "" && s_quantity.value == "" && s_id.value == "" ) {
      getI4product_bmw(render_bmw_i4pro);
      console.log("all")

    } else if(s_id.value !== ""){
      seachid_bmw(render_bmw_seachid)
      console.log("seach id")

    }
    else {
      seach_bmw(render_bmw_seach);
      console.log("seach thay")

      };
      })
    };
    
    timkiem_btn_hd.addEventListener("click",()=>{
      if(s_name_hd.value == ""){
        hoadon_bmw(render_bmw_hoadon)
      }
      else{
        
        hoadon_bmw_seach(render_bmw_hoadon_seach)
      }
    })

    timkiem_user.addEventListener("click",()=>{
      if(search_customer.value == ""){
        user_bmw(render_bmw_user);
      }else{
        kh_bmw_seach(render_bmw_kh_seach)
      }
    })

    getI4product_bmw(render_bmw_i4pro);
    user_bmw(render_bmw_user);
    hoadon_bmw(render_bmw_hoadon)
    cthoadon_bmw(render_bmw_cthoadon)
    pay_bmw(render_bmw_pay)

export default handleProduct;