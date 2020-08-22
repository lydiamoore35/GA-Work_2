//console.log('jquery is set up')

let player = 1;

//$(() => {
    
$('.square').on('click' , (event) => {
    //let choice = $(this);
        if($(event.currentTarget).hasClass('X') || ($(event.currentTarget)).hasClass('O')) {
            alert('This square has already been chosen. Please pick an empty square.')
        }else{
            if(player === 1) {
                $(event.currentTarget).addClass('X').text('X');
                player = 2;
            }else{
                $(event.currentTarget).addClass('O').text('O');
                player = 1;
            }
        }     
});

//});