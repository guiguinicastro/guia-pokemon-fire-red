// Scroll suave
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Fade-in ao rolar
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});