
const API_KEY = "AIzaSyCI1HC6K97kM3xGytOBR8bOoy0P9Q3UoxM";
const MAX_RESULTS = 6;
const PRINT_TYPE = "books";
let userCategory = "Architecture";
const API_URL =`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&maxResults=${MAX_RESULTS}&printType=${PRINT_TYPE}`


function fetchDataAndUpdateCategory(userCategory) {
    fetch(`${API_URL}&q=+subject:${userCategory}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        createBookInfoElem(data)
    })
}

const categoryElem = document.querySelectorAll(".category-li");

let isClicked = false;

categoryElem.forEach((element) =>{
   element.addEventListener("click", () =>{
    isClicked = true;
    const selectedCategory = element.dataset.key;
    userCategory = selectedCategory
    fetchDataAndUpdateCategory(userCategory)
    categoryElem.forEach((el) =>{
        element.classList.add("clicked")
    });
    el.classList.remove("clicked")
   })
})

fetchDataAndUpdateCategory(userCategory)

function createBookInfoElem(data){
    const bookElemSection = document.querySelector(".guud-section")

    const imgSection = document.createElement("div")
    imgSection.classList.add("guud-list")
    const img = document.createElement("img")
    // img.src = data.items[0].volumeInfo.imageLinks.thumbail;
    imgSection.appendChild(img)
    bookElemSection.appendChild(imgSection)

    const otherInfoSection = document.createElement("div")
    otherInfoSection.classList.add("guud-info")
    const author = document.createElement("p")
    // author = data.items[0].volumeInfo.athors[0];
    const title = document.createElement("h2")
    // const averageRating = document.createElement("")
    // const ratingCouts = document.createElement("")
    const description = document.createElement("p")
    const price = document.createElement("h3")
    const button = document.createElement("button")

    otherInfoSection.appendChild(author)
    otherInfoSection.appendChild(title)
    // otherInfoSection.appendChild(averageRating)
    // otherInfoSection.appendChild(ratingCouts)
    otherInfoSection.appendChild(description)
    otherInfoSection.appendChild(price)
    otherInfoSection.appendChild(button)
    bookElemSection.appendChild(otherInfoSection)
    
    
}

