const list = [];

$(() => {
    const $toDo = $('<ul>').attr('id' , 'to-do-list').appendTo('#to-do-list');
    const $done = $('<ul>').attr('id' , 'completed').appendTo('#completed');
    
    
    const render = () => {
        console.log('list: ' , list);
        $toDo.append('<li>' + list[list.length-1] + '</li>');
        $('li').addClass('to-do-item');
        const $button = $('<button>').text('complete');
        $button.appendTo($('li'));

        $('button').on('click' , (event) => {
            $(event.currentTarget);
            $('li').removeClass('to-do-item');
            $('li').addClass('done-item').appendTo($done);
    });
       
}
    
    $('#submit').on('click' , (event) => {
        console.log($('#input-box').val());
        list.push($('#input-box').val());
        event.preventDefault();
        $(event.currentTarget).trigger('reset');

        render();
    })

   

        
});

//<button type="button" name="button" id="submit">ADD</button>
//input type="text" name="" value="" id="input-box"