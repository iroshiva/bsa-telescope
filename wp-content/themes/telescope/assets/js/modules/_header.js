class Header {
  static TOGGLE_STATE = false;

  constructor() {
    this.header = document.querySelector(".header");
    this.hamburger = this.header.querySelector(".btn--hamb");
    this.navResponsive = this.header.querySelector(".header__resp");
    this.respNavLinks = this.navResponsive.querySelectorAll(".nav-item");
    this.timeout = null;
  }

  init() {
    this.toggleMenu();
    this.onRespNavItemClick();
  }

  toggleMenu() {
    if (!this.hamburger) {
      return;
    }

    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("is-active");

      if (!Header.TOGGLE_STATE) {
        const headerHeight = this.header.offsetHeight;

        this.navResponsive.style.left = "100%";
        this.navResponsive.style.height = `calc(100vh - ${headerHeight}px)`;
        Header.TOGGLE_STATE = true;
      } else {
        this.navResponsive.style.left = "0";
        Header.TOGGLE_STATE = false;
      }
    });
  }

  setLinkActive(navLink) {
    const currentActiveLink = [...this.respNavLinks].filter((link) => {
      return link.classList.contains("active");
    });
    console.log(currentActiveLink);
    if (currentActiveLink.length !== 0) {
      currentActiveLink[0].classList.remove("active");
    }

    navLink.classList.add("active");
  }

  onRespNavItemClick() {
    this.respNavLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefLink = link.querySelector(".nav-link").href;
        this.setLinkActive(link);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.navResponsive.style.left = "0";
          Header.TOGGLE_STATE = false;
          this.hamburger.classList.remove("is-active");
          this.redirectToPage(hrefLink);
        }, 1000);
      });
    });
  }

  redirectToPage(hrefLink) {
    setTimeout(() => {
      location.href = hrefLink;
    }, this.timeout + 1000);
  }
}

export default Header;
