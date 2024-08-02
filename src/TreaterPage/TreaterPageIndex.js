$(document).ready(() => {
    $('.patientRow').click(function(event) {
        if ($(event.target).hasClass('patientRow')) { // Check if the clicked element is the .patientRow itself
            var $content = $(event.target.parentElement).find('.content');
            $(event.target).toggleClass('expanded');
            if ($(event.target).hasClass('expanded')) {
                $content.fadeIn('200');
                $content.animate({
                    minHeight: '26rem'
                }, 200);
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut('200');
            }
        }
    });
    
    $('.TreaterHeaderBox').click(function(event) {
        if ($(event.target).hasClass('TreaterHeaderBox')) { // Check if the clicked element is the .patientRow itself
            var $content = $(event.target.parentElement).find('.TreaterContent');
            $(event.target).toggleClass('expanded');
            if ($(event.target).hasClass('expanded')) {
                $content.fadeIn('200');
                $content.animate({
                    minHeight: '10rem'
                }, 200);
                } else {
                    $content.animate({
                        height: '0'
                    });
                    $content.fadeOut('200');
                }
        }
    });
    
    $('.fa-sort-desc').click(function(event) {
        if ($(event.target).hasClass('fa-sort-desc')) { // Check if the clicked element is the .patientRow itself
            var $content = $(event.target.parentElement.parentElement.parentElement).find('.content');
            $(event.target).toggleClass('expanded');
            if ($(event.target.parentElement.parentElement.parentElement).hasClass('expanded')) {
                $content.fadeIn('200');
                $content.animate({
                    minHeight: '26rem'
                }, 200);
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut('200');
            }
        }
    });
    
    $('.rowItem').click(function(event) {
        if ($(event.target).hasClass('rowItem')) { // Check if the clicked element is the .patientRow itself
            var $content = $(event.target.parentElement.parentElement.parentElement).find('.content');
            $(event.target).toggleClass('expanded');
            if ($(event.target).hasClass('expanded')) {
                $content.fadeIn('200');
                $content.animate({
                    minHeight: '26rem'
                });
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut();
            }
        }
    });
    
    $('.message').click(function(event) {
        if ($(event.target).hasClass('message')) { 
            var $content = $(event.target.parentElement).find('.messageContent');
            $(event.target.parentElement).toggleClass('expanded');
            if ($(event.target.parentElement).hasClass('expanded')) {
                $content.fadeIn();
                $content.animate({
                    minHeight: '3rem'
                });
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut();
            }
        }
    });


    $('.fa-sort-desc').click(function(event) {
            let $content = $(event.target.parentElement.parentElement).find('.messageContent');
            $(event.target).toggleClass('rotate-180');
            $(event.target.parentElement.parentElement).toggleClass('expanded');
            console.log($(event.target.parentElement.parentElement));
            if ($(event.target.parentElement.parentElement).hasClass('expanded')) {
                $content.fadeIn();
                $content.animate({
                    minHeight: '3rem'
                });
            } else {
                $content.animate({
                    minHeight: '0'
                });
                $content.fadeOut();
            }
    });

    $('.fa-plus').click(function(event){
        let $messageBox = $(document).find('.messageBox');
        $messageBox.toggleClass(`hidden`);
    })

    $('.cancelButton').click(function(event){
        $(document).find('.messageBox').toggleClass('hidden')
    })

});