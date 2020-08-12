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
  const $list = $('<ul></ul>').attr('storage' , 'trunk');
  $('<li>butter beer</li>').appendTo($list);
  const $cloak = $('<li>invisibility cloak</li>')
  $cloak.appendTo($list);
  $cloak.addClass('secret');
  $('<li>magic map</li>').appendTo($list).addClass('secret');
  $('<li>time turner</li>').appendTo($list).addClass('secret');
  $("<li>Bertie Bott's Every Flavor Jelly Beans</li>").appendTo($list).addClass('secret');
  $list.appendTo('#container');
});

////year 4////
$(() => {
  const $h5 = $('<h5>');
  const $table = $('<table>');
  $table.appendTo('#container');
  const $thead = $('<thead>').appendTo($table);
  $('<th>').text('Day').appendTo($thead);
  $('<th>').text('Classes').appendTo($thead);
  const $tr = $('<tr>').appendTo($thead);
  $('<td>').text('Monday').appendTo($tr);
  $('<td>').text('Herbology, Divination and History of Magic').appendTo($tr);
  const $tr2 = $('<tr>').appendTo($thead);
  $('<td>').text('Tuesday').appendTo($tr2);
  $('<td>').text('class 1, class 2, class 3').appendTo($tr2);
  const $tr3 = $('<tr>').appendTo($thead);
  $('<td>').text('Wednesday').appendTo($tr3);
  $('<td>').text('class 4, class 5, class 6').appendTo($tr3);
  const $tr4 = $('<tr>').appendTo($thead);
  $('<td>').text('Thursday').appendTo($tr4);
  $('<td>').text('class 7, class 8, class 9').appendTo($tr4);
  const $tr5 = $('<tr>').appendTo($thead);
  $('<td>').text('Friday').appendTo($tr5);
  $('<td>').text('class 10, class 11, class 12').appendTo($tr5);
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