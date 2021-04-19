< script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.3/jquery.flexslider-min.js" > < /script> <
    script src = "email-validation.js" > < /script> <
    script >
    $(document).ready(function() {
        $('.flexslider').flexslider({
            animation: "slide"
        });

        $('ul.menu').find('a').click(function() {
            var $href = $(this).attr('href');
            var $anchor = $($href).offset();
            $('ul.menu a').removeClass('menu_active')
            $(this).addClass('menu_active')
            console.log($anchor, $anchor.top)
            $('html,body').animate({
                    scrollTop: $anchor.top - 80
                },
                'slow');
            return false;
        });
    });

function checkEmail() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test($('#email').val()) == false) {
        $('#error').show()
        return false;
    } else {
        $('#error').hide()
        return true;
    }
} <
/script>