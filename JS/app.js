const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
             link.style.animation ='';
            } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });


}

navSlide();


// Trailer //
function ball() {
    document.getElementById("volumeon").style.display = "none";
    document.getElementById("volumeoff").style.display = "block";
    document.getElementById("Trailer").muted = true;
}

function ball2() {
    document.getElementById("volumeoff").style.display = "none";
    document.getElementById("volumeon").style.display = "block";
    document.getElementById("Trailer").muted = false;
}
