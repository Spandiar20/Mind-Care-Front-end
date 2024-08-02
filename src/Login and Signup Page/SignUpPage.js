$(document).ready(function() {
    var timerActive = false;

    $(".startTimerBtn").click(function() {
        if (!timerActive){
            let duration = 60;

            $(".dynamicIcon").hide();
            $(".timerTxt").show();
            $(".startTimerBtn").prop('disabled', true);
    
            var timerInterval = setInterval(function() {
                duration--;
                if (duration >= 0) {
                    var minutes = Math.floor(duration / 60);
                    var seconds = duration % 60;
                    $(".timerTxt").text((minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds));
                } else {
                    clearInterval(timerInterval);
                    $(".timerTxt").hide();
                    $(".dynamicIcon").show();
    
                    $(".startTimerBtn").prop('disabled', false);
                }
            }, 1000);

            timerActive = true;

        }
    });

        $(".showPasswordIcon").click(function() {
        var passwordInput = $(this).closest('.inputSection').find('input');
        
        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
        } else if (passwordInput.attr('type') === 'text') {
            passwordInput.attr('type', 'password');
        }
    });


});


