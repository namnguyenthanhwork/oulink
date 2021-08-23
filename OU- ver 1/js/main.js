// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "15",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#cc3a3b",
    width: "30",
    blending_mode: "normal"
}];
// preload page
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// scroll smooth
window.addEventListener("scroll", () => {
    const showBtn = document.querySelector(".scroll-up-btn");
    this.scrollY > 150 ?
        showBtn.classList.add("show") :
        showBtn.classList.remove("show");
})

const links = document.querySelectorAll(".scroll-up-btn a");
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

/*---------------------- Progress bar --------------*/
function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
    progressBarScroll();
};

/* ---------------- navigation menu ------------------- */
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavBtn = document.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
        navMenu.classList.toggle("open");
        bodyScrollingToggle();
    }

    function hideNavMenu() {
        navMenu.classList.toggle("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }
    // acttach an event handler to document
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("link-item"))
            // make sure event.target.hash has a value before overridding default behavior
            if (event.target.hash !== "") {
                // prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                /* uncomment if u use nav 1 section - comment line from 339 (comment if u scroll link with nav)*/
                // // deactivate existing active 'section'
                // document.querySelector(".section.active").classList.add("hide");
                // document.querySelector(".section.active").classList.remove("active");
                // // activate new 'section'
                // document.querySelector(hash).classList.add("active");
                // document.querySelector(hash).classList.remove("hide");

                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item' is contained withing the navigation menu
                if (navMenu.classList.contains("open")) {
                    // activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    // hide navigation menu
                    hideNavMenu();
                } else {
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            // activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
    })
})();

function bodyScrollingToggle() {
    document.body.classList.toggle("hidden-scrolling");
}
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu-inner a[href*=' + sectionId + ']').classList.add('active', 'inner-shadow');
        } else {
            document.querySelector('.nav-menu-inner a[href*=' + sectionId + ']').classList.remove('active', 'inner-shadow');
            document.querySelector('.nav-menu-inner a[href*=' + sectionId + ']').classList.add('outer-shadow');
        }
    })
}
window.addEventListener('scroll', scrollActive);