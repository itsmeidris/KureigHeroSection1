document.addEventListener("DOMContentLoaded", function() {
    // Initial animations
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

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('sec2, .newPro,.coffeePics,.section-container, #promotion, .testimonials, footer').forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          end: 'bottom center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });
