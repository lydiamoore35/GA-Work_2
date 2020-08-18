const list = [];

$(() => {
    const $toDo = $('<ul>').appendTo('#to-do-list');
    const $done = $('<ul>').appendTo('#completed');
    
    const render = () => {
        //console.log('list: ' , list);
        const $li = $('<li>' + list[list.length-1] + '</li>').addClass('to-do-item');
        $li.append($('<button>').text('completed').addClass('button'));
        $li.appendTo($toDo);

        $('.button').on('click' , (event) => {
            $li.detach();
            $li.children().text('remove').remove();
            $li.addClass('done-item');
            $li.appendTo($done);

    });
       
}
    $('#submit').on('click' , (event) => {
        console.log($('#input-box').val());
        list.push($('#input-box').val());
        //event.preventDefault();
        ($('#input-box').val(''));
        $(event.currentTarget).trigger('reset');

        render();
    })
        
});

//<button type="button" name="button" id="submit">ADD</button>
//input type="text" name="" value="" id="input-box"