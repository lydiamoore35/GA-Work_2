// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

////year 1////
$(() => {
  $container = $('#container');
  //console.log($container);
  const $h1 = $('<h1>');
  $('#container').append($h1);
  $h1.text("Hogwarts");
});

////year 2////
$(() => {
  const $h2 = $('<h2>');
  $h2.appendTo('#container');
  $h2.text("Lydia Moore");
  const $h3 = $('<h3>');
  $h3.appendTo('#container');
  $h3.text('Gryffindor');
  const $h4 = $('<h4>');
  $h4.appendTo('#container');
  $h4.addClass('owl' , 'Hedwig');
  $h4.text('Hornbeam wand with dragon heartstring core');
});

////year 3////
$(() => {
  const $ul = $('<ul>');
  $ul.attr('storage' , 'trunk');
  $ul.appendTo('#container');
  const $li = $('<li>');
  $li.appendTo($ul);
  $li.text('butter beer');
  $ul.append('<li>invisibility cloak</li>');//need to assign class secret
  $ul.append('<li>magic map</li>');//need to assign class secret
  $ul.append('<li>time turner</li>');//need to assign class secret
  $ul.append('<li>leash</li>');
  $ul.append("<li>Bertie Bott's Every Flavor Jelly Beans</li>");
});

////year 4////
$(() => {
  const $h5 = $('<h5>');
  const $table = $('<table>');
  const $tr = $('<tr>');
  $table.append('<tr></tr>');
  $h5.appendTo('#container');
  $table.appendTo('#container');
  const $th = $('<th></th>');
  $tr.append('<th></th>');//can't seem to get the th to appear within the tr within the table??
  


});

////year 5////
$(() => {

});

////year 6////
$(() => {

});

////year 7////
$(() => {

});