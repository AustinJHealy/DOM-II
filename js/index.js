// Your code goes here

const busImg = document.querySelector(`.intro img`);
busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.75)";
    busImg.style.transition = "all 1.5s";
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
})

const navAnchors = document.querySelectorAll(".nav-link");
navAnchors.forEach( links => {
    links.addEventListener("click", () => {
        links.style.color = "blue";
    })
})

const nav = document.querySelector(`.main-navigation`);
window.addEventListener("resize", () => {
    nav.style.backgroundColor = "lightcyan";
})

const images = document.querySelectorAll(`.img-content`);
images.forEach( img => {
    img.addEventListener("mouseover", () => {
    img.style.transform = "rotate(360deg)";
    img.style.transition = "all 2.0s";
    })
})

var destinationImage = document.querySelector(".content-destination img");

destinationImage.addEventListener("dblclick", () => {
    destinationImage.style.transform = "scale(2)";
    destinationImage.style.transition = "all 2s";
})
destinationImage.addEventListener("mouseleave", () => {
    destinationImage.style.transform = "scale(1)";
})

destinations = document.querySelectorAll(".destination");
destinations.forEach( dest => {
    dest.addEventListener("copy", () => {
        dest.style.color = "blue";
    })
})
window.addEventListener("keyup", () => {
    alert("OoF!");
})


window.addEventListener("offline", () => {
    var heading = document.querySelector(".logo-heading");
    heading.style.backgroundColor = "red";
})
window.addEventListener("online", () => {
    var heading = document.querySelector(".logo-heading");
    heading.style.backgroundColor = "lightgreen";

})