export function scrollDown(){
    const header = document.querySelector("header");

    function updateHeaderClass(){
        if (window.innerWidth > 375) {
            if (window.scrollY <= 60) {
                header.classList.remove("scroll");
            } else {
                header.classList.add("scroll");
            }
        } else {
            header.classList.remove("scroll");
        }

    }

    window.addEventListener("scroll", updateHeaderClass);
    window.addEventListener("load", updateHeaderClass);
    window.addEventListener("resize", updateHeaderClass);
}