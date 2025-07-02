window.addEventListener("DOMContentLoaded", () => {
  console.log("start");
});

window.addEventListener("DOMContentLoaded", () => {
  anim();
});

function anim() {
  gsap.defaults({
    ease: "power2.out",
  });

  gsap.set(".header", {
    height: "100vh",
  });

  gsap.set(".preview_img", {
    yPercent: 10,
    scale: 1.2,
  });

  const tlHeader = gsap.timeline({
    onComplete: () => {
      ScrollTrigger.refresh();
    },
  });

  tlHeader
    .from(".header_logo-img", {
      duration: 0.7,
      autoAlpha: 0,
      yPercent: -110,
      stagger: 0.2,
    })
    .to(".header", {
      duration: 0.8,
      height: "auto",
      delay: 0.3,
    })
    .to(
      ".header_logo",
      {
        duration: 0.8,
        scale: 1,
      },
      "<"
    )
    .from(
      ".preview_img",
      {
        autoAlpha: 0,
        duration: 1.3,
      },
      "<"
    )
    .from(
      ".hero_title",
      {
        autoAlpha: 0,
        duration: 1,
        yPercent: 50,
      },
      "-=0.7"
    )
    .from(
      ".hero_img",
      {
        autoAlpha: 0,
        duration: 1,
        yPercent: 50,
      },
      "<"
    );

  gsap.to(".preview_img", {
    yPercent: -10,
    scrollTrigger: {
      trigger: ".preview",
      start: "top 150px",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.set(".hero_title", {
    opacity: 1,
  });

  const tlTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_text",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
  });
  tlTitle
    .to(".hero_title", {
      opacity: 0.1,
    })
    .from(
      ".hero_text",
      {
        opacity: 0.1,
      },
      "<"
    );

  const tlHero = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_content-wrapper",
      start: "top top",
      end: "bottom+=100%",
      scrub: true,
      pin: true,
    },
  });
  tlHero
    .to(".hero_left", {
      bottom: 0,
    })
    .to(
      ".hero_img",
      {
        y: "-100vh",
      },
      "<"
    );

  const tlFeatures = gsap.timeline({
    scrollTrigger: {
      trigger: ".features-cards_wrapper",
      start: "top 70%",
      end: "top 40%",
      toggleActions: "play none reverse reset",
    },
  });

  tlFeatures
    .to(".features_title", {
      opacity: 0.1,
    })
    .from(".features_card", {
      opacity: 0,
      yPercent: "random([20, 40, 60])",
      stagger: {
        from: "center",
        each: 0.1,
      },
    });

  gsap.set(".section_journey", {
    background: "#100f0d",
  });
  gsap.set(".journey_title", {
    color: "#edeae2",
  });
  gsap.set(".journey_text", {
    color: "#edeae2",
  });

  const tlBgJourney = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_journey",
      start: "top 50%",
      end: "bottom 50%",
      toggleActions: "play reverse play reverse",
      duration: 0.7,
    },
  });

  tlBgJourney
    .to("body", {
      background: "#edeae2",
    })
    .to(
      ".section_journey",
      {
        background: "#edeae2",
      },
      "<"
    )
    .to(
      ".journey_title",
      {
        color: "#bb9930",
      },
      "<"
    )
    .to(
      ".journey_text",
      {
        color: "#100f0d",
      },
      "<"
    )
    .to(
      ".features-card_h3-bottom",
      {
        color: "#bb9930",
      },
      "<"
    );

  gsap.set(".parallax img", {
    scale: 1.3,
    yPercent: 15,
  });

  const parallaxes = document.querySelectorAll(".parallax");
  parallaxes.forEach((el) => {
    const img = el.querySelector("img");
    gsap.to(img, {
      yPercent: -15,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  });

  const tlDiscover = gsap.timeline({
    scrollTrigger: {
      trigger: ".discover_content-wrapper",
      start: "top 40%",
      end: "top 5%",
      scrub: true,
    },
  });

  tlDiscover
    .to(".discover_title", {
      opacity: 0.1,
    })
    .from(
      ".discover_text",
      {
        opacity: 0.1,
      },
      "<"
    );

  gsap.set(".section_slider", {
    background: "#100f0d",
  });
  gsap.set(".slider_title", {
    color: "#edeae2",
  });

  const tlBgSlider = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_slider",
      start: "top 50%",
      end: "bottom 50%",
      toggleActions: "play reverse play reverse",
      duration: 0.7,
    },
  });

  tlBgSlider
    .to("body", {
      background: "#edeae2",
    })
    .to(
      ".section_slider",
      {
        background: "#edeae2",
      },
      "<"
    )
    .to(
      ".slider_title",
      {
        color: "#bb9930",
      },
      "<"
    )
    .to(
      ".discover_text",
      {
        color: "#100f0d",
      },
      "<"
    )
    .to(
      ".footer_title",
      {
        color: "#bb9930",
      },
      "<"
    );

  const slides = gsap.utils.toArray(".slide");

  const tlSlider = gsap.to(".slider_wrapper", {
    xPercent: -100 * (slides.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider",
      start: "top top",
      end: `+=${slides.length * 1000}`,
      pin: true,
      scrub: true,
    },
  });

  gsap.set(".slide_text", { opacity: 0.1 });

  document.querySelectorAll(".slide_text").forEach((item, index) => {
    if (index != 0) {
      gsap.to(item, {
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "left 60%",
          end: "+=500",
          scrub: 1,
          containerAnimation: tlSlider,
        },
      });
    } else {
      gsap.to(item, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".slider",
          start: "top top",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  });

  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "90% bottom",
    },
  });
  tlFooter
    .from(".footer_row-end", {
      autoAlpha: 0,
    })
    .from(".footer_logo", {
      autoAlpha: 0,
      scale: 0.6,
      duration: 1,
      ease: "bounce.out",
    });
}


