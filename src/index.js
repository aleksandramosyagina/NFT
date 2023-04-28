$(document).ready(function () {
    $('.nav__hamburger').click(function (event) {
        $('.nav__hamburger, .nav__menu-mobile, .nav__hamburger_line').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$('.nav__menu-mobile_item-link').click(function () {
    $('.nav__hamburger, .nav__menu-mobile, .nav__hamburger_line').removeClass('active');
    $('body.lock').removeClass('lock');
});

const buttonElem = document.getElementById("popup-button");

buttonElem.onclick = function () {
    $('.popup').addClass('active');
    $('body').toggleClass('lock');
}

$(document).click(function (e) {
    if ($(e.target).is('.popup')) {
        closeModal();
    }
})

function closeModal() {
    $('.popup.active').removeClass('active');
}