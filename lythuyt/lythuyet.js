// console.dir(document)
// // cách gọi phần tử từ html qua js
// // cách 1 : ID 
// let h1 = document.getElementById("demo-id");
// console.log(h1)

// //cách 2 : class  => trả về một HTMLCollection
// let taglist = document.getElementsByClassName("demo-class") 
// console.log(taglist)

// //truy cập và lấy ra thẻ i (phần tử tại ví trí thứ 2)
// console.log(taglist[taglist.length-1])

// cách 3 : gọi qua tên thê => trả về một HTMLCollection
//---------------------------------------------------------------------------------------------

// let iTag = document.getElementsByClassName("demo-class")[2]    ;
// console.dir(iTag) 
// // kiểm soát nội dung
// console.log(iTag.innerHTML);
// console.log(iTag.innerText);
// console.log(iTag.textContent);

let p = document.getElementById("demo-inner")
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.textContent);


p.textContent = "hello word"
p.innerHTML = `
<span>hong ky </span>
<u>2006 </u>
`

//------------------------------------------------------------------------------
// id
console.log(p.id) // demo-inner
//style
console.log(p.style)
p.style.width = "200px";
p.style.height = "200px";
p.style.borderRadius = "50% ";
p.style.backgroundColor = "pink";



let abbr = document.getElementsByClassName("class-01")
console.log(abbr[0])
// kiểm soát danh sách class của thẻ abbr




// 


