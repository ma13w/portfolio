/* navbar animation */
document.addEventListener('scroll', function() {
    const projectSection = this.querySelector('#init-title');
    const rect = projectSection.getBoundingClientRect();
    const projectSectionyCoordinate = rect.top + window.scrollY;
    const nav = this.querySelector('.left-navbar');
    const navList = this.querySelector('.nav-list');

    const offset = nav.offsetHeight;

    /* manage navbar item position */
    if (window.scrollY <= projectSectionyCoordinate + offset) {
        nav.style.position = 'fixed';
        nav.style.top = '0'; 

        const newlineItem = document.querySelector('#main-text-nav');
        if (newlineItem) {
            newlineItem.remove();
            navList.style.width = "50%";
            navList.style.paddingTop = "33px";
        }
    } else {
        /* add main text to navbar with animation */
        if (!document.querySelector('#main-text-nav')) {
            navList.style.width = "60%";

            var newlineDiv = document.createElement("div");
            newlineDiv.className = "nav-item";
            newlineDiv.className = "main-text";
            newlineDiv.id = "main-text-nav";
            newlineDiv.textContent = "Mattew";

            const navItems = document.querySelectorAll('.nav-item');
            const middleIndex = Math.ceil(navItems.length / 2);
            const middleNavItem = navItems[middleIndex];
            if (middleNavItem) {
                middleNavItem.insertAdjacentElement('beforebegin', newlineDiv);
            }
        }
    }

    /* manage shadow effect navbar */
    const topSideElement = document.querySelector('.top-side');
    if (window.scrollY >= topSideElement.offsetHeight - offset) {
        nav.classList.remove("white-shadow-effect") 
        nav.classList.add("black-shadow-effect") 
    } else {
        nav.classList.remove("black-shadow-effect") 
        nav.classList.add("white-shadow-effect") 
    }
});

/* select external circle color */
function colorExternalCircle(element){
    const insideCircle = element.querySelector('.inside-circle');
    const computedStyle = window.getComputedStyle(insideCircle);
    const bgColor = computedStyle.backgroundColor;
    var newColor;
    if(bgColor.indexOf('a') == -1){
        newColor = bgColor.replace(')', ', 0.5)').replace('rgb', 'rgba');
    }
    element.style.backgroundColor = newColor;
}
/* set color to external circles */
document.addEventListener('DOMContentLoaded', function(){
    const circles = document.querySelectorAll('.outside-circle');
    circles.forEach(circle => {
        colorExternalCircle(circle);
    });
});


/* Toggle between contact forms */
function toggleContact(elem) {
    elem.classList.add('selector-active');
    document.querySelectorAll('.selector-type').forEach(selector => {
        if (selector != elem) selector.classList.remove('selector-active');
    });

    const messageForm = document.getElementById('message-form');
    const commentForm = document.getElementById('comment-form');

    if (elem.id == "msg") {
        messageForm.style.opacity = "1";
        messageForm.style.display = "block";
        commentForm.style.opacity = "0";
        commentForm.style.display = "none";
    } else if (elem.id == "cmt") {
        commentForm.style.opacity = "1";
        commentForm.style.display = "block";
        messageForm.style.opacity = "0";
        messageForm.style.display = "none";
    }

    // Add transition ease
    messageForm.style.transition = "opacity 0.5s ease";
    commentForm.style.transition = "opacity 0.5s ease";
}

/* who-i-am section -> scroll scpace ontop */ 
document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector('.nav-item a[href="#who-i-am"]');
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        var targetElement = document.getElementById('who-i-am');
        if (targetElement) {
            var offset = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});


/* Scroll Reveal Animation */
const srtop = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 800,
    delay: 150,
    easing: 'ease',
    reset: true,
    viewOffset: { top: 100, right: 0, bottom: 0, left: 0 }
});
document.addEventListener("DOMContentLoaded", function() {
    srtop.reveal('.page-title');
});


document.addEventListener("DOMContentLoaded", function() {
    const staticContactHeight = this.querySelector('.contact-form').offsetHeight;
    this.querySelectorAll('.contact-form').forEach(elem => {
        elem.style.height = staticContactHeight - 100 + "px";
    });
    console.log(staticContactHeight);
});