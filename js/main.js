(function(){
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
}());
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