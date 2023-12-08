document.addEventListener('DOMContentLoaded', function () {
    // Fetch book categories from books.json
    fetch('books.json')
      .then(response => response.json())
      .then(data => {
        // Extract unique categories
        const categories = [...new Set(data.map(book => book.category))];
  
        // Dynamically populate dropdown menu with categories
        const dropdownMenu = document.querySelector('.dropdown-menu');
        categories.forEach(category => {
          const categoryItem = document.createElement('a');
          categoryItem.classList.add('dropdown-item');
          categoryItem.href = '#';
          categoryItem.textContent = category;
          dropdownMenu.appendChild(categoryItem);
  
          // Add click event listener to each category item
          categoryItem.addEventListener('click', () => {
            // Filter books based on the selected category
            const filteredBooks = data.filter(book => book.category === category);
            displayBooks(filteredBooks);
          });
        });
      })
      .catch(error => console.error('Error fetching categories:', error));
  
    // Function to display book cards
    function displayBooks(books) {
      const bookList = document.getElementById('bookList');
      bookList.innerHTML = ''; // Clear previous content
  
      books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
  
        const img = document.createElement('img');
        img.src = book.cover_image;
        img.classList.add('card-img-top');
        img.alt = book.title;
  
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = book.title;
  
        const author = document.createElement('p');
        author.classList.add('card-text');
        author.textContent = `Author: ${book.author}`;
  
        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = `Price: $${book.price.toFixed(2)}`;
  
        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('btn', 'btn-primary', 'mr-2');
        addToCartBtn.textContent = 'Add to Cart';
  
        const viewCartBtn = document.createElement('button');
        viewCartBtn.classList.add('btn', 'btn-success');
        viewCartBtn.textContent = 'View Cart';
  
        // Add event listener for "Add to Cart" button
        addToCartBtn.addEventListener('click', () => {
          // Implement your logic to add the book to the cart
          console.log(`Added ${book.title} to the cart`);
        });
  
        // Add event listener for "View Cart" button
        viewCartBtn.addEventListener('click', () => {
          // Implement your logic to navigate to the cart page
          window.location.href = 'cart.html';
        });
  
        // Append elements to card
        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCartBtn);
        cardBody.appendChild(viewCartBtn);
  
        card.appendChild(img);
        card.appendChild(cardBody);
  
        bookList.appendChild(card);
      });
    }
  });
  