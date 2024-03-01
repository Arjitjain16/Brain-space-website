function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco()



gsap.to(".page1>video",{
    filter : "blur(20px)",
    transform : "scaleX(0.79)",
    scrollTrigger : {
        trigger : ".page1",
        scroller : ".main",
        start : "top 0",
        end : "top -50%",
        scrub : true,
    }
})

document.addEventListener("mousemove" , (e) =>{
    gsap.to(".cursor",{
        top : e.y,
        left : e.x,
        
    })
})

let h4 = document.querySelector(".nav-part2")
h4.addEventListener("mouseenter" , (e) =>{
    gsap.to(".cursor",{
        transform : "scale(2)"
    })
    console.log("enter")
})
h4.addEventListener("mouseleave" , (e) =>{
    gsap.to(".cursor",{
        transform : "scale(1)"
    })
})

let cursor = document.querySelector(".cursor")
// let buttons = document.querySelectorAll("button")
// buttons.addEventListener("mouseenter",()=>{
//     console.log("button")
// })

gsap.to(".nav-part2",{
    display : "none",
    y : -70,
    scrollTrigger:{
        trigger : ".nav-part2",
        scroller : ".main",
        start : "top 0",
        end : "top -10%" ,
        scrub : true
    }

})

gsap.to("nav i",{
    display : "block",
    y : 10,
    scrollTrigger:{
        trigger : "nav i",
        scroller : ".main",
        start : "top 0",
        end : "top -10%" ,
        scrub : true
    }

})

let box = document.querySelector(".left1 .box")
box.addEventListener("mouseenter",function(){
    gsap.to(".left1 .box",{
        transform : "scale(1.1)",
        duration : 1

    })
})
box.addEventListener("mouseleave",function(){
    gsap.to(".left1 .box",{
        transform : "scale(1)",
        duration : 1

    })
})

gsap.to(".box img",{
    transform: "translateY(-50%) translateX(69%)",
    duration: 10,
    repeat: -1,
    ease: "none"
})

let box3 = document.querySelector(".box3")
box3.addEventListener("mouseenter", ()=>{
    gsap.to(".box3",{
        transform : "scale(1.1)",
        duration : 1
    })
})
box3.addEventListener("mouseleave", ()=>{
    gsap.to(".box3",{
        transform : "scale(1)",
        duration : 1
    })
})

let tl2 = gsap.timeline({
    scrollTrigger :{
        trigger : ".right1 h1",
        scroller : ".main",
        start : "top 100%",
        end : "top 30%",
        scrub : 1
    }
})
function page2Animation(){
    tl2.from(".right1>h1",{
        y : 40,
        opacity : 0,
        duration : 0.7,
        scale : 1.16
    })
    tl2.from(".right1 p",{
        y : 40,
        opacity : 0,
        duration : 0.4,
        scale : 1.16
    })
    tl2.from(".right1 button",{
        y : 40,
        opacity : 0,
        duration : 0.4,
        scale : 1.16
    })
    gsap.from(".box",{
        y : 40,
        opacity : 0,
        duration : 0.8,
        scale : 1.16,
        scrollTrigger :{
            trigger : ".box",
            scroller : ".main",
            start : "top 70%",
            end : "top -10%",
            scrub : true
        }
    })
}
page2Animation()


let tl1 = gsap.timeline({
    scrollTrigger :{
        trigger : ".box",
        scroller : ".main",
        start : "top 100%",
        end : "top -10%",
        scrub : 1
    }
})
tl1.from(".box",{
    y : 40,
    opacity : 0,
    duration : 1,
    scale : 1.16
})


let tl3 = gsap.timeline({
    scrollTrigger :{
        trigger : ".left3 h1",
        scroller : ".main",
        start : "top 90%",
        end : "top 30%",
        scrub : true
    }
})
function page3Animation(){
    tl3.from(".left3>h1",{
        y : 40,
        opacity : 0,
        duration : 0.7,
        scale : 1.16
    })
    tl3.from(".left3 p",{
        y : 40,
        opacity : 0,
        duration : 0.6,
        scale : 1.16
    })
    tl3.from(".left3 button",{
        y : 40,
        opacity : 0,
        duration : 0.6,
        scale : 1.16
    })
    gsap.from(".box3",{
        y : 40,
        opacity : 0,
        duration : 0.8,
        scale : 1.16,
        scrollTrigger :{
            trigger : ".box3",
            scroller : ".main",
            start : "top 100%",
            end : "top -10%",
            scrub : true
        }
    })
}
page3Animation()


let tl4 = gsap.timeline({
    scrollTrigger :{
        trigger : ".content4 h1",
        scroller : ".main",
        start : "top 90%",
        end : "top 30%",
        scrub : 2
    }
})
function page4Animation(){
    tl4.from(".content4>h1",{
        y : 40,
        opacity : 0,
        duration : 0.9,
        scale : 1.16
    })
    tl4.from(".content4>p",{
        y : 40,
        opacity : 0,
        duration : 0.9,
        scale : 1.16
    })
    tl4.from(".content4>button",{
        y : 40,
        opacity : 0,
        duration : 0.9,
        scale : 1.16
    })
    gsap.from(".img4>img",{
        y : 40,
        opacity : 0,
        duration : 1.5,
        scale : 1.22,
        scrollTrigger :{
            trigger : ".img4>img",
            scroller : ".main",
            start : "top 100%",
            end : "top -10%",
            scrub : 3
        }
    })
}
page4Animation()

let tl42 = gsap.timeline({
    scrollTrigger :{
        trigger : ".container41",
        scroller : ".main",
        start : "top 70%",
        end : "top -10%",
        scrub : 3
    }
})
function page4p2Animation(){
    tl42.from(".container41",{
        y : 50,
        opacity : 0,
        duration : 0.9,
        scale : 1.16
    })
    tl42.from(".container42",{
        y: 50,
        opacity : 0,
        duration : 0.9,
        scale : 1.16
    })
    

}
page4p2Animation()

let tl43 = gsap.timeline({
    scrollTrigger :{
        trigger : ".container43",
        scroller : ".main",
        start : "top 100%",
        end : "top -10%",
        scrub : 3
    }
})

tl43.from(".container43",{
    y: 50,
    opacity : 0,
    duration : 0.9,
    scale : 1.16
})
tl43.from(".container44",{
    y: 50,
    opacity : 0,
    duration : 0.9,
    scale : 1.16
})


function page4Containers(){
    let box41 = document.querySelector(".box41")
    box41.addEventListener("mouseenter",()=>{
        gsap.to(".box41",{
            transform : "scale(1.1)",
            duration : 1
        })
    })
    box41.addEventListener("mouseleave",()=>{
        gsap.to(".box41",{
            transform : "scale(1)",
            duration : 1
        })
    })

    let box42 = document.querySelector(".box42")
    box42.addEventListener("mouseenter",()=>{
        gsap.to(".box42",{
            transform : "scale(1.1)",
            duration : 1
        })
    })
    box42.addEventListener("mouseleave",()=>{
        gsap.to(".box42",{
            transform : "scale(1)",
            duration : 1
        })
    })
    let box43 = document.querySelector(".box43")
    box43.addEventListener("mouseenter",()=>{
        gsap.to(".box43",{
            transform : "scale(1.1)",
            duration : 1
        })
    })
    box43.addEventListener("mouseleave",()=>{
        gsap.to(".box43",{
            transform : "scale(1)",
            duration : 1
        })
    })
    let box44 = document.querySelector(".box44")
    box44.addEventListener("mouseenter",()=>{
        gsap.to(".box44",{
            transform : "scale(1.1)",
            duration : 1
        })
    })
    box44.addEventListener("mouseleave",()=>{
        gsap.to(".box44",{
            transform : "scale(1)",
            duration : 1
        })
    })
}
page4Containers()



var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5",
        scroller: ".main",
        start: "top 0%",
        end: "top -70%",
        scrub: 3,
        pin: true
    }
})
tl5.to(".page5-content", {
    transform: "translateX(-63%)",
}, "okay")
tl5.to(".page5 .slider-in", {
    x: 650,
}, "okay")

let tl52 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page5-info>h2",
        scroller : ".main",
        markers : true,
        start : "top 100%",
        end : "top 30%",
        scrub : true

    }
})
tl52.from(".page5-info>h2 , .page5-elems img",{
    y: 50,
    opacity : 0,
    duration : 0.8,
    scale : 1.16
})
tl52.from(".page5-info>p, .elems-cont",{
    y: 60,
    opacity : 0,
    duration : 0.9,
    scale : 1.16
})


let tl6 = gsap.timeline({
    scrollTrigger :{
        trigger : ".content6 h1",
        scroller : ".main",
        start : "top 100%",
        end : "top 30%",
        scrub  : true
    }
})
tl6.from(".content6 h1,.container6",{
    y : 50,
    opacity : 0,
    duration : 0.9,
    scale : 1.16,
})

let tl62 = gsap.timeline({
    scrollTrigger :{
        trigger :".b1",
        scroller : ".main",
        start : "top 100%",
        end : "top 10",
        scrub : true
    }
})

tl62.from(".b1",{
    scale : 1.34,
    opacity : 0,
})


let tl7 = gsap.timeline({
    scrollTrigger :{
        trigger : ".container7",
        scroller : ".main",
        start : "top 90%",
        end : "top 10",
        scrub : true
    }
})

tl7.from(".container7",{
    y: 50,
    opacity : 0,
    duration : 1.2,
    scale : 1.16
})


let tl72 = gsap.timeline({
    scrollTrigger :{
        trigger : ".container7",
        scroller : ".main",
        start : "top 40%",
        end : "top 30",
        scrub : true
    }
})
tl72.from(".part1-p2",{
    y: 50,
    opacity : 0,
    duration : 1,
    scale : 1.2
})
tl72.from(".part2-p2",{
    y: 50,
    opacity : 0,
    duration : 1.2,
    scale : 1.2
})

let tl8 = gsap.timeline({
    scrollTrigger :{
        trigger : ".page8_top",
        scroller : ".main",
        start : "top 100%",
        end : "top 30",
        scrub : true
    }
})
tl8.from(".page8_top",{
    y: 35,
    opacity : 0,
    duration : 0.3,
    scale : 1.13
})

let tl82 = gsap.timeline({
    scrollTrigger :{
        trigger :".icons_in",
        scroller : ".main",
        start : "top 70%",
        end : "end 30%",
        scrub : true

    }
})
tl82.from(".icons_in",{
    y : 50,
    opacity : 0,
    duration : 1.2,
    scale : 1.13,
})


let tl83 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page8_bot_left>h2,.page8_bot_right",
        scroller : ".main",
        start : "top 90%",
        end : "top 30%",
        scrub : true
    }
})
tl83.from(".page8_bot_left>h2",{
    y : 50,
    opacity : 0,
    scale : 1.13,
    duration : 0.8
})
let tl84 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page8_bot_right",
        scroller : ".main",
        start : "top 85%",
        end : "top 30%",
        scrub : true
    }
})

tl84.from(".page8_bot_right",{
    y : 50,
    opacity : 0,
    scale : 1.13,
    duration : 0.8
})

tl84.from(".page8_bot_left>p",{
    y : 60,
    opacity : 0,
    scale : 1.13,
    duration : 0.5
})
tl84.from(".page8_bot_left>h4",{
    y : 70,
    opacity : 0,
    scale : 1.13,
    duration : 0.3
})


let tl9 = gsap.timeline({
    scrollTrigger :{
        trigger : ".page9_cont",
        scroller : ".main",
        start : "top 82%",
        end : "top 50%",
        scrub : true
    }
})

tl9.from(".page9_cont",{
    y : 40,
    opacity : 0,
    scale : 1.13,
    duration : 1.4
})


let tl10 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page10_images",
        scroller : ".main",
        start : "top 90%",
        end : "top 30%",
        scrub : 2

    }
})
tl10.from(".page10_images",{
    y : 40,
    opacity : 0,
    scale : 1.13,
    duration : 0.7

})


let tl102 = gsap.timeline({
    scrollTrigger : {
        trigger : "#page10>p",
        scroller : ".main",
        start : "top 100%",
        end : "top 30%",
        scrub : 2

    }
})
tl102.from("#page10>p",{
    y : 40,
    opacity : 0,
    scale : 1.13,
    duration : 1

})

let tl11 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page11_left",
        scroller : ".main",
        start : "top 110%",
        end : "top 30%",
        scrub : 2

    }
})
tl11.from(".page11_left",{
    y : 40,
    opacity : 0,
    scale : 1.13,
    duration : 0.5

})