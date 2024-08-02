$(document).ready(function() {
    $('#hamburgerMenuButton').click(function() {
        $('.slideMenu').toggleClass('translate-x-[-100%]');
    });
});

$(document).click(function(e) {
        if (!$(e.target).closest('.slideMenu').length && !$(e.target).is('.slideMenu') && !$(e.target).is('#hamburgerMenuButton')) {
            // If the clicked element is not inside the slideMenu or the hamburgerMenuButton, close the slideMenu
            $('.slideMenu').removeClass('translate-x-[-100%]');
        }
    });