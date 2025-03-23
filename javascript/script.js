document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseenter", function () {
        document.querySelector(".dropdown-content").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        document.querySelector(".dropdown-content").style.display = "none";
    });
});
