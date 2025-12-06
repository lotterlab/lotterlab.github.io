// News data - update this file to add new news items
const newsData = [
  {
    date: "Nov 2025",
    title: "Two papers published in the latest issue of Radiology: Artificial Intelligence",
    description: 'Read more about our work on <a href="https://pubs.rsna.org/doi/10.1148/ryai.250369" target="_blank" class="text-decoration-none">FDA pathways for AI-enabled medical devices</a> and the <a href="https://pubs.rsna.org/doi/full/10.1148/ryai.240861" target="_blank" class="text-decoration-none">impact of acquisition parameters on AI and radiologist performance</a>.'
  },
  {
    date: "Oct 2025", 
    title: "Four papers accepted for presentation at ML4H 2025",
    description: 'Read about this research and more <a href="research.html" style="text-decoration: none;">here</a>.'
  },
  {
    date: "Sept 2025",
    title: "New R01 awarded to support our work in spatial biology", 
    description: "We're excited to advance AI methods for spatial proteomics and transcriptomics data."
  }
];

// Function to render news items
function renderNews() {
  const newsContainer = document.getElementById('news-container');
  if (!newsContainer) return;

  let newsHTML = '';
  newsData.forEach(item => {
    newsHTML += `
      <div class="mb-3">
        <h6 class="mb-1"><strong>${item.date}</strong> – ${item.title}</h6>
        <p class="mb-0 small text-muted">${item.description}</p>
      </div>
    `;
  });
  
  newsContainer.innerHTML = newsHTML;
}

// Load news when page loads
document.addEventListener('DOMContentLoaded', renderNews);
