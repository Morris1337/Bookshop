
const API_KEY = "AIzaSyCI1HC6K97kM3xGytOBR8bOoy0P9Q3UoxM";
const MAX_RESULTS = 6;
const PRINT_TYPE = "books";
let userCategory = "Architecture";
const API_URL =`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&maxResults=${MAX_RESULTS}&printType=${PRINT_TYPE}`

const bookElemSection = document.querySelector(".guud-section")

function fetchDataAndUpdateCategory(userCategory) {
    fetch(`${API_URL}&q=+subject:${userCategory}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        // console.log(data)
        data.items.forEach((name) =>{
            createBookInfoElem(name.volumeInfo)
        })
    })
}

const categoryElem = document.querySelectorAll(".category-li");

let isClicked = false;

categoryElem.forEach((element) =>{
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
})

fetchDataAndUpdateCategory(userCategory)

function createBookInfoElem(data){
    // console.log(data)
    const bookInfoBlock = document.createElement("div")
    bookInfoBlock.classList.add("guud-list")

    const imgSection = document.createElement("div")
    const img = document.createElement("img")
    img.src = data.imageLinks.thumbnail;
    imgSection.appendChild(img)
    bookElemSection.appendChild(imgSection)

    const otherInfo = document.createElement("div")
    otherInfo.classList.add("guud-info")
    const author = document.createElement("p")
    author.textContent = data.authors;
    const title = document.createElement("h2")
    // const averageRating = document.createElement("")
    // const ratingCouts = document.createElement("")
    const description = document.createElement("p")
    const price = document.createElement("h3")
    const button = document.createElement("button")

    otherInfo.appendChild(author)
    otherInfo.appendChild(title)
    // otherInfo.appendChild(averageRating)
    // otherInfo.appendChild(ratingCouts)
    otherInfo.appendChild(description)
    otherInfo.appendChild(price)
    otherInfo.appendChild(button)
    bookElemSection.appendChild(bookInfoBlock)
    bookElemSection.appendChild(otherInfo)
}

