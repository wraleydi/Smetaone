class OrganizationStructure extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
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

.title-structure {
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
  animation: 25s slide infinite linear;
}

.follow {
  margin-block: 3rem;
  flex-shrink: 0;
}
        </style>

        <div class="organization-structure">
          <div class="structure">
            <div class="title-structure">
              <h2>Tim Pengurus</h2>
            </div>
            <div class="slide">
            <div class="organizer">
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
              <div class="follow">
                <img src="user.png" alt="#" width="250px">
              </div>
            </div>
          </div>
          </div>
        </div>
        `;

        let copy = this._shadowRoot.querySelector('.organizer').cloneNode(true);
      this._shadowRoot.querySelector('.slide').appendChild(copy)
    }
}

customElements.define('organization-structure', OrganizationStructure)