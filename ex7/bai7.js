// Danh sách công việc có sẵn
let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
];

// Lấy phần tử danh sách từ HTML
// bước 1: gọi phần tử ul bên html qua 
let ul = document.getElementById("myUL")

// bước 2 : hiển thị danh sách 
function hiemthi() {
    ul.innerHTML = ""
    // innerHTML : Lấy nội dung HTML bên trong một phần tử và Thay đổi nội dung HTML của phần tử
    // = "" : xóa nội dung bên trong ul nếu có 
    todoList.forEach(function(sl) {
        let li = document.createElement("li")
        // createElement : tạo ra một thể nhưng không tự động thêm vào trang web - và cần gắn vào DOM bằng phương thức khác , appendChild
        // tạo ra một thẻ li trong ul 
        li.textContent = sl.task 
        // textContent : tác dụng lấy ra nôi dung văn bản của một phân tử và ghi đề vào nội dung bên trong (thay đổi cả nội dung gốc)
        ul.appendChild(li)
        // thêm phân tử li vào trong ul bên html 
    })
}   
hiemthi() 
