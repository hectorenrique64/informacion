
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options;
    var instances = M.Sidenav.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var options = {
      height:720
    }
    var instances = M.Slider.init(elems, options);


});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var options;
  var instances = M.Parallax.init(elems, options);
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var options = {
    throttle: 60
  }
  var instances = M.ScrollSpy.init(elems, options);
});



  



   