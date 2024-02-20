export function category(){
    const category = document.querySelector(".category")

    category.addEventListener("click", () => {
        category.classList.toggle("active")
    })
}