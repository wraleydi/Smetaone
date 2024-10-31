class HeaderApp extends HTMLElement {
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
        header {
        position: sticky;
  top: 0;
  z-index: 9999;
        }


           header .header-app {
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.5rem 2rem;
}

.navbar ul {
  display: flex;
  padding: 0;
  align-items: center;
  list-style: none;
  font-family: Quicksand, Roboto, sans-serif;
}

.navbar ul li {
  margin-inline: 0.8rem;
}

.navbar .item {
  text-decoration: none;
  padding: 0.5rem 1.8rem;
  color: black;
  font-size: 1.2rem;
  transition: ease-in-out 0.5s;
  border-radius: 1.5rem;
}

.navbar .item:hover {
  background-color: #ec3f35;
  border-radius: 1.5rem;
  color: white;
}

.btn-register button {
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 1rem;
  background-color: #ec3f35;
  color: white;
  font-size: 1.2rem;
  font-weight: bolder;
  transition: ease-in-out 0.5s;
  cursor: pointer;
}

.btn-register button:hover {
  box-shadow: 0 0 10px #ec3f35;
}

.navbar-item {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  gap: 1rem;
}

.navbar-item:has(> .navbar-down)::after {
  content: "";
  width: 5px;
  aspect-ratio: 1/1;
  display: inline-block;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(45deg);
}

.navbar .navbar-down {
  position: absolute;
  padding: 1rem;
  background-color: #ec3f35;
  color: white;
  box-shadow: 10px 10px 10px black;
  border-radius: 1rem;
  align-items: start;
  cursor: pointer;
  display: none;
  top: 100%;
}

.navbar-down.navbar-expand {
  display: block;
  animation: dropdown 200ms linear;
  z-index: 9999;
}

.navbar .navbar-down .item-down {
font-family: Roboto, Quicksand, sans-serif;
  padding: 0.8rem 1.2rem;
  margin-block: 0.8rem;
  border-radius: 2rem;
  transition: ease-in-out 0.5s;
  width: 100%;
  text-decoration: none;
  color: white;
}

.navbar .navbar-down .item-down:hover {
  background-color: white;
  color: #ec3f35;
  border-radius: 2rem;
}

.navbar .navbar-expand li {
  margin: 0;
  text-align: start;
}

@keyframes dropdown {
  from {
    transform: translateY(-0.5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
        </style>
        <header>
      <div class="header-app">
        <div class="title-smetaone">
          <img
            src="image/smetaone.jpeg"
            alt="smetaone-logo"
            width="100px"
          />
        </div>
        <nav>
          <div class="navbar">
            <ul>
              <li class="navbar-item"><a class="item" href="index.html">Beranda</a></li>
              <li class="navbar-item" style="font-size: 1.2rem; padding: 0.5rem 1.8rem; width: 85px; margin: 0;" >
                Bidang
                <ul class="navbar-down">
                  <li class="navbar-item"><a href="#" class="item-down">Pertolongan Pertama</a></li>
                  <li class="navbar-item"><a href="#" class="item-down">Pertolongan Tandu Darurat</a></li>
                  <li class="navbar-item"><a href="#" class="item-down">Perawatan Keluarga</a></li>
                </ul>
              </li>
              <li class="navbar-item"><a class="item" href="#">Tentang</a></li>
              <li class="navbar-item"><a class="item" href="#">Kontak</a></li>
            </ul>
          </div>
        </nav>
        <div class="btn-register">
          <button>Daftar</button>
        </div>
      </div>
    </header>
        `;

    const navItem = this._shadowRoot.querySelectorAll('.navbar-item');

    navItem.forEach((nav) => {
      const navDown = nav.querySelector('.navbar-down');

      if (navDown) {
        nav.addEventListener('mouseenter', () => {
          navDown.classList.add('navbar-expand');
        });
        nav.addEventListener('mouseleave', () => {
          navDown.classList.remove('navbar-expand');
        });
      }
    });
  }
}

customElements.define('header-app', HeaderApp);
