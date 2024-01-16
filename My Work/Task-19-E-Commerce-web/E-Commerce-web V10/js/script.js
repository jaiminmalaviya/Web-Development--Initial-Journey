// ============ Navigation ============

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// ============ Search bar Toggle ============
$("#nav-search").on("click", function (e) {
    e.preventDefault();
    $(".top-search").slideToggle();
    if ($(".sec-1").hasClass('margin-top')) {
        $(".sec-1").removeClass('margin-top');
    }
    else {
        $(".sec-1").addClass('margin-top');
    }
});
$(".input-group-addon.close-search").on("click", function () {
    $(".top-search").slideUp();
});


// / ============ Price Range Slider ============ */
if ($(window).width() > 767) {
    function collision1($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 70;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 70;
        var r2 = x2 + w2;
        if (r1 < x2 || x1 > r2) return false;
        return true;
    }
    // // slider call
    $('#slider1').slider({
        range: true,
        min: 0,
        max: 1000,
        values: [250, 750],
        slide: function (event, ui) {
            $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
            $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
            $('.price-range-both').html('<i>$' + ui.values[0] + ' - $' + ui.values[1] + '</i>');
            if (ui.values[0] == ui.values[1]) {
                $('.price-range-both i').css('display', 'none');
            } else {
                $('.price-range-both i').css('display', 'inline');
            }
            if (collision1($('.price-range-min'), $('.price-range-max')) == true) {
                $('.price-range-min, .price-range-max').css('opacity', '0');
                $('.price-range-both').css('display', 'block');
            } else {
                $('.price-range-min, .price-range-max').css('opacity', '1');
                $('.price-range-both').css('display', 'none');
            }
        }
    });
    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider1').slider('values', 0) + ' - </i>' + $('#slider1').slider('values', 1) + '</span>');
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider1').slider('values', 0) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider1').slider('values', 1) + '</span>');
}
// ================= Mobile Slider call ====================== //
if ($(window).width() <= 767) {
    //your code here
    function collision2($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 0;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 0;
        var r2 = x2 + w2;
        if (r1 < x2 || x1 > r2) return false;
        return true;
    }
    
    $('#slider2').slider({
        range: true,
        min: 0,
        max: 1000,
        values: [250, 750],
        slide: function (event, ui) {
            $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
            $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
            $('.price-range-both').html('<i>$' + ui.values[0] + ' - $' + ui.values[1] + '</i>');
            if (ui.values[0] == ui.values[1]) {
                $('.price-range-both i').css('display', 'none');
            } else {
                $('.price-range-both i').css('display', 'inline');
            }
            if (collision2($('.price-range-min'), $('.price-range-max')) == true) {
                $('.price-range-min, .price-range-max').css('opacity', '0');
                $('.price-range-both').css('display', 'block');
            } else {
                $('.price-range-min, .price-range-max').css('opacity', '1');
                $('.price-range-both').css('display', 'none');
            }
        }
    });
    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider2').slider('values', 0) + ' - </i>' + $('#slider2').slider('values', 1) + '</span>');
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider2').slider('values', 0) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider2').slider('values', 1) + '</span>');
}

// ============ Mobile Sort ============
$('.mob_back_layer').hide();

$('#mob-sort').click(function () {
    $('#sortList').removeClass('sort_hide_list');
    $('#sortList').addClass('sort_show_list');
    $('.mob_back_layer').show();

});

$('.redio_label').click(function () {
    //$( "#sortList" ).toggleClass( 'filter_show_list filter_hide_list' );
    $('#sortList').removeClass('sort_show_list');
    $('#sortList').addClass('sort_hide_list');
    $('.mob_back_layer').hide();
});


$('#mob-filter').click(function () {
    $("#filterList").toggleClass('filter_hide_list  filter_show_list');
    $('.mob_back_layer').show();
});

$('.mob_back_layer').click(function () {
    //$( "#filterList" ).toggleClass( 'filter_show_list filter_hide_list' );
    $('.mob_back_layer').hide();

    $('#sortList').removeClass('sort_show_list');
    $('#sortList').addClass('sort_hide_list');

    $('#filterList').removeClass('filter_show_list');
    $('#filterList').addClass('filter_hide_list');
});


// ============ Modal - Password Show ============

function showpassword() {
    var x = document.getElementById("validationDefault-reset1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

let login = document.getElementById('login')
let register = document.getElementById('register')
let emailVerify = document.getElementById('emailVerify')
let resetPassword = document.getElementById('resetPassword')

function showpopup(FormName, Property) {
    document.getElementById(FormName).style.display = Property;
    if (FormName == 'login') {
        register.style.display = 'none';
        emailVerify.style.display = 'none';
        resetPassword.style.display = 'none';
    }
    else if (FormName == 'register') {
        login.style.display = 'none';
        emailVerify.style.display = 'none';
        resetPassword.style.display = 'none';
    }
    else if (FormName == 'emailVerify') {
        register.style.display = 'none';
        login.style.display = 'none';
        resetPassword.style.display = 'none';
    }
    else if (FormName == 'resetPassword') {
        register.style.display = 'none';
        emailVerify.style.display = 'none';
        login.style.display = 'none';
    }

}

window.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
    if (event.target == register) {
        register.style.display = "none";
    }
    if (event.target == emailVerify) {
        emailVerify.style.display = "none";
    }
    if (event.target == resetPassword) {
        resetPassword.style.display = "none";
    }
}


// ============== 07 - My cart ===============
// quantity buttons
$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});


// ============== 08 - Place order ===============
// Dropdown menu
$(".sec-01-arrow-up").toggle();
$(".sec-02-arrow-down").toggle();
$(".sec-03-arrow-down").toggle();
$("#payment-details").toggle();
$("#order-details").toggle();

$("#shipping-address-header").click(function () {
    $("#shipping-address").toggle();
    $(".sec-01-arrow-up").toggle();
    $(".sec-01-arrow-down").toggle();

    if ($('#shipping-address-header').css('border-bottom') == '0px none rgb(61, 61, 61)') {
        $('#shipping-address-header').css('border-bottom', '1px solid var(--border-color)');
    } else { $('#shipping-address-header').css('border-bottom', 'none'); }
});

$("#payment-details-header").click(function () {
    $("#payment-details").toggle();
    $(".sec-02-arrow-up").toggle();
    $(".sec-02-arrow-down").toggle();

    if ($('#payment-details-header').css('border-bottom') == '0px none rgb(61, 61, 61)') {
        $('#payment-details-header').css('border-bottom', '1px solid var(--border-color)');
    } else { $('#payment-details-header').css('border-bottom', 'none'); }
});

$("#order-summary-header").click(function () {
    $("#order-details").toggle();
    $(".sec-03-arrow-up").toggle();
    $(".sec-03-arrow-down").toggle();

    if ($('#order-summary-header').css('border-bottom') == '0px none rgb(61, 61, 61)') {
        $('#order-summary-header').css('border-bottom', '1px solid var(--border-color)');
    } else { $('#order-summary-header').css('border-bottom', 'none'); }
});


// CVV number validation
function cvv(input) {
    if (input.value < 0) input.value = Math.abs(input.value);
    if (input.value.length > 3) input.value = input.value.slice(0, 3);
    $(input).blur(function () {
    });
}


// Expiry date number Validation
function expiry(input) {
    if (input.value < 0) input.value = Math.abs(input.value);
    if (input.value.length > 2) input.value = input.value.slice(0, 2);
    $(input).blur(function () {
    });
}



// bottom to top
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 100);
});



