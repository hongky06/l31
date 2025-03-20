// mo phòng một kho lưu lưu trữ dữ liệu 
// chứa các dự liệu ( có tính chất tương đồng nhau)
// để vận hành ứng dụng
let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
];


let ul = document.getElementById("myUL")

displaytodo()
let input = document.getElementById("myInput");
function an() {
    let newtodo = {
        id: todoList.length + 1,
        task: input.value,
        completed: false,
    };

    todoList.push(newtodo)
    displaytodo()
}

function displaytodo() {
    ul.innerHTML = ""
    for (let i in todoList) {
        let li;
        if (todoList[i].completed === true) {
            li = `<li  class="checked">
            ${todoList[i].task} 
            <span class ="close" >&#x2715;</span>
            <i class="fa-solid fa-xmark"></i>
            </li>`
        } else {
            li = `<li>
            ${todoList[i].task} 
            <span class ="close" >&#x2715;</span>
            </li>`
        }
        ul.innerHTML = ul.innerHTML + li
        document.getElementById("myInput").value = "";
        // vị trí nút close mới sinh ra 
        let closelist = document.getElementsByClassName("close")
        for (let i in closelist){
            closelist[i].onclick() = function (){

            }

        }




    }   
}





// xoa
// bước 1 : gọi ra nút close
// gắn sự kiện cho tất cả các nt one click đó






