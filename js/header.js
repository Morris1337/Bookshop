export function scrollDown(){
    const header = document.querySelector("header");
    const shopStyle = document.querySelector(".shop");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
        header.style.position = "fixed";
        header.style.backgroundColor = "#FFFFFF";
        header.style.zIndex = "30";
        shopStyle.style.bottom = "35px"
        shopStyle.style.right = "152px"
    }else{
        header.style.position = "";
        shopStyle.style.bottom = ""
        shopStyle.style.top = "68px"
        shopStyle.style.right = "152px"
    }
});
}