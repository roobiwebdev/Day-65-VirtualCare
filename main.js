const menuBar = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelectorAll(".nav-link");
menuBar.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  menuBar.classList.toggle("ri-close-large-line");

  if (menuBar.classList.contains("white")) {
    menuBar.classList.remove("white");
  } else {
    menuBar.classList.add("white");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0]");
    menuBar.classList.toggle("ri-close-large-line");

    if (menuBar.classList.contains("white")) {
      menuBar.classList.remove("white");
    } else {
      menuBar.classList.add("white");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".number");

  const options = {
    root: null,
    threshold: 0.1,
  };

  const animateNumbers = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberElement = entry.target;
        const endValue = parseInt(numberElement.dataset.number, 10);
        const isPercentage = numberElement.dataset.percentage === "true";
        let startValue = 0;

        const duration = 2000;
        const increment = endValue / (duration / 16);

        const updateNumber = () => {
          if (startValue < endValue) {
            startValue += increment;
            numberElement.textContent = isPercentage
              ? `${Math.ceil(startValue)}%`
              : Math.ceil(startValue).toLocaleString();
            requestAnimationFrame(updateNumber);
          } else {
            numberElement.textContent = isPercentage
              ? `${endValue}%`
              : endValue.toLocaleString();
          }
        };

        requestAnimationFrame(updateNumber);
      } else {
        const numberElement = entry.target;
        numberElement.textContent = isPercentage ? "0%" : "0";
      }
    });
  };

  const observer = new IntersectionObserver(animateNumbers, options);

  numbers.forEach((number) => observer.observe(number));
});

if (window.innerWidth >= 760) {
  ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  ScrollReveal().reveal(
    ".head_data,.status_data,.how_work_data, .doctors,.clints"
  );
  ScrollReveal().reveal(".head_left_data", {
    origin: "left",
    distance: "300px",
  });
  ScrollReveal().reveal(".about_right,.footer_right", {
    origin: "right",
    distance: "300px",
  });

  ScrollReveal().reveal(".about_left,.footer_left", {
    origin: "left",
    distance: "300px",
  });

  ScrollReveal().reveal(".how_card_1", { delay: 500 });
  ScrollReveal().reveal(".how_card_2", { delay: 700 });
  ScrollReveal().reveal(".how_card_3", { delay: 900 });
  ScrollReveal().reveal(".how_card_4", { delay: 1200 });

  ScrollReveal().reveal(".card_top", { origin: "top", distance: "300px" });
  ScrollReveal().reveal(".card_bottom", {
    origin: "bottom",
    distance: "300px",
  });

  ScrollReveal().reveal(".footer_bottom", {
    origin: "bottom",
    distance: "100px",
  });
}
