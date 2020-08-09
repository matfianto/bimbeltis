const navSlide = () => {
    const menuToogle = document.querySelector(".menu-toogle input");

    const nav = document.querySelector("nav ul");

    menuToogle.addEventListener("click", function () {
        nav.classList.toggle("slide");
    });
};

navSlide();

const smothScroll = () => {
    const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
}

smothScroll();

function myFunction() {
    alert("Maaf belum bisa dilakukan, masih dalam tahap perkembangan. Terima Kasih.");
  }