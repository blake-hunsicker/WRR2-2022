// Intro click
// function closeIntroModal() {

//   const modal = document.querySelector('.intro-modal');
//   modal.classList.toggle('hidden');

//   const body = document.querySelector('body');
//   body.classList.toggle('freeze');

// }

// Unmute videos
// function unmute() {
//   const localVideos = document.querySelectorAll('video');

//   let i = 0;

//   for (i; i < localVideos.length; i++) {
//     localVideos[i].removeAttribute("muted","");
//     localVideos[i].volume = 0.8;
//     console.log("Unmuted video ", i)
//     console.log("Video volume: ", localVideos[i].volume)
//   }
// }

// Autoshow video video
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {
  console.log('hi')
  if ( document.querySelectorAll('video').length > 0) {
    const windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video');

    for (let i = 0; i < videoEl.length; i++) {

      let thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      // Hide this because it autoplays videos
      // if ( videoClientRect <= ( (windowHeight) - (videoHeight*.15) ) && videoClientRect >= ( 0 - ( videoHeight*.85 ) ) ) {
      //   thisVideoEl.play();
      // } else {
      //   thisVideoEl.pause();
      // }

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.4) ) && videoClientRect >= ( 0 - (videoHeight*.4) ) ) {
        thisVideoEl.classList.add('appear');
      } else {
        thisVideoEl.classList.remove('appear');
      }

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