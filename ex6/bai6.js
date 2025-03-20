document.getElementById("loginForm").addEventListener("submit", function (event) {
// Lấy phần tử <form> có id="loginForm" trong trang HTML.
// Lắng nghe sự kiện submit (khi người dùng nhấn nút Đăng nhập hoặc nhấn Enter trong form).
// Khi sự kiện xảy ra, hàm bên trong (function(event) { ... }) sẽ chạy.
    event.preventDefault(); 
    // Ngăn form reload

    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    if (inputUsername === "huanrose@gmail.com" && inputPassword === "123456") {
        console.log(" Đăng nhập thành công");
        alert("Đăng nhập thành công!");
    } else {
        console.log(" Đăng nhập thất bại");
        alert("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
    }
});
