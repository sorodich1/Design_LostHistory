/*(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50)
        {
            header.classList.add('header_active')
        }
        else
        {
            header.classList.remove('header_active')
        }
    };
}());*/
function openNav()
{
    document.getElementById("sidebar").style.width = "323px";
    //document.getElementById("main").style.marginLeft = "323px";
    //document.getElementById("header").style.marginLeft = "323px";
}
function closeNav()
{
    document.getElementById("sidebar").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
   // document.getElementById("header").style.marginLeft = "0";
}
function chAngeImage(src)
{
    document.getElementById('icon').src = src;
}
function chAngeImage2(src)
{
    document.getElementById('icon2').src = src;
}
function chAngeImage3(src)
{
    document.getElementById('icon3').src = src;
}
function chAngeImage4(src)
{
    document.getElementById('icon4').src = src;
}
//burger_header
(function()
{
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuClose = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header_nav_active')
    });
}());
(function()
{
    const burgerSidebar = document.querySelector('.bur');
    const SidebarMenu = document.querySelector('.sidebar');
    const menuCloseSidebar = document.querySelector('.sidebar_nav_close');
    burgerSidebar.addEventListener('click', () => {
        SidebarMenu.classList.add('sidebar_nav_active')
    });
    menuCloseSidebar.addEventListener('click', () => {
        SidebarMenu.classList.remove('sidebar_nav_active')
    });
}());