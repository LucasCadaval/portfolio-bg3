document.addEventListener("DOMContentLoaded", function () {
    const combatImg = document.getElementById("combat-img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementById("close-btn");
  
    combatImg.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = combatImg.src;
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });  

  document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("carousel-track");
    const slides = track.querySelectorAll("img");
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    btnRight.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    btnLeft.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    window.addEventListener("resize", updateCarousel);
  });