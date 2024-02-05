document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".heroSection", {
        opacity: 2,
        duration: 1,
        y: 50,
        ease: "power2.out"
    });

    gsap.from(".bigTitle", {
        opacity: 0,
        duration: 3,
        y: 50,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".description, .btnDetails", {
        opacity: 0,
        duration: 3,
        y: 50,
        delay: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from(".sales", {
        opacity: 0,
        duration: 3,
        y: 50,
        delay: 1.5,
        ease: "power2.out"
    }); 

    gsap.from(".mainContainer", {
        opacity: 0,
        duration: 3,
        y: 100,
        delay: 1,
        ease: "power2.out"
    });
});
