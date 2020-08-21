console.log('jquery is set up')

$(() => {

$('.square').on('click' , (event) => {
    $(event.currentTarget).text('X');

});

$('.square').on('click' , (event) => {
    $(event.currentTarget).text('Y');

});


});