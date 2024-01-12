export function scrollDown(){
    const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
        header.style.position = "fixed";
        header.style.backgroundColor = "#FFFFFF";
        header.style.zIndex = "30";
    }else{
        header.style.position = "";
    }
});
}