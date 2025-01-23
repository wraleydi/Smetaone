class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        overflow: hidden;
      }

      .hero-text {
        z-index: 10;
        color: white;
        text-align: center;
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        position: relative; 
      }

      .hero-text h1 {
        position: relative;
      }

      #typing {
        color: #ec3f35;
      }

      .hero-text h1::after {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 2px; 
        height: 100%;
        background-color: white;
        animation: cursor 0.8s infinite; 
      }

      @keyframes cursor {
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .hero-gallery {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .hero-gallery::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }

      .gallery-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }

      .gallery-image.active {
        opacity: 1;
      }
      </style>

      <div class="hero-section">
        <div class="hero-text">
    <h1>Bersama <span id="typing"></span></h1>
        </div>
        <div class="hero-gallery">
          <img
            src="heros/image1.jpeg"
            alt="foto bersama"
            class="gallery-image active"
          />
          <img
            src="heros/image2.jpeg"
            alt="foto bersama"
            class="gallery-image"
          />
          <img
            src="heros/image3.jpeg"
            alt="foto bersama"
            class="gallery-image"
          />
          <img
            src="heros/image4.jpeg"
            alt="foto bersama"
            class="gallery-image"
          />
          <img
            src="heros/image5.jpeg"
            alt="foto bersama"
            class="gallery-image"
          />
        </div>
      </div>
    `;

    const texts = ["Smetaone", "Peduli Untuk Kemanusiaan", "Kita Semua Bersaudara"];
  const typingElement = document.getElementById("typing");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingElement.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
    } else {
      typingElement.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
    }

    if (charIndex === currentText.length && !isDeleting) {
      isDeleting = true; 
      setTimeout(typeEffect, 2000); 
      return;
    }

    if (charIndex === 0 && isDeleting) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; 
    }

    const typingSpeed = isDeleting ? 50 : 80;
    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

    const images = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 0;

    function changeImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }

    setInterval(changeImage, 3000);
  }
}

customElements.define('hero-section', HeroSection);
