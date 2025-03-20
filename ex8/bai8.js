// Danh sách công việc có sẵn
let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
];

let ul = document.getElementById("myUL")

function hienthi() {
    ul.innerHTML = ""
    todoList.forEach(function(sl) {
        let li = document.createElement("li")
        li.textContent = sl.task 
        ul.appendChild(li)
    })
}

let mydiv = document.getElementById("myDIV")
mydiv.addEventListener("click", function(event) {
    event.preventDefault();
    let myinput = document.getElementById("myInput").value;
    todoList.push({ id: todoList.length + 1, task: myinput, completed: false });
    document.getElementById("myInput").value = "";
    hienthi() 
})

hienthi() 
