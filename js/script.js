// Dropdown menu
const dropdown = document.querySelector('.js-dropdown');
const dropdownMenu = document.querySelector('.c-nav__dropdown-menu');

dropdown.addEventListener('click', function() {
    dropdownMenu.classList.toggle("active-dropdown");
});

// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.c-nav__links');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});


// Slick Slider
$('.single-item').slick({
    infinite : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '.prevArrow',
    nextArrow: '.nextArrow'
});

// Product Slider
$('.js-product-slider').slick({
    infinite : true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.c-feature-product__prevArrow',
    nextArrow: '.c-feature-product__nextArrow',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


// Recent Product Slider
$('.js-recent-slider').slick({
    infinite : true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.c-recent-product__prevArrow',
    nextArrow: '.c-recent-product__nextArrow',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
