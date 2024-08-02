$(document).ready(() => {
    $('.message').click(function(event) {
        if ($(event.target).hasClass('message')) { 
            var $content = $(event.target.parentElement).find('.messageContent');
            $(event.target.parentElement.parentElement.parentElement).toggleClass('expanded');
            if ($(event.target.parentElement.parentElement.parentElement).hasClass('expanded')) {
                $content.fadeIn();
                $content.animate({
                    minHeight: '3rem'
                }, 50);
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut();
            }
        }
    });

    $('.messageBox').click(function(event) {
            var $content = $(event.target).find('.messageContent');
            $(event.target).toggleClass('expanded');
            if ($(event.target.parentElement.parentElement.parentElement).hasClass('expanded')) {
                $content.fadeIn();
                $content.animate({
                    minHeight: '3rem'
                }, 50);
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut();
            }
    });

    $('.fa-angle-down').click(function(event) {
            var $content = $(event.target.parentElement.parentElement.parentElement).find('.messageContent');
            $(event.target).toggleClass('rotate-180');
            $(event.target.parentElement.parentElement.parentElement).toggleClass('expanded');
            if ($(event.target.parentElement.parentElement.parentElement).hasClass('expanded')) {
                $content.fadeIn('20');
                $content.animate({
                    minHeight: '3rem'
                }, 50);
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut();
            }
    });

    $('.editProfileBtn').click(function(event){
        let $messageBox = $(document).find('.messageBox');
        $messageBox.toggleClass(`hidden`);
    })

    $('.cancelButton').click(function(event){
        $(document).find('.messageBox').toggleClass('hidden')
    })

    $('.popUpImage').click(function(event){
        console.log('hello, world')
        let $messageBox = $(document).find('.brainMapImage');
        $messageBox.toggleClass(`hidden`);
    })

    $('.brainMapImage').click(function(event){
        console.log('hello, world')
        $(event.target.parentElement).toggleClass(`hidden`);
    })

});
