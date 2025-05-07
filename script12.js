document.addEventListener('DOMContentLoaded', () => {
  const recommendationForm = document.getElementById('recommendation-form');
  const recommendationList = document.getElementById('recommendation-list');

  // Add new recommendation
  recommendationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const description = document.getElementById('book-description').value;

    addRecommendation(title, author, description);
    recommendationForm.reset();
  });

  // Function to add recommendation to the DOM
  function addRecommendation(title, author, description) {
    const recommendation = document.createElement('div');
    recommendation.className = 'recommendation';

    recommendation.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Author:</strong> ${author}</p>
      <p>${description}</p>
      <div class="controls">
        <button class="upvote">Upvote</button>
        <button class="downvote">Downvote</button>
        <span class="votes">Votes: 0</span>
      </div>
    `;

    // Add voting functionality
    const upvoteBtn = recommendation.querySelector('.upvote');
    const downvoteBtn = recommendation.querySelector('.downvote');
    const votesSpan = recommendation.querySelector('.votes');
    let votes = 0;

    upvoteBtn.addEventListener('click', () => {
      votes++;
      votesSpan.textContent = `Votes: ${votes}`;
    });

    downvoteBtn.addEventListener('click', () => {
      votes--;
      votesSpan.textContent = `Votes: ${votes}`;
    });

    recommendationList.appendChild(recommendation);
  }
});
