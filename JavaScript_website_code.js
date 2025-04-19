// Smooth Scroll Fade-In Animation
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Google Translate Integration
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
(function() {
  var gtScript = document.createElement('script');
  gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(gtScript);
})();

// Language Search Filter
document.getElementById('languageSearch').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const options = document.querySelectorAll('.language-selector select option');
  options.forEach(function(option) {
    const text = option.textContent.toLowerCase();
    option.style.display = text.includes(filter) ? 'block' : 'none';
  });
});

// Language Selector Switch
function translateLanguage(lang) {
  const gtFrame = document.querySelector('iframe.goog-te-menu-frame');
  if (!gtFrame) {
    alert('Please wait a moment while the translator loads...');
    return;
  }
  const innerDoc = gtFrame.contentDocument || gtFrame.contentWindow.document;
  const langElements = innerDoc.querySelectorAll('.goog-te-menu2-item span.text');
  langElements.forEach(function(element) {
    if (element.innerHTML.toLowerCase().includes(lang.toLowerCase())) {
      element.click();
    }
  });
}

// Dynamic Video Gallery
const videoList = [
  { id: '1X4lHjGJ-9g', title: 'What is Biomedical Engineering?' },
  { id: 'kXYiU_JCYtU', title: 'The Future of Neuroscience and Medicine' },
  { id: 'LRqS3PjcxZc', title: 'How Bioelectronics Will Transform Healthcare' }
];

function loadVideos() {
  const gallery = document.getElementById('videoGallery');
  videoList.forEach(video => {
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-container';

    const title = document.createElement('h3');
    title.textContent = video.title;
    title.style.textAlign = 'center';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.title = video.title;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    videoWrapper.appendChild(title);
    videoWrapper.appendChild(iframe);
    gallery.appendChild(videoWrapper);
  });
}

// Load videos after page is fully loaded
window.onload = function() {
  loadVideos();
};
