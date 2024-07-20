let productFromLocalStorage = localStorage.getItem('productKey')
let pros = document.getElementById("Products");
let productsArray = [];
let productInCartPage = JSON.parse(productFromLocalStorage)

if (productFromLocalStorage) {
    addedProductToCartPage(productInCartPage)

}

function addedProductToCartPage(item) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            pros.innerHTML = ''
            let data = JSON.parse(xhttp.responseText);

            // Populate productsArray with fetched data
            productsArray = productInCartPage;

            for (let product of productInCartPage) {
                pros.innerHTML += `
                    <div id="product-item">
                        <img id="item-img" src="${product.image}" alt="${product.title}">
                        <div id="product-des" >
                            <h2 class="fs-5">${product.title}</h2>
                            <span id="price">$${product.price}</span>
                        </div>
                        <div id="product-actions">
                            <button class="add-to-cart" onclick="removeProduct(${product.id})">Remove from Cart</button>
                        </div>
                    </div>`;
            }
        }
    };
}




// function removeProduct(index) {
//  productsArray.splice(index,1)
//     localStorage.setItem('productKey',JSON.stringify(productsArray) )
//     addedProductToCartPage()
// }



function removeProduct(id) {
    // Find the index of the product with the given id in productsArray
    let index = productsArray.findIndex(product => product.id === id);
        
    productsArray.splice(index, 1);
        // Update localStorage with the modified productsArray
        localStorage.setItem('productKey', JSON.stringify(productsArray));
        // Update the productInCartPage variable
        productInCartPage = productsArray;
        // Re-render the products on the cart page
        addedProductToCartPage();
    }
