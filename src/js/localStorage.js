import {bookInCart} from "./shopCart.js"
// import { bookCountInCartStyle } from "./bookCountInCartStyle.js";

const FAVORIT_BOOKS = "Books";
let storageData = JSON.parse(localStorage.getItem(FAVORIT_BOOKS))


export function storage(bookId, isInCart){

if(isInCart){
    if(storageData){
        storageData.push(bookId)
    }else{
        storageData = [bookId]
    }
    localStorage.setItem(FAVORIT_BOOKS, JSON.stringify(storageData))
}else{
    storageData = storageData.filter((elem) => elem !== bookId)
    localStorage.setItem(FAVORIT_BOOKS, JSON.stringify(storageData))
}
console.log(storageData)
return storageData
}

export function check(){
    if(!storageData){
        storageData = [];
    }
}



export function cartFunction(bookId, cart) {
    const button = document.createElement("button")
    button.textContent = "BUY NOW"
    let isInCart = false;
    if(storageData){
        if(storageData.includes(bookId)){
            isInCart = true;
            button.textContent = "IN THE CART"
            cart.classList.add("in");        
        }
    }

    console.log(storageData, bookId)
    button.classList.add("btnBuy");
    button.addEventListener("click", () =>{
        bookInCart(isInCart);
        isInCart = !isInCart;
        storage(bookId, isInCart)
        if(isInCart){
            button.textContent = "IN THE CART"
            cart.classList.add("in");
        }else{
            button.textContent = "BUY NOW"
        }
    })
    return button;
}

// let mas = [1, 2, 3, 4, 5]
// let num = 10;

//  mas.forEach((value) => {
//     if(value === num){
//         console.log("ok")
//     }else{
//         console.log("try again")
//     }
//  })