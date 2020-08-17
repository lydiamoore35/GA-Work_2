const list = [];

$(() => {
    const $toDo = $('<ul>').appendTo('#to-do-list');
    const $done = $('<ul>').appendTo('#completed');
    
    
    const render = () => {
        $toDo.empty();
        let $li = $('<li>').text($('#input-box').val());
        //$toDo.append($li + list[list.length-1] + $li);
        const $button = $('<button>').text('complete');
        $button.appendTo($('#to-do-list'));
        $button.on('click' , (event) => {
            $('li').detach().appendTo($done);
        });
       
}
    $('#submit').on('click' , (event) => {
        $('#input-box').val('');
        list.push($('#input-box').val());
        event.preventDefault();
        $(event.currentTarget).trigger('reset');

        render();
    })
        
});

//<button type="button" name="button" id="submit">ADD</button>
//input type="text" name="" value="" id="input-box"