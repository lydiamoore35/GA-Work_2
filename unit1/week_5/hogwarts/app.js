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
  $('h3').appendTo('#container');
  $h3.text('Gryffindor');
  const $h4 = $('<h4>');
  $('h4').appendTo('#container');
  $h4.addClass('owl' , 'Hedwig');
  $h4.text('Hornbeam wand with dragon heartstring core');
});

////year 3////