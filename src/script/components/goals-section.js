class GoalsSection extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode:'open'})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        .goals-section {
  padding: 3rem;
}

.title-goals {
  text-align: center;
  font-size: 1.8rem;
  font-family: Poppins, Quicksand, sans-serif;
  color: #ec3f35;
  border-bottom: 5px solid #f8ee16;
}

.desc {
  display: flex;
  padding: 3rem;
}

.vision {
  width: 100%;
  background-color: #ec3f35;
  margin-inline-end: 6rem;
  padding: 2rem;
  border-radius: 2rem;
  color: white;
}

.vision h3 {
  text-align: center;
  font-family: Poppins, Quicksand, sans-serif;
  font-size: 1.8rem;
  margin-block-start: 0;
}

.vision p {
  text-align: center;
  line-height: 1.5rem;
  font-family: Quicksand, Poppins, sans-serif;
  font-size: 1.2rem;
}

.mission {
  width: 100%;
  background-color: #ec3f35;
  padding: 2rem;
  border-radius: 2rem;
  color: white;
}

.mission h3 {
  text-align: center;
  font-family: Poppins, Quicksand, sans-serif;
  font-size: 1.8rem;
  margin-block-start: 0;
}

.mission ol li {
  font-family: Quicksand, Poppins, sans-serif;
  font-size: 1.2rem;
  line-height: 1.5rem;
}
        </style>
        <div class="goals-section">
          <div class="vision-mission">
            <div class="title-goals">
              <h2>Visi & Misi</h2>
            </div>
            <div class="desc">
              <div class="vision">
                <h3>Visi</h3>
                <p>
                  Menjadikan eskstrakulikuler PMR sebagai tampat generasi muda
                  Palang Merah untuk mengembangkan karakter, jiwa sosial, dan
                  jiwa kemanusiaan serta berakhlak mulia dengan memegang teguh
                  prinsip-prinsip dasar Palang Merah dan bulan sabit merah
                  Internasiaonal serta Tri Bakti Palang Merah.
                </p>
              </div>
              <div class="mission">
                <h3>Misi</h3>
                <ol type="1">
                  <li>Menguatkan dan mengembangkan organisasi</li>
                  <li>Meningkatkan dan mengembangkan kualitas SDM</li>
                  <li>
                    Menanamkan rasa kesukarelaan dan jiwa sosial kemanusiaan
                  </li>
                  <li>
                    Mengembangkan kegiatan Kepalang Merahan yang bermasyarakat
                  </li>
                  <li>Meningkatkan dan mengembangkan jejaring kerjasama</li>
                  <li>
                    Melaksanakan pengamalan Prinsip-Prinsip Dasar Gerakan Palang
                    Merah Remaja dan Bulan Sabit Merah Internasional
                  </li>
                  <li>
                    Mengembangkan komunikasi, informasi dan edukasi Kepalang
                    Merahan
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        `
    }
}

customElements.define('goals-section', GoalsSection)