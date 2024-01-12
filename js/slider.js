

export function slider(){
    const slideBtn = document.querySelectorAll(".ellipse-circle");
    const img = document.querySelectorAll(".banner-img");

    let currentIndex = 0;

    function changeImage (imageIndex){
        img.forEach((photo) => {
            photo.classList.remove("active")
        })
        img[imageIndex].classList.add("active")
        changeStyles()
    }
    changeImage(0)

    function changeStyles(){
        slideBtn.forEach((name, index) =>{
            if(index === currentIndex){
                name.classList.add("push")
            }else{
                name.classList.remove("push")
            }
        })
    }

    function changeBtns(){
        slideBtn.forEach((name, index) => {
            name.addEventListener("click", ()=>{
                currentIndex = index
                changeImage(index)
            })
        })
    }
    changeBtns()

    let intervalId = null;
    function autoSlide(){
        intervalId = setInterval(() =>{
            currentIndex = (currentIndex + 1) % img.length;
            changeImage(currentIndex);
        }, 5000);
    }
    autoSlide()
}