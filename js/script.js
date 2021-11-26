var burger = document.querySelector('.burger_menu');
var menuList = document.querySelector('.item');
var closeBtn = document.querySelector('#close');
burger.onclick = function () {
    menuList.classList.add('show');
}
closeBtn.onclick = function () {
    menuList.classList.remove('show');
}