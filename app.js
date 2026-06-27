// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.1)";
    } else {
        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "none";
    }
});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#D89C4A";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// Add To Cart
// ===============================

let cart = 0;

const buttons = document.querySelectorAll(".product-card button");

const bagIcon = document.querySelector(".bi-bag");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        bagIcon.setAttribute("data-count", cart);

        alert("Item added to cart!");

    });

});


// ===============================
// Wishlist
// ===============================

const heart = document.querySelector(".bi-heart");

let liked = false;

heart.addEventListener("click", () => {

    liked = !liked;

    if (liked) {

        heart.style.color = "red";

    } else {

        heart.style.color = "";

    }

});


// ===============================
// Search Icon
// ===============================

const search = document.querySelector(".bi-search");

search.addEventListener("click", () => {

    let value = prompt("Search your favorite jewelry:");

    if (value !== null && value !== "") {

        alert("Searching for: " + value);

    }

});


// ===============================
// Newsletter Validation
// ===============================

const form = document.querySelector(".newsletter form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = form.querySelector("input");

    if(email.value == ""){

        alert("Please enter your email.");

    }

    else{

        alert("Thank you for subscribing!");

        email.value = "";

    }

});


// ===============================
// Contact Button
// ===============================

const sendBtn = document.querySelector("#contact button");

sendBtn.addEventListener("click", () => {

    alert("Thank you! Your message has been sent.");

});


// ===============================
// Product Hover Effect
// ===============================

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "1s";

    observer.observe(section);

});