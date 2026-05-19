// MOBILE MENU TOGGLE
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "rgba(0,0,0,0.45)";
    }
});


// SMOOTH FADE-IN ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// GALLERY IMAGE CLICK EFFECT
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.classList.add("popup");

        popup.innerHTML = `
            <div class="popup-content">
                <img src="${img.src}">
            </div>
        `;

        document.body.appendChild(popup);

        popup.addEventListener("click", () => {
            popup.remove();
        });

    });

});


// AUTO SCROLL TO TOP BUTTON
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});