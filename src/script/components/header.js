class HeaderApp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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
  padding: 0 2rem;
}

.navbar ul {
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  list-style: none;
  font-family: Quicksand, Roboto, sans-serif;
}

.navbar ul li {
  margin-inline: 0.8rem;
}

.navbar ul li .item {
position: relative;
  text-decoration: none;
  display: inline-block;
  padding: 1.5rem;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: ease-in-out 0.3s;
}

.navbar ul li .item::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: rgb(236, 29, 18);
  transition: width 0.3s ease, left 0.3s ease;
}

.navbar ul li .item:hover::before {
  width: 100%;
  left: 0;
}

.navbar ul li .item:hover {
  color: rgb(236, 29, 18);
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
  width: 8px;
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
  padding: 1rem;
  margin-block: 0.5rem;
  border-bottom: 2px solid white;
  border-radius: 1rem;
  transition: ease-in-out 0.5s;
  width: 100%;
  text-decoration: none;
  color: white;
}

.navbar .navbar-down .item-down:hover {
 background-color: white;
 color: #ec3f35;
 
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
            src="logos/smetaone.jpeg"
            alt="smetaone-logo"
            width="100px"
          />
        </div>
        <nav>
          <div class="navbar">
            <ul>
              <li class="navbar-item"><a class="item" href="index.html">Beranda</a></li>
              <li class="navbar-item" style="font-size: 1.2rem; font-weight: 500; padding: 0.5rem 1rem;  margin: 0;" >
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

    const navItem = document.querySelectorAll('.navbar-item');

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
