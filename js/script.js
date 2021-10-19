// alert (1)
// console.log(personName);

// let answer = confirm("Вам есть 18 лет?");
// console.log(answer);

// let answer = prompt("Вам есть 18 лет?", "");
// console.log(answer);

// $(document).ready(function(){
//     $('.carousel_inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></img></button>',
//         responsive: [
//             {
//             breakpoint: 992,
//             settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }
//         ],
//     });
//   });



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navSpeed: 2000,
        navText: [$('.owl-prev1'),$('.owl-next1')],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
    }
    });
});

// $(".owl-carousel").owlCarousel({
//     // you can use jQuery selector
//     navText: [$('.owl-prev1'),$('.owl-next1')]
 
// });

// var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.owl-prev1').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.owl-next1').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel');
// })
