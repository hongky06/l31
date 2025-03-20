let doimau = document.getElementById("doimau")
let contener = document.querySelector(".contener")
doimau.addEventListener("click", function () {
  if(contener.style.backgroundColor === "black") {
    contener.style.backgroundColor = "white"
    contener.style.color = "black"
  }else{
    contener.style.backgroundColor = "black"
    contener.style.color = "white"
  }
});