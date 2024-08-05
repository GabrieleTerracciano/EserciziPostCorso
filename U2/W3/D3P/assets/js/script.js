class BookCard {
    constructor(bookCover, bookName, price) {
        this.bookCover = bookCover;
        this.bookName = bookName;
        this.price = price;
    }

    populateCard(cardElement) {
        cardElement.querySelector('.card-img-top').src = this.bookCover;
        cardElement.querySelector('.card-title').textContent = this.bookName;
        cardElement.querySelector('.card-price').textContent = `€ ${this.price}`;

        const hideButton = cardElement.querySelector('.btn.btn-primary');
        hideButton.addEventListener('click', (e) => {
            e.preventDefault();
            cardElement.style.display = 'none';
        });

        const addToCartButton = cardElement.querySelector('.btn.btn-success');
        addToCartButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.addToCart();
        });
    }

    addToCart() {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        const item = {
            name: this.bookName,
            price: this.price
        };
        cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCart();
    }
}
async function fetchBooks() {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
    }
}

function populateCards(books) {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    books.forEach((bookData) => {
        const cardHtml = `
            <div class="col mb-4">
                <div class="card" style="width: 18rem;">
                    <img src="${bookData.img}" class="card-img-top" alt="${bookData.title}">
                    <div class="card-body">
                        <h5 class="card-title">${bookData.title}</h5>
                        <p class="card-text">Description</p>
                        <h6 class="card-price">€ ${bookData.price}</h6>
                        <a href="#" class="btn btn-primary">Scarta</a>
                        <a href="#" class="btn btn-success">Compra ora</a>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });

    document.querySelectorAll('.card').forEach((cardElement) => {
        const bookCard = new BookCard(
            cardElement.querySelector('.card-img-top').src,
            cardElement.querySelector('.card-title').textContent,
            parseFloat(cardElement.querySelector('.card-price').textContent.replace('€', '').trim())
        );
        bookCard.populateCard(cardElement);
    });

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    const cartItems = JSON.parse(localStorage.getItem('cart'));

    cartItems.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = '<span>' + item.name + ' - €' + item.price + '</span>' +
            '<button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(\'' + item.name.replace(/'/g, "\\'") + '\')">Rimuovi</button>';
        cartList.appendChild(listItem);
    });
}
function removeFromCart(itemName) {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems = cartItems.filter(function (item) {
        return item.name !== itemName;
    });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
};

document.addEventListener('DOMContentLoaded', function () {
    fetchBooks().then(function (data) {
        if (data) {
            populateCards(data);
        }
    });
});
