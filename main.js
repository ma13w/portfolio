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
            newlineDiv.addEventListener("click", function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

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

        circle.addEventListener('mouseenter', function() {
            // circle.style.backgroundColor = 'transparent';
            circle.style.borderRadius = '40px';
        });

        circle.addEventListener('mouseleave', function() {
            circle.style.borderRadius = '100px';
            colorExternalCircle(circle);
        });
    });
});

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
var settings;
if(isPhone()){
    settings = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 800,
        delay: 150,
        easing: 'ease',
        reset: false,
    });
}else{
    settings = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 800,
        delay: 150,
        easing: 'ease',
        reset: false,
        viewOffset: { top: 100, right: 0, bottom: 0, left: 0 }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    settings.reveal('.page-title');
    settings.reveal('.contact-form > div, .contact-form > span, .contact-form > input, .contact-form > textarea, .contact-form > button', {
        origin: 'top',
        distance: '30px',
        duration: 500,
    });
});

/* some fix for mobile view */
function isPhone() {
    return window.innerWidth < 992;
}

document.addEventListener("DOMContentLoaded", function() {
    if(isPhone()){
        document.querySelectorAll("#message-form > span").forEach(elem => {
            if (elem.textContent.includes(".")) {
                elem.style.display = "none";
            }
        });
    }
});


/* toggle theme */
function toggleTheme() {
    if(document.querySelector('link[href=""]')) {
        document.getElementById('slider').checked = true;
        document.querySelector('link[href=""]').href = 'dark.css';
    }else if(document.querySelector('link[href="dark.css"]')){
        document.getElementById('slider').checked = false;
        document.querySelector('link[href="dark.css"]').href = '';
    }
}


/* contact form */
document.querySelector('.submit-button').addEventListener('mouseenter', () => {
    document.querySelector('.submit-button').classList.add('hover');
});

document.querySelector('.submit-button').addEventListener('mouseleave', () => {
    document.querySelector('.submit-button').classList.remove('hover');
});