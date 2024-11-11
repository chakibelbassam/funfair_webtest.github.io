// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     header.classList.toggle('scrolled', window.scrollY > 50);
// });
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('.menu-toggle').click(function() {
    console.log("hi");
    $(".navbar ul").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
  });






