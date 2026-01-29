document.addEventListener("DOMContentLoaded", () => {
  /* ================= MOBILE NAVIGATION ================= */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });

    mainNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        mainNav.classList.remove("open");
      }
    });
  }

  /* ================= HEADER SCROLL EFFECT ================= */z
  const header = document.querySelector(".site-header");

  const handleScroll = () => {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  /* ================= SCROLL REVEAL ANIMATION ================= */
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("visible"));
  }

  /* ================= PHOTOSHOOT FILTER ================= */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      galleryItems.forEach((item) => {
        const category = item.dataset.category;
        item.style.display =
          filter === "all" || category === filter ? "" : "none";
      });
    });
  });

  /* ================= LIGHTBOX ================= */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox?.querySelector(".lightbox-img");
  const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");

  if (lightbox && lightboxImg && lightboxCaption && lightboxClose) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const caption = item.querySelector(".gallery-caption");

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption.textContent;

        lightbox.style.display = "flex";
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    const closeLightbox = () => {
      lightbox.style.display = "none";
      lightbox.setAttribute("aria-hidden", "true");
    };

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ================= FOOTER YEAR ================= */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
const Footer = () => (
  <footer>
    {/* Image Logo with Centering Fix */}
    <a href="#" className="logo" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <img 
        src="assets/commercial1-mansi.jpg" 
        alt="Mansi Jagtap Logo" 
        style={{ 
          height: '60px', 
          width: '60px', 
          objectFit: 'cover', 
          borderRadius: '50%',       /* Makes it a circle */
          border: '1px solid #1c1715' /* Adds a thin border definition */
        }} 
      />
    </a>

    <div className="footer-socials">
      <a href="https://www.instagram.com/_official__mansi_/" target="_blank">Instagram</a> 
      &bull; 
      <a href="mailto:contact@mansijagtap.com">Email</a>
    </div>
    
    <p className="disclaimer">&copy; {new Date().getFullYear()} Mansi Jagtap. All rights reserved.</p>
  </footer>
);
