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
    $('head').append('<link rel="stylesheet" href="../css/dark.css" id="modeStylesheet">');
    $('.darkMode').hide();
    $('.nightMode').show();
    // 이미지 클릭 시 dark 모드 아이콘으로 변경
    $('.profile > .h_menu_li_img').click(function () {
        $(this).attr('src', 'https://lee-yebin.github.io/bini/images/memo_icon_dark.svg');
    });
}

function disableDarkMode() {
    $('#modeStylesheet').remove();
    $('.nightMode').hide();
    $('.darkMode').show();
    // 이미지 클릭 시 기본 모드 아이콘으로 변경
    $('.profile > .h_menu_li_img').click(function () {
        $(this).attr('src', 'https://lee-yebin.github.io/bini/public/images/memo_icon.svg');
    });
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

