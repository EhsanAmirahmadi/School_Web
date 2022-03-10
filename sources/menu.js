let btn = document.querySelector("#btn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () =>{
    menu.classList.toggle("active");
    btn.classList.toggle("active");
})