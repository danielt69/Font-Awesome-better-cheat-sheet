$(document).ready(function($) {

    $('.col-md-4.col-sm-6.col-lg-3').each(function(index, el) {
        $(this).click(function(event) {

            var simbol = $(this).children('i').clone();
            $('.chosen_simbol').html(simbol)

            var textToCopy = 'content: "' + simbol.text() + '";\nfont-family: FontAwesome;\npadding: 0 0 0 5px;';
            $("pre").html(textToCopy)
            
            prompt("Ctrl + C to copy", $("pre").html());
        });
    });



    // $('.chosen_simbol').zclip({
    //     path:'js/ZeroClipboard.swf',
    //     copy:$('.chosen_simbol').html()
    // });

});


			
			
