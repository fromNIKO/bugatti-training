const sideBar = document.getElementById("sideBar");
const firstContainerInfo = document.getElementById("first-container");
const secondContainerInfo = document.getElementById("second-container");
const thirdContainerInfo = document.getElementById("third-container");
const fourthContainerInfo = document.getElementById("fourth-container");
const fifthContainerInfo = document.getElementById("fifth-container");
let lastScroll = 0;
let playOnce = true;

btn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
})


window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "-60px"
    }
    lastScroll = window.scrollY;
})

window.addEventListener("scroll", (e) => {

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
    if (scrollValue > 0.80) {
        firstContainerInfo.style.opacity = 1;
        firstContainerInfo.style.transform = "none";
        playOnce = "false"
        
        
    }
    
    if (scrollValue > 0.85) {
        secondContainerInfo.style.opacity = 1;
        secondContainerInfo.style.transform = "none";
        playOnce = "false"
    }
    
    if (scrollValue > 0.89) {
        thirdContainerInfo.style.opacity = 1;
        thirdContainerInfo.style.transform = "none";
        playOnce = "false"
    }
    
    if (scrollValue > 0.93) {
        fourthContainerInfo.style.opacity = 1;
        fourthContainerInfo.style.transform = "none";
        playOnce = "false"
    }
    
    if (scrollValue > 0.98) {
        fifthContainerInfo.style.opacity = 1;
        fifthContainerInfo.style.transform = "none";
        playOnce = "false"
    }
    console.log((window.scrollY + window.innerHeight) / document.body.offsetHeight);
});