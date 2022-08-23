

  (function ($){
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);





document.getElementById('reset').onclick = function() {
    
    location.reload(); 
  }
document.getElementById('reset_mob').onclick = function(){
    location.reload();
}



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
  