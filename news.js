// News data - update this file to add new news items
const newsData = [
  {
    date: "Mar 2026",
    title: "New paper published in <em>npj Precision Oncology</em>",
    description: 'Our <a href="https://www.nature.com/articles/s41698-026-01314-3" target="_blank" class="text-decoration-none">new study</a> uses graph neural networks to model spatial tumor-immune interactions and identify prognostic cellular niches in non-small cell lung cancer.'
  },
{
    date: "Feb 2026",
    title: "Two papers accepted for presentation at MIDL 2026",
    description: 'Read more about our work on <a href="https://arxiv.org/abs/2604.10904" target="_blank" class="text-decoration-none">the impact of image reconstruction on AI fairness</a> and on <a href="https://arxiv.org/abs/2508.04955" target="_blank" class="text-decoration-none">AdvDINO</a>, a domain-adversarial self-supervised method for spatial proteomics.'
  },
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
