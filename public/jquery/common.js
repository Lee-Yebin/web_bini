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
    
    // dark mode
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (isDarkModeEnabled === 'true') {
        enableDarkMode();
    }

    function enableDarkMode() {
        $('head').append('<link rel="stylesheet" href="../public/css/dark.css" id="modeStylesheet">');
        $('.darkMode').hide();
        $('.nightMode').show();
        $('.profile > .h_menu_li_img').attr('src', '../public/images/memo_icon_dark.svg');
    }

    function disableDarkMode() {
        $('#modeStylesheet').remove();
        $('.nightMode').hide();
        $('.darkMode').show();
        $('.profile > .h_menu_li_img').attr('src', '../public/images/memo_icon.svg');
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

