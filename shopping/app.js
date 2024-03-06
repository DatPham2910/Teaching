let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}


function initProductsLocalStrorage() {
    let productList = getProduct();
    if (!productList.length) {
        for (let i of products.data){
            let product = getProduct();
            product.push({
                name: i.name,
                price: i.price , 
                images: i.image
            })
            localStorage.setItem("products", JSON.stringify(product))
        }
    }
}

function initProduct() {
    for (let items of products.data) {

        let card = document.createElement("div")
        card.classList.add("card")
    
        let imgContainer = document.createElement("div")
        imgContainer.classList.add("image-container")
    
        let image = document.createElement("img")
        image.setAttribute("src", items.image)
        imgContainer.appendChild(image)
        card.appendChild(imgContainer)
    
        let container = document.createElement("div")
        container.classList.add("container")
    
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = items.name.toUpperCase();
        container.appendChild(name);
    
        let price = document.createElement("h6");
        price.innerHTML = "<b>Price:</b> " + items.price;
        container.appendChild(price);
    
        let btn = document.createElement("button");
        btn.addEventListener('click', function() {
            addToCart(items.name);
        }); // Pass the product name
        btn.innerHTML = "Thêm vào giỏ hàng"
        container.appendChild(btn)
      
        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }
}

function getProduct() {
    let products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}

function getCards() {
    let cards = localStorage.getItem('cards');
    return cards ? JSON.parse(cards) : [];
}

function addToCart(productName) {
    let cards = getCards(); // Retrieve the current cards

    // Find the product details based on the product name
    let productToAdd = products.data.find(product => product.name === productName);

    if (!productToAdd) {
        console.error("Product not found");
        return;
    }

    // Check if the product is already in the cards
    let existingProduct = cards.find(product => product.name === productName);
    if (existingProduct) {
        // Optionally, increment quantity here if you're tracking quantities
        alert("Sản phẩm đã có trong giỏ hàng!");
    } else {
        // Add the new product to the cards
        cards.push(productToAdd);
        localStorage.setItem('cards', JSON.stringify(cards)); // Save the updated cart
        alert("Đã thêm sản phẩm vào giỏ hàng!");
    }
}

// Initial render item
initProductsLocalStrorage();
initProduct();