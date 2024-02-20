let bookCount = 0;
const cart = document.querySelector(".shop")
const bookCountInCart = document.querySelector("#cartItemCount")
bookCountInCart.textContent = bookCount;

export function bookInCart(isInCart){

    if(!isInCart){
        cart.classList.add("in")
        bookCount++;
    }
    else{
        if(bookCount > 0){
            bookCount--;
            if(bookCount === 0){
                cart.classList.remove("in")
            }
        }
    }
    bookCountInCart.textContent = bookCount;
}


