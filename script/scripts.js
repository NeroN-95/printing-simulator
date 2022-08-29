

(function ($){
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
    $('#reset').on('click', function(){
        location.reload();
    });
    $('#reset_mob').on('click', function(){
        location.reload();
    });
})(jQuery);




let i=0;
let image=document.getElementById("image");
let imgs=new Array('img/logo.png','img/logo2.png');
function imgsrc() {
    i++;i%=imgs.length;
    image.src=imgs[i];
}
let n=0;
let smallImage=document.getElementById("image_small");
let img=new Array('img/small_logo.png','img/small_logo2.png');
function imgSmallsrc() {
    n++;n%=img.length;
    smallImage.src=img[n];
}


let switchMode = document.getElementById('switchMode');
switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    let switcher = document.getElementById("switcher") ;
    if (theme.getAttribute('href') == 'style/light-mode.css') {
        theme.href = "style/dark-mode.css"
        switcher.src = "img/light-mode.png"
    }
    else{
        theme.href = "style/light-mode.css"
        switcher.src = "img/dark-mode.png"
    }
}

let switchModeMobile = document.getElementById('switch_mode_mobile');
switchModeMobile.onclick = function () {
    let theme = document.getElementById("theme");
    let switcher = document.getElementById("switcher") ;
    if (theme.getAttribute('href') == 'style/light-mode.css') {
        theme.href = "style/dark-mode.css"
        switcher.src = "img/light-mode.png"
    }
    else{
        theme.href = "style/light-mode.css"
        switcher.src = "img/dark-mode.png"
    }
}