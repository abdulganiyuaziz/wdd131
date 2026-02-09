/* ====== DOM Elements ====== */
const form = document.querySelector('#reviewForm');
const message = document.querySelector('#message');
const reviewsContainer = document.querySelector('#reviewsContainer');

/* ====== Data Storage ====== */
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

/* ====== Functions ====== */
function saveReviews() {
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

function displayReviews() {
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = '';

  reviews.forEach(review => {
    const card = document.createElement('div');
    card.classList.add('review-card');

    card.innerHTML = `
      <h3>${review.product}</h3>
      <p><strong>Rating:</strong> ${review.rating}/5</p>
      <p>${review.comment}</p>
      <p><em>Reviewed by ${review.name}</em></p>
    `;

    if (review.rating >= 4) {
      card.classList.add('highlight');
    }

    reviewsContainer.appendChild(card);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const review = {
    name: document.querySelector('#name').value,
    product: document.querySelector('#product').value,
    rating: Number(document.querySelector('#rating').value),
    comment: document.querySelector('#comment').value
  };

  reviews.push(review);
  saveReviews();

  message.textContent = `Thank you, ${review.name}! Your review has been saved.`;

  form.reset();
}

/* ====== Event Listeners ====== */
if (form) {
  form.addEventListener('submit', handleSubmit);
}

/* ====== Initialize ====== */
displayReviews();
