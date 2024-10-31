class OrganizationStructure extends HTMLElement {
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
        .organization-structure {
  background-color: #ec3f35;
  overflow: hidden;
}

.structure {
  padding: 3rem;
}

.h3-structure {
  text-align: center;
  color: white;
  font-family: Poppins, Quicksand, sans-serif;
  font-size: 1.8rem;
  border-bottom: 5px solid #f8ee16;
}

.slide {
  display: flex;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.organizer {
  display: flex;
  animation: 30s slide infinite linear;
}

.follow {
  margin-block: 3rem;
  flex-shrink: 0;
  text-align: center;
}
        </style>

        <div class="organization-structure">
          <div class="structure">
            <div class="h3-structure">
              <h2>Tim Pengurus</h2>
            </div>
            <div class="slide">
            <div class="organizer">
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
              <div class="follow">
              <h3>jabatan</h3>
                <img src="image/user.png" alt="#" width="250px">
                <figcaption>user name</figcaption>
              </div>
            </div>
          </div>
          </div>
        </div>
        `;

    let copy = this._shadowRoot.querySelector('.organizer').cloneNode(true);
    this._shadowRoot.querySelector('.slide').appendChild(copy);
  }
}

customElements.define('organization-structure', OrganizationStructure);
