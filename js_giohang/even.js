import{giohang_bmw,render_bmw_giohang,render_local} from "./giohang.js"
function even_giohang(){
    giohang_bmw(render_bmw_giohang);
    render_local();
  

    // const table = document.querySelector('.carItem_main')
    // const tbody = table.querySelector('tbody')
    
    // const handleDeleteLesson = (btnDelete, row) => {
    //   btnDelete.onclick = () => {
    //       if (confirm('Bạn có chắc chắn muốn xóa?')) {
              
    //           tbody.removeChild(row);
    //           alert('Bạn xóa thành công.');
    //       }
    //   };
    // };
    
    // const carItems = document.querySelectorAll('.carItem')
    // carItems.forEach(item => {
    //   const btnDelete = item.querySelector('.btn_xoa_giohang');
    //   handleDeleteLesson(btnDelete, item)
      
    // })
  
}
export default even_giohang;