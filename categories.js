// scripts/categories.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch book categories from books.json
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const categoriesDropdown = document.querySelector('.dropdown-menu');
            const bookListContainer = document.getElementById('bookList');

            // Extract unique categories from the book data
            const uniqueCategories = [...new Set(data.map(book => book.category))];

            // Populate dropdown with categories
            uniqueCategories.forEach(category => {
                const categoryItem = document.createElement('a');
                categoryItem.classList.add('dropdown-item');
                categoryItem.href = '#';
                categoryItem.textContent = category;
                categoriesDropdown.appendChild(categoryItem);

                // Add click event to filter books based on the selected category
                categoryItem.addEventListener('click', function () {
                    filterBooksByCategory(data, category, bookListContainer);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching book categories:', error);
        });
});

function filterBooksByCategory(data, category, container) {
    // Filter books based on the selected category
    const filteredBooks = data.filter(book => book.category === category);

    // Display the filtered books in the specified container
    container.innerHTML = ''; // Clear previous content

    if (filteredBooks.length === 0) {
        container.innerHTML = '<p>No books found in this category.</p>';
    } else {
        // Create and append HTML elements for each book
        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('card', 'mb-3');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.classList.add('card-text');
            author.textContent = 'Author: ' + book.author;

            const price = document.createElement('p');
            price.classList.add('card-text');
            price.textContent = 'Price: $' + book.price.toFixed(2);

            cardBody.appendChild(title);
            cardBody.appendChild(author);
            cardBody.appendChild(price);

            bookCard.appendChild(cardBody);
            container.appendChild(bookCard);
        });
    }
}
