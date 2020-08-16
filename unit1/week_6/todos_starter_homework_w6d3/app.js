const list = [];

$(() => {
    const $toDo = $('<ul>').appendTo('#to-do-list');
    const $done = $('<ul>').appendTo('.done-item');
    $toDo.attr('id' , 'lists');
    
    const render = () => {
        console.log('list: ' , list);
        $toDo.empty();
        list.forEach((item) => {
            let $li = $('<li>' + item + '</li>');
            $toDo.append($li);
            const $button = $('<button>').text('complete');
            $button.appendTo($li);
        
        })

        $('button').on('click' , (event) => {
            $(event.currentTarget);
            $li.remove().appendTo($done);
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