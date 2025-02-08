
$(function(){
    // nav scroll
    $(window).scroll(function(){
        var navScroll = $(this).scrollTop();
        if(navScroll > 50) {
            $('#header').addClass('nav_scroll');
        }else{
            $('#header').removeClass('nav_scroll');
        }
    });

    // mobile menu
    var backdropFilterState = 0; 
    $('.menu-icon').click(function () {
        $('body').toggleClass('menu-open');

        if (backdropFilterState === 0) {
            $('#header.nav_scroll').css('backdrop-filter', 'none');
            backdropFilterState = 1;
        } else {
            $('#header.nav_scroll').css('backdrop-filter', 'blur(20px)');
            backdropFilterState = 0;
        }
    });
    
    // dark mode
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (isDarkModeEnabled === 'true') {
        enableDarkMode();
    }

    function enableDarkMode() {
        $('head').append('<link rel="stylesheet" type="text/css" href="https://lee-yebin.github.io/bini/public/css/dark.css" id="modeStylesheet">');
        $('.darkMode').hide();
        $('.nightMode').show();
        $('.profile > .h_menu_li_img').attr('src', 'https://lee-yebin.github.io/bini/public/images/memo_icon_dark.svg');
    }
    
    function disableDarkMode() {
        $('#modeStylesheet').remove();
        $('.nightMode').hide();
        $('.darkMode').show();
        $('.profile > .h_menu_li_img').attr('src', 'https://lee-yebin.github.io/bini/public/images/memo_icon.svg');
    }

    $('.darkMode').click(function () {
        enableDarkMode();
        localStorage.setItem('darkModeEnabled', 'true');
    });

    $('.nightMode').click(function () {
        disableDarkMode();
        localStorage.setItem('darkModeEnabled', 'false');
    });

});

