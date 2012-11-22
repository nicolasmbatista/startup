
// le digo a requireJS que voy a necesitar util.js para trabjar en main
require(["movie"], function(movie) {
	  var a = new movie();
	  a.setAttribute('name','terminator');
	  console.log(a.getAttribute('name'));
});
