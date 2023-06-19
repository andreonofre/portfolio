
// Icon Navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

// Active Llink Scroll Sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        };
    })

    let header = querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove Toogle Navbar quando clicar no link
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// EFEITO SCROOL

ScrollReveal({ 
    
    // reset: true,
    distance: "80px",
    duration: 2000,
    deley: 200,

});

ScrollReveal().reveal(".home-content, .sobre-content", { origin: "top" });

ScrollReveal().reveal(".home-img, .hobby-container, .portfolio-box, .contact form", { origin: "bottom" });

ScrollReveal().reveal(".home-content h1, .sobre-img", { origin: "left" });

ScrollReveal().reveal(".home-content p, .sobre-content", { origin: "right" });

// TEXTO AUTO

const typed = new Typed(".text-auto", {
    strings:  ["Desenvolvedor..."],
    typeSpeed: 100,
    // backSpeed: 100,
    backDelay: 1000,
    loop: true,
})