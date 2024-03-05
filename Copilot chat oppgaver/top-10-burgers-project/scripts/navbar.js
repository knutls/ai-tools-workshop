const SCROLL_DOWN_THRESHOLD = 50;
const SCROLL_UP_THRESHOLD = 0;
const SCROLLED_CLASS = "navbar-scrolled";

const navbarContentContainer = document.querySelector(
  ".navbar-content-container"
);

const onScroll = () => {
  const scrollY = window.scrollY;

  if (scrollY > SCROLL_DOWN_THRESHOLD) {
    navbarContentContainer.classList.add(SCROLLED_CLASS);
    navbarContentContainer.style.transform = 'translateY(-50px)'; // example
  } else if (scrollY <= SCROLL_UP_THRESHOLD) {
    navbarContentContainer.classList.remove(SCROLLED_CLASS);
    navbarContentContainer.style.transform = 'translateY(0)';
  }
};

window.addEventListener("scroll", onScroll);
