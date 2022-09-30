let head = document.getElementById("head1");
let headtxt = document.getElementById("headtxt");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    head.style.top = value * 1 + 'px';
    headtxt.style.top = -value * 2 + 'px';
})