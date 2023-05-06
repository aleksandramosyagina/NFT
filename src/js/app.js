$(document).ready(function () {
    $('.nav-hamburger').click(function (event) {
        $('.nav-hamburger, .nav-mobile, .nav-hamburger__line').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$('.nav-menu-list__item_link').click(function () {
    $('.nav-hamburger, .nav-mobile, .nav-hamburger__line').removeClass('active');
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
});

function closeModal() {
    $('.popup.active').removeClass('active');
};

const buttonPay = document.getElementById("pay-button");

$('#form_id input[type=email]').on('blur', function () {
    let email = $(this).val();

    if (email.match(/.+?\@.+/g).length > 0) {
        console.log('valid');
        $('.popup__button').addClass('active');

        buttonPay.onclick = function () {
            $('.popup-tnks').addClass('active');
            $('.popup.active').removeClass('active');
            $('body').addClass('lock');
        };
    } else {
        console.log('invalid');
    }
});