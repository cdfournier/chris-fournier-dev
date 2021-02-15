function doStuff (callback) {
  // do all app scripts here...
  callback();
}

doStuff(function () {
  document.body.className = 'visible';
});

var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init();