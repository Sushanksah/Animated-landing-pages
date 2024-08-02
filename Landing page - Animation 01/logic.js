gsap.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2
})

gsap.to("#text h1", {
    ease: Expo.easeInOut,
    top: 0,
    duration: 1.5,
    stagger: 2
})

gsap.to("#text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    top: "-100%",
    duration: 1.5,
    stagger: 2
})