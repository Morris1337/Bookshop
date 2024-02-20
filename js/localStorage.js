export function storage(bookId, isInCart){
    const FAVORIT_BOOKS = "Books";

let storageData = JSON.parse(localStorage.getItem(FAVORIT_BOOKS))

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