class SmetaoneSection extends HTMLElement {
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
        .smetaone-section {
  padding: 3rem;
  background-color: #ec3f35;
}

.smetaone-info {
  display: flex;
  background-color: white;
  padding: 3rem;
  border-radius: 3rem;
}

.smetaone-desc {
  margin-inline-start: 3rem;
}

.smetaone-desc h3 {
  font-size: 2rem;
  font-family: Poppins, Quicksand, sans-serif;
  margin: 0;
  color: #ec3f35;
}

.smetaone-desc p {
  font-size: 1.2rem;
  font-family: Quicksand, Poppins, sans-serif;
  line-height: 1.5rem;
}
        </style>
        <div class="smetaone-section">
          <div class="smetaone-info">
            <div class="smetaone-image">
              <img
                src="./src/assets/logo-smetaone.jpeg"
                alt="smetaone logo"
                width="250px"
              />
            </div>
            <div class="smetaone-desc">
              <h3>Apa itu Smetaone?</h3>
              <p>
                Smetaone adalah sebuah Organisasi
                <span style="color: #ec3f35;">"Palang Merah Remaja" </span>di Sekolah SMK Negeri
                1 Bandar Lampung. Smetaone hadir untuk memberikan edukasi,
                pelatihan, dan keterampilan dalam bidang kesehatan serta
                kemanusiaan. Sebagai bagian dari ekstrakurikuler, organisasi ini
                rutin mengadakan kegiatan sosial, seperti donor darah,
                penyuluhan kesehatan, dan lain sebagainya. Melalui semangat
                kepedulian dan kerja sama, Smetaone bertujuan untuk membentuk
                generasi muda yang tanggap, peduli, dan siap membantu sesama
                dalam keadaan darurat maupun situasi kemanusiaan lainnya.
              </p>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('smetaone-section', SmetaoneSection);
