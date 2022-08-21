

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



  let i=0;
  let image=document.getElementById("image");
  var imgs=new Array('img/logo.png','img/logo2.png');
  function imgsrc() {
      i++;i%=imgs.length;
      image.src=imgs[i];
  }
   