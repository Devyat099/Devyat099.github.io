
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const aboutLink1 = document.getElementById('about-link1');
const contactLink = document.getElementById('contact-link');


const homeContent = document.getElementById('home-content');
const aboutContent = document.getElementById('about-content');
const contactContent = document.getElementById('contact-content');


homeLink.addEventListener('click', () => {
  showContent(homeContent);
  hideContent(aboutContent, contactContent);
});

aboutLink.addEventListener('click', () => {
  showContent(aboutContent);
  hideContent(homeContent, contactContent);
});

aboutLink1.addEventListener('click', () => {
    showContent(aboutContent);
    hideContent(homeContent, contactContent);
  });
  

contactLink.addEventListener('click', () => {
  showContent(contactContent);
  hideContent(homeContent, aboutContent);
});


function showContent(content) {
  content.style.display = 'block';
}

function hideContent(...contents) {
  contents.forEach(content => {
    content.style.display = 'none';
  });
}