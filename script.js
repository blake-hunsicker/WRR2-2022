// Load videos based on viewport width

// const w = window.matchMedia("(max-width: 600px)");
// const videos = document.querySelectorAll('video');

window.addEventListener('resize', setVideoSize);
window.addEventListener('DOMContentLoaded', setVideoSize);

function setVideoSize() {
  const w = window.matchMedia("(max-width: 600px)");
  const videos = document.querySelectorAll('video');

  if (w.matches) {
    let i = 0;
  
    for (i; i < videos.length; i++) {
  
      const existingSource = videos[i].querySelector('source');
      
      existingSource ? existingSource.remove() : null;
  
      const source = document.createElement('source');
      source.setAttribute('type', 'video/mp4');
      source.setAttribute('src', `assets/landing-page/mobile-video${i}.mp4`);
      videos[i].prepend(source);
    }

    console.log('Videos loaded for small screens');

  } else {
  
    let i = 0;
  
    for (i; i < videos.length; i++) {

      const existingSource = videos[i].querySelector('source');
      
      existingSource ? existingSource.remove() : null;
  
      const source = document.createElement('source');
      source.setAttribute('type', 'video/mp4');
      source.setAttribute('src', `assets/landing-page/desktop-video${i}.mp4`);
      videos[i].appendChild(source);
    }
  
    console.log('Videos loaded for large screens');
  }
}

// if (w.matches) {
//   let i = 0;

//   for (i; i < videos.length; i++) {

//     // videos[i].querySelector('source').remove();

//     const source = document.createElement('source');
//     source.setAttribute('type', 'video/mp4');
//     source.setAttribute('src', `assets/landing-page/mobile-video${i}.mp4`);
//     videos[i].prepend(source);
//   }
// } else {

//   let i = 0;

//   for (i; i < videos.length; i++) {

//     const source = document.createElement('source');
//     source.setAttribute('type', 'video/mp4');
//     source.setAttribute('src', `assets/videos/desktop-video${i}.mp4`);
//     videos[i].appendChild(source);
//   }

//   console.log('You are on a large screen, all good');
// }

// Autoshow video video

function startIntro() {
  const body = document.querySelector('main');
  body.classList.remove('freeze');

  const adamsVideo = document.querySelector('#adams-video');
  adamsVideo.scrollIntoView({behavior: 'smooth'});
  adamsVideo.querySelector('video').play();
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



// Autoshow video video

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

      // if ( videoClientRect <= ( (windowHeight) - (videoHeight*.4) ) && videoClientRect >= ( 0 - (videoHeight*.4) ) ) {
      //   thisVideoEl.classList.add('appear');
      // } else {
      //   thisVideoEl.classList.remove('appear');
      // }

    }
  }
}

// Open modal
function openModal(pageUrl) {

  // Load page into iFrame
  const modalSiteContainer = document.querySelector('.modal-iframe');
  modalSiteContainer.setAttribute('src',pageUrl);

  // Open modal
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hidden');

  const body = document.querySelector('body');
  body.classList.toggle('freeze');

  // // Show loading message
  // if (document.readyState === 'complete') {
  //   // The page is fully loaded
  //   console.log('Loaded')
  // } else {
  //   // Show loading message
  // }
  
};

// Close modal
function closeModal() {
  
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hidden');

  const body = document.querySelector('body');
  body.classList.toggle('freeze');
  
};


// Flip cards on hover

const bioCardsList = document.querySelectorAll('.bio-card');

let i = 0;

for (i; i < bioCardsList.length; i++) {
  const bioCard = bioCardsList[i];

  bioCard.addEventListener("mouseenter", function() {
    const bioCardBack = bioCard.querySelector('.bio-card-back');
    bioCardBack.classList.remove('hidden');

    const bioCardFront = bioCard.querySelector('.bio-card-front');
    bioCardFront.classList.add('hidden');
  });
  bioCard.addEventListener("mouseleave", function() {
    const bioCardBack = bioCard.querySelector('.bio-card-back');
    bioCardBack.classList.add('hidden');

    const bioCardFront = bioCard.querySelector('.bio-card-front');
    bioCardFront.classList.remove('hidden');
  });
}

function flipCard() {
  
}