class HeroSection extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
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
  position: relative;
  font-family: Poppins, sans-serif;
  font-size: 1.8rem;
  font-weight: lighter;
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
            <h1>Bersama Smetaone</h1>
          </div>
          <div class="hero-gallery">
            <img
              src="image1.jpeg"
              alt="foto bersama"
              class="gallery-image active"
            />
            <img
              src="image2.jpeg"
              alt="foto bersama"
              class="gallery-image"
            />
            <img
              src="image3.jpeg"
              alt="foto bersama"
              class="gallery-image"
            />
            <img
              src="image4.jpeg"
              alt="foto bersama"
              class="gallery-image"
            />
            <img
              src="image5.jpeg"
              alt="foto bersama"
              class="gallery-image"
            />
          </div>
        </div>
        `;

    const images = this._shadowRoot.querySelectorAll('.gallery-image');
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
