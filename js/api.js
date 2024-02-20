import {bookInCart} from "./shopCart.js"
import {storage} from "./localStorage.js"

const API_KEY = "AIzaSyCI1HC6K97kM3xGytOBR8bOoy0P9Q3UoxM";
const MAX_RESULTS = 6;
let startIndex = 0;
const PRINT_TYPE = "books";
let userCategory = "Architecture";
const API_URL =`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&maxResults=${MAX_RESULTS}&printType=${PRINT_TYPE}`

const bookElemSection = document.querySelector(".guud-section")
const loadMoreBtn = document.querySelector(".more-books-block")

let currentCategory = "";

loadMoreBtn.addEventListener("click", ()=>{
    fetchDataAndUpdateCategory(userCategory)
    startIndex += MAX_RESULTS;
})

const FAVORIT_BOOKS = "Books";
// let bookCount = "";
let storageData = JSON.parse(localStorage.getItem(FAVORIT_BOOKS))
if(!storageData){
    storageData = [];
    // bookCount = 0;
}


function fetchDataAndUpdateCategory(userCategory) {
    if(userCategory !== currentCategory){
        bookElemSection.innerHTML = "";
        currentCategory = userCategory;
        startIndex = 0;
    }
    fetch(`${API_URL}&q=+subject:${userCategory}&startIndex=${startIndex}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.items.forEach((name) =>{
            createBookInfoElem(name)
        })
    })
    .catch((error) =>{
        console.error("Ошибка при загрузке книг:", error)
    })
}

const categoryElem = document.querySelectorAll(".category-li");

let isClicked = false;

categoryElem.forEach((element) =>{
    if (element.dataset.key === userCategory) {
        element.classList.add("clicked");
    }else{
        element.addEventListener("click", () =>{
            isClicked = true;
            const selectedCategory = element.dataset.key;
            console.log(selectedCategory, userCategory);
            userCategory = selectedCategory
            fetchDataAndUpdateCategory(userCategory)
            categoryElem.forEach((el) =>{
                el.classList.remove("clicked")
            });
            element.classList.add("clicked")
           })
    }
})

fetchDataAndUpdateCategory(userCategory)

function createBookInfoElem(data){
    // console.log(data)
    const bookInfoBlock = document.createElement("div")
    bookInfoBlock.classList.add("guud-list")

    const imgSection = document.createElement("div")
    const img = document.createElement("img")
    if (data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail) {
        img.src = data.volumeInfo.imageLinks.thumbnail;
    } else {
        img.alt = "Book-image";
    }
    imgSection.appendChild(img)
    bookElemSection.appendChild(imgSection)

    const otherInfo = document.createElement("div")
    otherInfo.classList.add("guud-info")
    const author = document.createElement("p")
    author.textContent = data.volumeInfo.authors;
    const title = document.createElement("h2")
    title.textContent = data.volumeInfo.title;

    const statisticBlock = document.createElement("div")
    statisticBlock.classList.add("info-statistic")
    const ratingCouts = document.createElement("p")
    const averageRatingBlock = document.createElement("div")
    console.log(data.volumeInfo.averageRating)
    const aRating = data.volumeInfo.averageRating;
    if(data.volumeInfo.averageRating){
        for(let i = 0; i < aRating; i++){
            const starImg = document.createElement("img");
            starImg.classList.add("infoImg");
            starImg.src ="../img/ICON/StarGold.png";
            averageRatingBlock.appendChild(starImg);
        }
        ratingCouts.textContent = data.volumeInfo.ratingsCount + " review";
    }else{
        averageRatingBlock.innerHTML = "";
    }
    statisticBlock.appendChild(averageRatingBlock);
    statisticBlock.appendChild(ratingCouts);


    const description = document.createElement("p")
    description.textContent = data.volumeInfo.description
    const lines = 3;
    description.style.display = '-webkit-box';
    description.style.WebkitBoxOrient = 'vertical';
    description.style.overflow = 'hidden';
    description.style.webkitLineClamp = lines;
    const priceBlock = document.createElement("div")
    priceBlock.classList.add("infoPrice")
    const valute = document.createElement("h3")
    const price = document.createElement("h3")
    if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.amount){
        price.textContent = data.saleInfo.retailPrice.amount;
        if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.currencyCode === "EUR"){
            valute.textContent = "€";
        }else if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.currencyCode === "USD"){
            valute.textContent = "$";
        }else if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.currencyCode === "RUB")
            valute.textContent = "₽";
    }else{
        price.innerHTML = "";
    }
    const button = document.createElement("button")
    let isInCart = false;
    button.textContent = "BUY NOW"

    storageData.forEach((value) => {
        if(value === data.id){
            isInCart = true;
            button.textContent = "IN THE CART"
        }
     })

     console.log(storageData, data.id)
    button.classList.add("btnBuy");
    button.addEventListener("click", () =>{
        bookInCart(isInCart);
        isInCart = !isInCart;
        storage(data.id, isInCart)
        if(isInCart){
            button.textContent = "IN THE CART"
        }else{
            button.textContent = "BUY NOW"
        }
    })

    otherInfo.appendChild(author)
    otherInfo.appendChild(title)
    otherInfo.appendChild(statisticBlock)
    otherInfo.appendChild(description)
    otherInfo.appendChild(priceBlock)
    priceBlock.appendChild(valute)
    priceBlock.appendChild(price)
    otherInfo.appendChild(button)
    bookInfoBlock.appendChild(imgSection)
    bookInfoBlock.appendChild(otherInfo)
    bookElemSection.appendChild(bookInfoBlock)
    setTimeout(() =>{
        bookInfoBlock.classList.add("active")
    }, 10)
}




