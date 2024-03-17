import mobileNav from "./modules/mobile-nav.js";
mobileNav();
//========================================================================================================================================================
//preloader
// #region preloader
import { gsap } from "gsap";

const preloaderElement = document.querySelector(".preloader");

if (preloaderElement) {
  if (!sessionStorage.getItem("preloaderShown")) {
    // Створення нового timeline
    var tl = gsap.timeline();

    // Анімація для preloader-shelly: початок з'явлення, рух до центру, рух вправо та зникнення
    tl.from(".preloader-shelly", { duration: 1.5, x: "-300%", opacity: 0 })
      .to(".preloader-shelly", { duration: 1.5, x: "0%", opacity: 1 })
      .to(".preloader-shelly", { duration: 1.5, x: "300%", opacity: 0 });

    // Анімація для line-preloader: початок з'явлення і рух до центру
    tl.from(".line-preloader", { duration: 1, y: "300%", opacity: 0 }, 0).to(
      ".line-preloader",
      { duration: 1, y: "0%", opacity: 1 },
      0
    );

    tl.from(".preloader-theme", { duration: 1.5, x: "300%", opacity: 0 }, 0)
      .to(".preloader-theme", { duration: 1.5, x: "0%", opacity: 1 }, 0)
      .to(".preloader-theme", { duration: 1.5, x: "-300%", opacity: 0 });

    tl.to(".line-preloader", { duration: 0.5, y: "110%", opacity: 0 }).to(".preloader", {
      duration: 1,
      opacity: 0,
      zIndex: -100
    });

    // Зміна видимості прелоадера
    preloaderElement.style.visibility = "visible";

    // Встановлення прапорця, що прелоадер вже відображався
    sessionStorage.setItem("preloaderShown", "true");
  } else {
    // Якщо прелоадер вже відображався, просто ховаємо його
    preloaderElement.style.display = "none";
  }
}
// #endregion
//========================================================================================================================================================
// #region swiper
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  }
});

// #endregion
//========================================================================================================================================================
// #region downmenu
const inputElement = document.getElementById("subjectInput");
if (inputElement) {
  const inputElement = document.getElementById("subjectInput"); // Змінено ім'я змінної на inputElement
  const dropdown = document.getElementById("dropDown");
  const dropdownButton = document.getElementById("dropdownButton");

  // Додаємо обробник подій для кліку на інпут
  inputElement.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  // Додаємо обробник подій для кліку на кнопку
  dropdownButton.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  // Додаємо обробник подій для кліку на елемент випадаючого списку
  document.querySelectorAll(".subject__drop-item").forEach((item) => {
    item.addEventListener("click", function () {
      inputElement.value = this.textContent;
      dropdown.classList.remove("show");
    });
  });

  function filterFunction() {
    var filter, items, i;
    filter = inputElement.value.toUpperCase();
    items = document.querySelectorAll(".subject__drop-item");
    for (i = 0; i < items.length; i++) {
      txtValue = items[i].textContent || items[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  }
} else {
  console.log("Елемент з id 'subjectInput' не знайдений на цій сторінці.");
}
// #endregion
//========================================================================================================================================================
// document.querySelector(".contacts__form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Це запобіжить перезавантаженню сторінки
//   // Отримуємо дані з форми
//   const formData = new FormData(this);
//   // Відправляємо дані на сервер або обробляємо їх за допомогою AJAX
//   // Наприклад:
//   fetch("#", {
//     method: "POST",
//     body: formData
//   })
//     .then((response) => {
//       // Обробляємо відповідь від сервера
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });
//========================================================================================================================================================
// #region counter
document.addEventListener("DOMContentLoaded", function () {
  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  const countResult = document.getElementById("result");

  // Перевірка наявності елементів на сторінці
  if (increment && decrement && countResult) {
    let currentValue = 1;
    const minValue = 1;
    const maxValue = 6;

    function counter(newValue) {
      if (newValue >= minValue && newValue <= maxValue) {
        currentValue = newValue;
        countResult.textContent = newValue;
      }
    }

    increment.addEventListener("click", () => {
      counter(currentValue + 1);
    });

    decrement.addEventListener("click", () => {
      counter(currentValue - 1);
    });
  }
});
//  #endregion
//========================================================================================================================================================
// #region stars

document.addEventListener("DOMContentLoaded", function () {
  const ratingStars = document.getElementById("ratingStars");

  // Перевірка наявності елемента на сторінці
  if (ratingStars) {
    const starButtons = ratingStars.querySelectorAll(".star-btn");

    starButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedIndex = parseInt(button.dataset.index);

        // Змінюємо класи всіх зірок до поточної включно
        for (let i = 0; i <= selectedIndex; i++) {
          starButtons[i].querySelector(".star").classList.add("active-star");
        }
        // Змінюємо класи всіх зірок після поточної
        for (let i = selectedIndex + 1; i < starButtons.length; i++) {
          starButtons[i].querySelector(".star").classList.remove("active-star");
        }
      });
    });
  }
});
// #endregion
//========================================================================================================================================================
// #region tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabsBtns = document.querySelectorAll(".tabs__nav-btn");
  const tabsContents = document.querySelectorAll(".tabs__content > div");

  tabsBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Видаляємо клас 'active-tab' у всіх кнопок табів
      tabsBtns.forEach((btn) => btn.classList.remove("active-tab"));
      // Видаляємо клас 'active-tab__content' у всіх блоків вмісту табів
      tabsContents.forEach((content) => content.classList.remove("active-tab__content"));

      // Додаємо клас 'active-tab' лише тій кнопці табу, на яку було клікнуто
      button.classList.add("active-tab");
      // Додаємо клас 'active-tab__content' відповідному блоку вмісту табу
      tabsContents[index].classList.add("active-tab__content");
    });
  });
});
//#endregion
//========================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const accountBtn = document.querySelectorAll(".account__button");

  accountBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      accountBtn.forEach(function (button) {
        button.classList.remove("btn-active");
      });
      btn.classList.add("btn-active");
    });
  });
});
