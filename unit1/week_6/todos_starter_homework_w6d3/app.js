const list = [];

$(() => {
    
    const $toDo = $('<ul>').appendTo('#to-do-list');
    const $done = $('<ul>').appendTo('#completed');
    
    const render = () => {
        //console.log('list: ' , list);
        const $li = $('<li>' + list[list.length-1] + '</li>').addClass('to-do-item').css('list-style' , 'none');
        $li.append($('<button>').text('completed').addClass('button'));
        $li.appendTo($toDo);

        $('.button').on('click' , (event) => {
            //$(event.currentTarget).parent().text('remove').addClass('done-item').appendTo($done);
            // $li.detach();
            $(event.currentTarget).removeClass('button').addClass('buttonRemove');
            $li.children().text('remove');
            $li.addClass('done-item');
            $li.removeClass('to-do-item');
            $done.append($(event.currentTarget).parent());
            // $li.appendTo($done);
        $('.buttonRemove').on('click' , (event) => {
            $(event.currentTarget).parent().remove();
            $(event.currentTarget).trigger('reset');
        })
            
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