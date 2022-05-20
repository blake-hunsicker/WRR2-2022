// Size site around mobile browser search bars

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

// Load videos based on viewport width

window.addEventListener('resize', setVideoSize);
window.addEventListener('DOMContentLoaded', setVideoSize);

function setVideoSize() {
  const w = window.matchMedia("(max-width: 900px)");
  const videos = document.querySelectorAll('video');

  if (w.matches) {
    const siteHeroImage = document.querySelector('.site-hero-image');
    siteHeroImage.removeAttribute('src');
    siteHeroImage.setAttribute('src','../assets/landing-page/drill-down-mobile.png')
  }

  if (w.matches) {

    let i = 0;

    videos[0].setAttribute('poster','../assets/landing-page/trailerCoverPhoto.png');
    videos[1].setAttribute('poster', '../assets/landing-page/coop-poster-mobile.png');
  
    for (i; i < videos.length; i++) {
  
      const existingSource = videos[i].querySelector('source');
      
      existingSource ? existingSource.remove() : null;
  
      const source = document.createElement('source');
      source.setAttribute('type', 'video/mp4');
      source.setAttribute('src', `https://wrr2-2022.s3.amazonaws.com/mobile-video${i}.mp4`);
      videos[i].prepend(source);
    }

    console.log('Videos loaded for small screens');

  } else {
  
    let i = 0;

    videos[0].setAttribute('poster','../assets/landing-page/trailerCoverPhoto.png');
    videos[1].setAttribute('poster', '../assets/landing-page/coop-poster-desktop.png');
  
    for (i; i < videos.length; i++) {

      const existingSource = videos[i].querySelector('source');
      
      existingSource ? existingSource.remove() : null;
  
      const source = document.createElement('source');
      source.setAttribute('type', 'video/mp4');
      source.setAttribute('src', `https://wrr2-2022.s3.amazonaws.com/desktop-video${i}.mp4`);
      videos[i].appendChild(source);
    }
  
    console.log('Videos loaded for large screens');
  }
}

// Autoshow video

function startIntro() {
  const body = document.querySelector('main');
  body.classList.remove('freeze');

  const adamsVideo = document.querySelector('#adams-video');
  adamsVideo.scrollIntoView({behavior: 'smooth'});
  adamsVideo.querySelector('video').play();

  // const navbar = document.querySelector('nav');
  // navbar.classList.add('hidden')
}

// Auto add/hide image accompanying text animation

const mainContainer = document.querySelector('.homepage-container')
mainContainer.addEventListener('load', imageScroll);
mainContainer.addEventListener('scroll', imageScroll);

function imageScroll() {
  if (document.querySelectorAll('.image-and-text').length > 0) {
    const windowHeight = window.innerHeight;
    const imageAndTextSection = document.querySelectorAll('.image-and-text');

    for (let i = 0; i < imageAndTextSection.length; i++) {

      let thisImageAndTextSection = imageAndTextSection[i];
      let secHeight = thisImageAndTextSection.clientHeight;
      let secClientReq = thisImageAndTextSection.getBoundingClientRect().top;

      let quoteOne = thisImageAndTextSection.querySelector('.quote-1');
      let quoteTwo = thisImageAndTextSection.querySelector('.quote-2');
      let speaker = thisImageAndTextSection.querySelector('.speaker');
      // Hide this because it autoplays videos
      if ( secClientReq == 0 ) {
        quoteOne.classList.add('play');
        quoteTwo.classList.add('play');
        speaker.classList.add('play');
      } else {
        // quoteOne.classList.toggle('play');
        // quoteTwo.classList.toggle('play');
        // speaker.classList.toggle('play');
      }
    }
  }
}

// Autoshow video

mainContainer.addEventListener('load', videoScroll);
mainContainer.addEventListener('scroll', videoScroll);

function videoScroll() {
  if (document.querySelectorAll('video').length > 0) {
    const windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video');

    for (let i = 0; i < videoEl.length; i++) {

      let thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

          console.log(videoClientRect)

      // Hide this because it autoplays videos
      if ( videoClientRect == 0 ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }
}

// Expand and collapse sections

function openStories(category) {
  // console.log(category);
  const categoryContainer = document.querySelector(category);

  const allCategories = document.querySelectorAll('.category-container');

  let i;

  if (categoryContainer.classList.contains('expanded')) {

    // Collapse all sections
    for (i=0; i < allCategories.length; i++) {

      const categoryID = `#${allCategories[i].id}`;
      const categoryToJudge = document.querySelector(categoryID);

      categoryToJudge.querySelector('i').classList.remove('ph-caret-up-bold');
      categoryToJudge.querySelector('i').classList.add('ph-caret-down-bold');

      categoryToJudge.classList.add('collapsed');
      categoryToJudge.classList.remove('expanded');
      categoryToJudge.classList.remove('minimized');
      categoryToJudge.querySelector('.buttons').classList.add('hidden');

    }
    
  } else {

    // Expand category section

    categoryContainer.querySelector('i').classList.remove('ph-caret-down-bold');
    categoryContainer.querySelector('i').classList.add('ph-caret-up-bold');

    categoryContainer.classList.add('expanded');
    categoryContainer.classList.remove('minimized');
    categoryContainer.classList.remove('collapsed');

    // Minimize other sections
    for (i=0; i < allCategories.length; i++) {
      const categoryID = `#${allCategories[i].id}`;
      console.log(categoryID);
      const categoryToJudge = document.querySelector(categoryID)
      if (category != categoryID) {
        categoryToJudge.querySelector('i').classList.remove('ph-caret-up-bold');
        categoryToJudge.querySelector('i').classList.add('ph-caret-down-bold');

        categoryToJudge.classList.add('minimized');
        categoryToJudge.classList.remove('expanded');
        categoryToJudge.classList.remove('collapsed');
        categoryToJudge.querySelector('.buttons').classList.add('hidden');
      } else {
        categoryToJudge.classList.remove('minimized');
        categoryToJudge.classList.remove('collapsed');
      }
    }

    // Show story buttons
    const buttons = categoryContainer.querySelector('.buttons');
    buttons.classList.toggle('hidden');
  }
}

// Open modal
function openModal(pageUrl) {

  // Create iFrame
  const newIFrame = document.createElement('iframe');
  const modalSiteContainer = document.querySelector('.modal-iframe');
  newIFrame.setAttribute('src',pageUrl);
  newIFrame.setAttribute('scrolling','yes');
  newIFrame.classList.add('modal-iframe');

  // Add iFrame to div
  const modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapper.append(newIFrame);


  // Open modal
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hidden');

  const body = document.querySelector('body');
  body.classList.toggle('freeze');
  
};

// Close modal
function closeModal() {
  
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hidden');

  const body = document.querySelector('body');
  body.classList.toggle('freeze');

  const newIFrame = document.querySelector('iframe');
  newIFrame.remove();


  
};