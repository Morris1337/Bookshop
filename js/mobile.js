const mobileMenuIcon = document.querySelector(".mobile-menu-icon")
const mobileMenunBlock = document.querySelector(".mobile-menu-block")

export function category(){
    const category = document.querySelector(".category")

    category.addEventListener("click", () => {
        category.classList.toggle("active")
    })

    mobileMenuIcon.addEventListener("click", () => {
        mobileMenunBlock.classList.toggle("open")
    })
}



