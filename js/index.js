// Your code goes here

const busImg = document.querySelector(`.intro img`);
busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.75)";
    busImg.style.transition = "all 1.5s";
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
})



const nav = document.querySelector(`.main-navigation`);

window.addEventListener("resize", (event) => {
    nav.style.backgroundColor = "lightcyan";
})

document.querySelectorAll(".nav-link").forEach(links => {
    
    links.addEventListener("click", (event) => {
        links.style.color = "blue";
        event.preventDefault();
    })
    
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
contentPick = document.querySelector(".content-pick");
firstDestination = document.querySelector(".destination");

contentPick.addEventListener("click", (event) => {
    event.target.style.backgroundColor= "red";
    event.stopPropagation()
})

destinations.forEach(event => {
    event.addEventListener("copy", (event) => {
        event.target.style.color = "blue";
    })
    firstDestination.addEventListener("click", (event) => {
        firstDestination.style.backgroundColor = "green";
        
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