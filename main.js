
// ========================================= Import Product ====================================
let productsArray = [];
let cartDropMenu = document.querySelector('.cartdropdown')
let addToDivCart = document.querySelector('.cartdropdown div')
let cartDropDownBtn = document.querySelector('.titleProduct')
let cartIconSum = document.getElementById('notificication')
let menu = document.querySelector('.cartdropdownMenu')


function getProducts() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            let pros = document.getElementById("Products");
            pros.innerHTML = ''
            let data = JSON.parse(xhttp.responseText);

           
            // add product to the array 
            productsArray = data;

            for (let product of data) {
                pros.innerHTML += `
                    <div id="product-item">
                        <img id="item-img" class=" d-inline-block mx-auto " src="${product.image}" alt="${product.title}">
                        <div id="product-des" >
                            <h2 class="fs-5">${product.title}</h2>
                            <span id="price">$${product.price}</span>
                        </div>
                        <div id="product-actions">
                            <button class="add-to-cart" onclick="addedToCart(${product.id})">Add To Cart</button>
                        </div>
                    </div>`;
            }
        }
    };
}
getProducts();


// -------------------------------Create & Adding  and Functionality of Cart --------------------

menu.addEventListener('click', show)

// let cartArr=[]   قبل ما نعمل الخطوتين اللي تحت دول كنا مستخدمين الاراي دي فاضيه
 
// هنا عملنا الشرط ده عشان نتاكد اذا كان الكارد فيه حاجه قديمه ومتخزنه ولا لا لو كان فيه متخزن ف بنضيف علي اللي هنضيفه جديد لو مفيش يبقي هنضيف من جديد
let cartArr = localStorage.getItem('productKey') ?
JSON.parse(localStorage.getItem('productKey')) :[]

// هنا بنشوف لو اللوكال استورج فيها بردكت كانت متضافه ف احنا بنضيف اسم المنتجات الجديده في السله عشان تبقي معروضه
if(cartArr){
    cartArr.map((item)=>{
         addToDivCart.innerHTML += `<p> ${item.title}</p>`
         cartIconSum.style.display = 'block'
         cartIconSum.innerHTML = cartArr.length
    })
   
}

// هنا الفانكشن خاصه ب انها تعرض عدد البرودكت اللي فالسله من خلال الاي دي 
// وكمان بنضيف البرودكت جوا ال لوكال ستورج
// وكمان بنعرف عدد البرودكت اللي انضاف في السله او الكارت من خلال الرقم اللي جنب السله

function addedToCart(id) {

    checkAddtoCart() 

    // هنا استخدمنا فايند وليس فلتر عشان ترجعلنا اوبجكت
    let choosenItem = productsArray.find((product) => product.id === id)
    addToDivCart.innerHTML += `<p> ${choosenItem.title}</p>`


    // بنضيف جوا ال اراي الايتم بتاعتنا في شكل اوبجكت و بنحولها الي سترنج بعد كده نحطها في ال لوكال ستورج
    cartArr = [...cartArr, choosenItem]
    let addingByJson = JSON.stringify(cartArr)
    localStorage.setItem('productKey', addingByJson)


    // هنا عرفنا ال ليت عشان اللي جواها يكون شايف الفانكشن !!!!
    // وحطينا البرجراف عشان نعرف عدد البرودكت اللي ضفناها في السله
    let cartItems = document.querySelectorAll('.cartdropdown div p')
    cartIconSum.style.display = 'block'
    cartIconSum.innerHTML = cartItems.length
}



// هنا الفانكشن خاصه ب السله لما ادوس عليها تفتح ولما ادوس تاني تقفل ولو فاضيه خالص من البدايه مش هتفتح
function show() {
    if (addToDivCart.innerHTML != '') {
        if (cartDropMenu.style.display == 'block') {
            cartDropMenu.style.display = "none"
        }
        else {
            cartDropMenu.style.display = "block"

        }
    }
}


// -========================= Search =====================================================

function searchByTitle() {
    let searchProd = document.getElementById("searchInput").value.toLowerCase();
    let foundProd = [];
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].title.toLowerCase().includes(searchProd)) {
            foundProd.push(productsArray[i]);
            // console.log(productsArray)
        }
    }
    showResult(foundProd);
}

function showResult(products) {
    let searchResult = document.getElementById("searchResults");
    searchResult.innerHTML = '';
    if (products.length > 0) {
        for (let product of products) {
            searchResult.innerHTML += `
                <div id="search-result-item">
                    <img id="prodImg" src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <span>$${product.price}</span>
                    <button id="searchBtn1" onclick="saveItemData(${product.id})">Add To Cart</button>
                </div>`;
        }
    } else {
        searchResult.innerHTML = "<p>No products found.</p>";
    }
}






// ====================================== Catogery=========================================


document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        let category = button.textContent;
        showFilteredProducts(category); 
    });
});

function showFilteredProducts(category) {
    let filteredProducts;

    if (category === 'All') {
        filteredProducts = productsArray;
    } else {
        filteredProducts = productsArray.filter(product => product.category === category);
    }

    let pros = document.getElementById("Products");
    pros.innerHTML = '';

    filteredProducts.forEach(product => {
        pros.innerHTML += `
            <div id="product-item">
                <img id="item-img" class="w-50 h-50 d-inline-block mx-auto" src="${product.image}" alt="${product.title}">
                <h2 class="fs-5">${product.category}</h2>
                <div id="product-des">
                    <h2 class="fs-5">${product.title}</h2>
                    <span id="price">$${product.price}</span>
                </div>
                <div id="product-actions">
                    <button class="add-to-cart" onclick="addedToCart(${product.id})">Add To Cart</button>
                </div>
            </div>`;
    });
}



// ======================================== User Login Check ==================================


function checkAddtoCart() {


    if (localStorage.getItem('username')) {
        // window.location = 'home.html'
    }
    else {
        window.location = "registration.html"
    }

}