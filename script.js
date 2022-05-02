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
/* Photo gallery */

// (function() {
//   var scroller = scrollama(),
//       selector = "div.figure, img, table, video, embed, iframe, .html-widget",
//       container = document.querySelector(".photo");

//   scroller.setup({"step": ".section, " + selector})
//     .onStepEnter(res => {
//       var el = res.element;
//       el.classList.add("is-active");
//       var ex = el;
//       if (el.classList.contains("section")) {
//         ex = el.querySelector(selector);
//         if (!ex) {
//           container.innerHTML = "";
//           return;
//         }
//       }
//       if (ex.nodeName === "img" && ex.parentNode.classList.contains("figure")) {
//         ex = ex.parentNode;
//       }
//       container.innerHTML = "";
//       container.append(ex.cloneNode(true));
//       var els = container.querySelectorAll("*[width]");
//       for (var i = 0; i < els.length; i++) {
//         els[i].removeAttribute('width');
//       }
//     })
//     .onStepExit(res => {
//       res.element.classList.remove("is-active");
//     });

//   window.addEventListener("resize", scroller.resize);
// })();
