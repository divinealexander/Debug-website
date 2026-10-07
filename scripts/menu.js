const menuButton =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle(
            "show-menu"
        );


        menuButton.innerHTML =
            navLinks.classList.contains(
                "show-menu"
            )

            ? '<i class="fa-solid fa-xmark"></i>'

            : '<i class="fa-solid fa-bars"></i>';

    }
);