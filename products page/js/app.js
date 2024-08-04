const searchInput = document.getElementById("search-input")
const products = document.querySelectorAll(".products-item")
const buttons = document.querySelectorAll(".filter")
const priceButton = document.getElementById("search-price").querySelector("button")

const changeClass = (filter) => {
    buttons.forEach(button => {
        if(button.dataset.filter === filter) {
            button.classList.add("selected")
        }else{
            button.classList.remove("selected")
        }
    })
}

const searchHandler = event => {
    const searchValue = event.target.value.toLowerCase().trim()
    
    products.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase()
        
        if(productName.includes(searchValue)) {
            product.style.display = "block"
        } else {
            product.style.display = "none"
        }
    })
}

const filterHandler = (event) => {
    const events = event.target.dataset.filter
    changeClass(events)
    
    products.forEach((product) => {
        const category = product.dataset.category
        
        if(events === "all") {
            product.style.display = "block"
        }else {
            events === category ? product.style.display = "block" : product.style.display = "none"
        }
    })

}

const searchPriceHandler = event => {
    const searchNum = +event.target.parentElement.children[0].value
    
    products.forEach((product) => {
        const productNum = product.children[2].innerText.replace(/\D/g, '')
        const price = +productNum.split(" ")
        console.log(price)
        if(!searchNum) {
            product.style.display = "block"
        }else {
            searchNum === price ?  product.style.display = "block" :  product.style.display = "none"
        }
    })
}

window.addEventListener("load" , () => {
    buttons.forEach((button) => {
    button.addEventListener("click" , filterHandler)
})
searchInput.addEventListener("keyup" , searchHandler)
priceButton.addEventListener("click" , searchPriceHandler)
})

