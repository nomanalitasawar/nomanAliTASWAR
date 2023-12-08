// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch book data from books.json
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Display book cards on the page
            displayBookCards(data);
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
        });
});

function displayBookCards(books) {
    // Get the container where book cards will be displayed
    const bookContainer = document.getElementById('bookContainer');

    // Loop through each book in the data and create a card for it
    books.forEach(book => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        // Create an image element for the book cover
        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = book.cover_image;
        image.alt = book.title;

        // Create a card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create a title element
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = book.title;

        // Create an author element
        const author = document.createElement('p');
        author.classList.add('card-text');
        author.textContent = 'Author: ' + book.author;

        // Create a price element
        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = 'Price: $' + book.price.toFixed(2);

        // Append elements to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(price);

        // Append the image and card body to the card
        card.appendChild(image);
        card.appendChild(cardBody);

        // Append the card to the book container
        bookContainer.appendChild(card);
    });
}
