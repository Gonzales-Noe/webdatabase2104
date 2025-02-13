// Smooth scrolling for anchor links
document.querySelectorAll('.nav-link a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for the caret-down icon
function smoothScrollTo(selector) {
    document.querySelector(selector).addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

smoothScrollTo('.textbox a', '#welcome1');
smoothScrollTo('.welcome a', '#file');

// Back to top Functionality
document.addEventListener("DOMContentLoaded", function () {
    var topButton = document.querySelector('.back-to-top a');

    topButton.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('html, body').scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Scroll to contacts and authors on icon click
document.querySelector('.fa-address-book').addEventListener('click', function () {
    document.querySelector('.footer').scrollIntoView({
        behavior: 'smooth'
    });
});

// Prev and Next Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");

    window.addEventListener("scroll", function () {

        var distanceToBottom = document.documentElement.offsetHeight - (window.scrollY + window.innerHeight);

        var threshold = 200;

        if (distanceToBottom <= threshold) {
            prevButton.style.display = "inline-block";
            nextButton.style.display = "inline-block";

        } else {
            prevButton.style.display = "none";
            nextButton.style.display = "none";
        }
    });
});
