class BidangSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .bidang-section {
  position: relative;
  background-image: url('background-pmr.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;
  height: 100%;
  overflow: hidden;
}

.bidang-section::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.425);
  z-index: 1;
}

.tagline {
  display: flex;
}

.tagline h2 {
  max-width: 1000px;
  position: relative;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 6rem 6rem 0 6rem;
  color: rgb(255, 255, 255);
  z-index: 2;
  font-size: 2.2rem;
}


.content-section {
  position: relative;
  display: grid;
  justify-items: center;
  justify-content: center;
  padding-block: 6rem 6rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
  gap: 4rem;
  z-index: 9999;
  height: 100%;
}

.card {
  position: relative;
  display: grid;
  text-align: center;
  justify-items: center;
  align-self: start;
  height: 380px;
}

.card-img {
  height: 250px;
  border-radius: 1.5rem;
  padding: 1.5rem;
  background-color: #ec3f35;
  transition:
    box-shadow 0.5s ease-in-out,
    transform 0.5s ease-in;
  animation: HoverEffect 5s infinite;
  cursor: pointer;
}

.card img {
  margin: auto;
  border-radius: 1.5rem;
  width: 280px;
}

.card-capt {
  display: none; /* Mulai dengan menyembunyikan elemen */
  max-height: 0;
  position: absolute;
  max-width: 300px;
  background-color: white;
  justify-content: center;
  border-radius: 1.5rem;
  padding: 1rem;
  bottom: 0;
  top: 8rem;
  transition: all 0.3s ease-out;
  overflow: hidden;
}


.card-capt.expand {
  display: block;
  max-height: 200px;
  animation: slideDown 200ms linear;
}

.card-capt p {
  margin-block-end: 0;
}
.card-capt h3 {
  margin-block-start: 0.5rem;
}

.card a {
  color: #ec3f35;
}

@keyframes HoverEffect {
  0%,
  80%,
  100% {
    box-shadow: none;
    transform: scale(1);
  }
  20%,
  60% {
    box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.815);
    transform: scale(1.02);
  }
}

@keyframes arrowDown {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
  }
}

#arrow-down{
  color: white;
  font-size: 2rem;
  padding: 1.2rem;
  animation: arrowDown 2s infinite;
  cursor: pointer;
}

.card-img.no-animation {
  animation: none;
}

@keyframes slideDown {
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

#arrow-up {
  transform: rotate(180deg);
  font-size: 2rem;
  cursor: pointer;
}
        </style>

        <div class="bidang-section">
          <div class="tagline">
            <h2>
              "Dengan berbagai bidang yang seru dan menyenangkan untuk di ikuti"
            </h2>
          </div>
          <div class="content-section">
            <div id="PP-card" class="card">
              <div id="PP-img" class="card-img">
                <img
                  src="PP.jpeg"
                  style="animation-delay: 0s"
                  alt="pertolongan pertama"
                />
                <span id="arrow-down" class="material-symbols-outlined" data-content="PP-capt" data-img="PP-img">
                  keyboard_arrow_down
                </span>
              </div>
              <div id="PP-capt" class="card-capt">
                <h3>Pertolongan Pertama</h3>
                <p>
                  Bidang Pertolongan Pertama (PP) dalam Palang Merah Remaja
                  memberikan pengetahuan dasar tentang penanganan
                  cedera dan bantuan medis. <a href="#">baca selengkapnya</a>
                </p>
                <span id="arrow-up" class="material-symbols-outlined" data-content="PP-capt" data-img="PP-img">
                  keyboard_arrow_down
                </span>
              </div>
            </div>
            <div id="PTD-card" class="card">
              <div id="PTD-img" class="card-img">
                <img
                  src="PTD.jpeg"
                  style="animation-delay: 1s"
                  alt="pertolongan tandu darurat"
                />
                <span id="arrow-down" class="material-symbols-outlined" data-content="PTD-capt" data-img="PTD-img">
                  keyboard_arrow_down
                </span>
              </div>
              <div id="PTD-capt" class="card-capt">
                <h3>Pertolongan Tandu Darurat</h3>
                <p>
                  Bidang Pertolongan Tandu Darurat (PTD) dalam Palang Merah
                  Remaja berfokus pada pembuatan tandu untuk
                  korban kecelakaan atau bencana. <a href="#">baca selengkapnya</a>
                </p>
                <span id="arrow-up" class="material-symbols-outlined" data-content="PTD-capt" data-img="PTD-img">
                  keyboard_arrow_down
                  </span>
              </div>
            </div>
            <div id="PK-card" class="card">
              <div id="PK-img" class="card-img">
                <img
                  src="PK.jpeg"
                  style="animation-delay: 2s"
                  alt="perawatan keluarga"
                />
                <span id="arrow-down" class="material-symbols-outlined" data-content="PK-capt" data-img="PK-img">
                  keyboard_arrow_down
                </span>
              </div>
              <div id="PK-capt" class="card-capt">
                <h3>Perawatan Keluarga</h3>
                <p>
                  Perawatan Keluarga (PK) dalam Palang Merah Remaja mengajarkan
                  keterampilan dasar dalam menjaga kesehatan dan merawat anggota
                  keluarga. <a href="#">baca selengkapnya</a>
                </p>
                <span id="arrow-up" class="material-symbols-outlined" data-content="PK-capt" data-img="PK-img">
                  keyboard_arrow_down
                  </span>
              </div>
            </div>
          </div>
        </div>
        `;

    document.querySelectorAll('#arrow-down').forEach(function (arrow) {
      arrow.addEventListener('click', function () {
        const contentId = arrow.getAttribute('data-content');
        const content = document.getElementById(contentId);
        content.classList.toggle('expand');

        const imgContentId = arrow.getAttribute('data-img');
        const imgContent = document.getElementById(imgContentId);
        imgContent.classList.toggle('no-animation');
      });
    });

    document.querySelectorAll('#arrow-up').forEach(function (arrow) {
      arrow.addEventListener('click', function () {
        const contentId = arrow.getAttribute('data-content');
        const content = document.getElementById(contentId);
        content.classList.remove('expand');

        const imgContentId = arrow.getAttribute('data-img');
        const imgContent = document.getElementById(imgContentId);
        imgContent.classList.remove('no-animation');
      });
    });
  }
}

customElements.define('bidang-section', BidangSection);
