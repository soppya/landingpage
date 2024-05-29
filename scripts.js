document.addEventListener('DOMContentLoaded', () => {
    // Product Filters
    const filterButtons = document.querySelectorAll('#filters button');
    const products = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            products.forEach(product => {
                if (filter === 'all' || product.getAttribute('data-category') === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Dynamic Content Loading for Customer Reviews
    const reviews = [
        { name: 'Aditya', review: 'These shoes are the most comfortable I\'ve ever worn!', img: 'customer1.jpg' },
        { name: 'Yogiraj', review: 'I love the stylish design and the quality is top-notch.', img: 'customer2.jpg' }
        // Add more reviews as needed
    ];

    const reviewSection = document.querySelector('.reviews-container');

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        
        reviewElement.innerHTML = `
            <img src="${review.img}" alt="${review.name}">
            <blockquote>"${review.review}"</blockquote>
            <p>- ${review.name}</p>
        `;
        
        reviewSection.appendChild(reviewElement);
    });
});
