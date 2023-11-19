
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const infoLink = document.querySelector('.info-link');
    infoLink.addEventListener('click', function(e) {
        e.preventDefault();
        const infoSection = document.querySelector(this.getAttribute('href'));
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Example of adding a hover effect on the chatbot container
    const chatbotContainer = document.querySelector('.chatbot-container');
    chatbotContainer.addEventListener('mouseover', () => {
        chatbotContainer.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
    });
    chatbotContainer.addEventListener('mouseout', () => {
        chatbotContainer.style.boxShadow = 'none';
    });

    // Additional dynamic or responsive functionalities can be added here.
});
