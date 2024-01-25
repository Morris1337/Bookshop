


export function bookInCart(){
    
let isClicked = true
let bookCount = 0;

    const cart = document.querySelector(".shop")
    const btnBuy = document.querySelectorAll(".btnBuy")

    const bookCountInCart = document.createElement("p")
    cart.appendChild(bookCountInCart)
    
    btnBuy.forEach((btn) =>{
        btn.addEventListener("click", ()=>{
            if(isClicked){
                cart.classList.add("in")
                bookCountInCart.innerText = "";
                bookCount++;
                bookCountInCart.textContent = bookCount;
                btn.disable = true;
            }else{
                bookCount--;
                bookCountInCart.textContent = bookCount;
                if(bookCount === 0){
                    cart.classList.add("in")
                }
            }
        })
    })
}


