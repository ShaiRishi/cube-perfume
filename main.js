// SAFE DOM READY 
document.addEventListener("DOMContentLoaded", () => {

  // HAMBURGER
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
  }

  // GALLERY
  const images = [
    "photos/Group 1000004077.png",
    "photos/Group 1000004077.png",
    "photos/Group 1000004077.png"
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById("mainImage");
  const dots = document.querySelectorAll(".dot");
  const thumbs = document.querySelectorAll(".gallery__thumbs img");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function updateGallery(index) {
    if (!mainImage) return;

    currentIndex = index;

    mainImage.style.opacity = 0;
    setTimeout(() => {
      mainImage.src = images[currentIndex];
      mainImage.style.opacity = 1;
    }, 200);

    dots.forEach(d => d.classList.remove("active"));
    thumbs.forEach(t => t.classList.remove("active"));

    if (dots[currentIndex]) dots[currentIndex].classList.add("active");
    if (thumbs[currentIndex]) thumbs[currentIndex].classList.add("active");
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateGallery((currentIndex + 1) % images.length);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateGallery((currentIndex - 1 + images.length) % images.length);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      updateGallery(+dot.dataset.index);
    });
  });

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      updateGallery(+thumb.dataset.index);
    });
  });

  /* SUBSCRIPTION TOGGLE */

  const singleRadio = document.querySelector(
    'input[name="purchase"][value="single"]'
  );
  const doubleRadio = document.querySelector(
    'input[name="purchase"][value="double"]'
  );

  const singleContent = document.querySelector(".subscription__content.single");
  const doubleContent = document.querySelector(".subscription__content.double");

  function openSingle() {
    if (!singleRadio || !singleContent || !doubleContent) return;
    singleRadio.checked = true;
    singleContent.classList.add("open");
    doubleContent.classList.remove("open");
  }

  function openDouble() {
    if (!doubleRadio || !singleContent || !doubleContent) return;
    doubleRadio.checked = true;
    doubleContent.classList.add("open");
    singleContent.classList.remove("open");
  }

  if (singleRadio) {
    singleRadio.addEventListener("click", openSingle);
  }

  if (doubleRadio) {
    doubleRadio.addEventListener("click", openDouble);
  }

  
  openSingle();

  /*  ACCORDION */

  document.querySelectorAll(".accordion__header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion__item");
      const icon = header.querySelector(".accordion__icon");

      document.querySelectorAll(".accordion__item").forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const otherIcon = other.querySelector(".accordion__icon");
          if (otherIcon) otherIcon.textContent = "+";
        }
      });

      const isOpen = item.classList.contains("active");
      item.classList.toggle("active");
      icon.textContent = isOpen ? "+" : "−";
    });
  });

  /*COUNT UP */

  const statsSection = document.querySelector(".stats");

  if (statsSection) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll(".count").forEach(el => {
          let target = +el.dataset.target;
          let current = 0;
          const interval = setInterval(() => {
            current++;
            el.textContent = current;
            if (current === target) clearInterval(interval);
          }, 20);
        });
        observer.disconnect();
      }
    });

    observer.observe(statsSection);
  }

});




// Count up
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll(".count").forEach(el => {
      let t = +el.dataset.target, n = 0;
      const i = setInterval(() => {
        el.textContent = ++n;
        if (n === t) clearInterval(i);
      }, 20);
    });
    observer.disconnect();
  }
});
observer.observe(document.querySelector(".stats"));
//SUBSCRIPTION TOGGLE (FIXED) 

document.addEventListener("DOMContentLoaded", () => {

  const singleHeader = document.querySelector(
    'input[name="purchase"][value="single"]'
  ).closest(".subscription");

  const doubleHeader = document.querySelector(
    'input[name="purchase"][value="double"]'
  ).closest(".subscription");

  const singleRadio = singleHeader.querySelector("input");
  const doubleRadio = doubleHeader.querySelector("input");

  const singleContent = document.querySelector(".subscription__content.single");
  const doubleContent = document.querySelector(".subscription__content.double");

  function openSingle() {
    singleRadio.checked = true;
    singleContent.classList.add("open");
    doubleContent.classList.remove("open");
  }

  function openDouble() {
    doubleRadio.checked = true;
    doubleContent.classList.add("open");
    singleContent.classList.remove("open");
  }

  // Click handlers
  singleHeader.addEventListener("click", openSingle);
  doubleHeader.addEventListener("click", openDouble);

  // Initial state
  openSingle();

});
//FRAGRANCE SELECTION BORDER

document.querySelectorAll(".fragrance").forEach(card => {
  const radio = card.querySelector("input[type='radio']");

  card.addEventListener("click", () => {
    // Find the radio group name
    const groupName = radio.name;

    // Remove active from all in same group
    document
      .querySelectorAll(`input[name="${groupName}"]`)
      .forEach(input => {
        input.closest(".fragrance").classList.remove("active");
      });

    // Activate clicked one
    radio.checked = true;
    card.classList.add("active");
  });
});
document.querySelector(".footer__form").addEventListener("submit", () => {
  alert("Thanks for subscribing!");
});
//  MOBILE NAV TOGGLE 
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".hero__nav");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
