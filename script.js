function Burger(but){
    but.classList.toggle("active");
    document.getElementById("menu").classList.toggle("active");
    let body=document.getElementsByTagName('body');
    body[0].classList.toggle("lock");
}