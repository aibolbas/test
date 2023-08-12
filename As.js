document.addEventListener('DOMContentLoaded', function (){
    let products = document.querySelector('.products')
    async function fetchproducts(url){
        let data = await fetch(url)
        let response = await data.json()
        for (let i = 0; i < response.length; i++) {
            products.innerHTML += `
            <div class="product">
                <img src="${response[i].image}" class="product-img" alt="">
                <h3 class="product-title">${response[i].title}</h3>
                <h4 class="product-category">${response[i].category.name}</h4>
                <p class="product-des">${response[i].description.length > 35 ? response[i].description.substring(0,35).concat('...') : response[i].description}</p>
                <div class="product-price-container">
                    <h3 class="product-price">${response[i].price}</h3>
                </div>
                <div class="rating">
                    <h3 class="rating">Rating ${response[i].rating.rate}</h3>
                </div>
            </div>
            `
        }
    }
    fetchproducts('https://fakestoreapi.com/products')
})