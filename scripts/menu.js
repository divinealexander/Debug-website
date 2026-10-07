// LEX-DRIVE mobile navigation
// Works on every page using the same .menu-btn and .nav-links classes.

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuButton || !navLinks) {
        return;
    }

    const icon = menuButton.querySelector("i");

    function closeMenu() {
        navLinks.classList.remove("show-menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }

    function openMenu() {
        navLinks.classList.add("show-menu");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation menu");

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }
    }

    menuButton.setAttribute("type", "button");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");

    menuButton.addEventListener("click", function () {
        if (navLinks.classList.contains("show-menu")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu after selecting a page.
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    // Close the mobile menu when returning to desktop width.
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});
