// ==========toggle style switcher=======
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () =>{
document.querySelector(".style-swithcer").classList.toggle("open");
})

// hide style swithcer on scrol
window.addEventListener("scroll", () =>{
if(document.querySelector(".style-swithcer").classList.contains("open"))
{
    document.querySelector(".style-swithcer").classList.remove("open");
}
})

// ==========thime color=======
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
alternateStyles.forEach((style) =>
{
if(color === style.getAttribute("title"))
{
style.removeAttribute("disabled")
}
else{
    style.setAttribute("disabled","true")
}
})
}
// ============thime lite and dark mode=================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
dayNight.querySelector("i").classList.toggle("fa-sun");
dayNight.querySelector("i").classList.toggle("fa-moon");
document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
if(document.body.classList.contains("dark"))
{
dayNight.querySelector("i").classList.add("fa-sun");
}
else{
    dayNight.querySelector("i").classList.add("fa-moon");
}
})