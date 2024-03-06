function renderCartFage() {
    let cards = getCards();
    let cart = document.getElementById("products");
    cart.innerHTML = '';
    cards.forEach((item, index) => {
        let card = document.createElement("div")
        card.classList.add("card")
    
        let imgContainer = document.createElement("div")
        imgContainer.classList.add("image-container")
    
        let image = document.createElement("img")
        image.setAttribute("src", item.image)
        imgContainer.appendChild(image)
        card.appendChild(imgContainer)
    
        let container = document.createElement("div")
        container.classList.add("container")
    
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = item.name.toUpperCase();
        container.appendChild(name);
    
        let price = document.createElement("h6");
        price.innerHTML = "<b>Price:</b> " + item.price;
        container.appendChild(price);
    
        let btn = document.createElement("button");
        btn.addEventListener('click', function() {
            cash(index);
        }); // Pass the product name
        btn.innerHTML = "Thanh toán"
        container.appendChild(btn)
      
        card.appendChild(container);
        cart.appendChild(card);
    });
}

function getCards() {
    let cards = localStorage.getItem('cards');
    return cards ? JSON.parse(cards) : [];
}

function cash(index) {
    alert('Xác nhận thanh toán');
    let cardToDeleted = getCards();
    cardToDeleted.splice(index, 1); // The splice() method adds new items to an array.
    localStorage.setItem('cards', JSON.stringify(cardToDeleted));
    renderCartFage();
}

//Init
renderCartFage();