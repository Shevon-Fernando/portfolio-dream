document.addEventListener("DOMContentLoaded", function () {
    function valueSetters() {
        // Set initial values
        gsap.set("#nav", { y: "-100%", opacity: 0 });
        gsap.set("#home span .child", { y: "100%" });
        gsap.set("#home .reveal", { y: "100%", opacity: 0 });
    }

    // Function to transform .reveal elements into .parent > .child structure
    function revealToSpan() {
        document.querySelectorAll(".reveal").forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            // Copy content from the .reveal element
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            // Clear original .reveal content and append the new structure
            elem.innerHTML = "";
            elem.appendChild(parent);
        });
    }

    // Function to animate homepage elements
    function animateHomepage() {
        // GSAP animation for the navigation bar
        gsap.to("#nav", { y: 0, opacity: 1, duration: 1, ease: Expo.easeInOut });

        // GSAP animation for text reveal under #home
        gsap.to("#home span .child", {
            y: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: Expo.easeInOut
        });

        gsap.to("#nav a", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1.5,
            ease: Expo.easeInOut
        });

    }

    // Set initial positions
    valueSetters();

    // Call the function to structure the elements
    revealToSpan();

    // GSAP animations for the lorder and green elements
    gsap.from("#lorder .child", {
        x: 70, // Move text from the right
        stagger: 0.5,
        opacity:0,
        duration: 1,
        ease: "Power3.easeInOut"
    });

    gsap.to("#lorder .parent .child", {
        y: "-100%", // Move text upwards
        duration: 2.5,
        delay:1,
        ease: "Power3.easeInOut"
    });

    gsap.to("#lorder", {
        height: 0, // Collapse the lorder element
        duration: 2.5,
        delay: 1.5,
        ease: "Power3.easeInOut"
    });

    gsap.to("#green", {
        height: "0%",
        top: 0, // Collapse the green element upwards
        duration: 2.5,
        delay: 1.5,
        ease: "Power3.easeInOut",
        onComplete: function () {
            animateHomepage(); // Trigger homepage animation after green element animation is complete
        }
    });

    gsap.to("#home .reveal", {
        y: 0,
        opacity: "100%",
        stagger: 0.05,
        duration: 2,
        delay:3,
        ease: Back.easeOut
    });
});
