let bookCount = parseInt(localStorage.getItem("bookCount")) || 0;
const cart = document.querySelectorAll(".shop");
const bookCountInCart = document.querySelectorAll(".cartItemCount");
let cartIsUsed = true;

function updateBookCountInCart() {
    bookCountInCart.forEach((elem) => {
        elem.textContent = bookCount;
    });
}

updateBookCountInCart();

export function bookInCart(isInCart){
    if(!isInCart){
        bookCount++;
    } else {
        if(bookCount > 0){
            bookCount--;
        }
    }

    cart.forEach((elem) => {
        elem.classList.add("in");
    });

    updateBookCountInCart();
    
    bookCountInCart.forEach((elem) => {
        elem.textContent = bookCount;
    });

    localStorage.setItem("bookCount", bookCount.toString())

    if(bookCount === 0){
        cart.forEach((elem) => {
            elem.classList.remove("in");
        });
    }
}
