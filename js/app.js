/* Created by Tivotal */
const cardWrapper = document.querySelector(".card-wrapper");

fetch("./json/gotCharacters.json")
  .then((response) => response.json())
  .then((data) => {
    ekleme(data);
    return (islenmisData = data);
  });

const ekleme = (islenmisData) => {
  let products = islenmisData.characters;
  products.forEach((value, key) => {
    let aciklama = value.description;
    let fullText = value.description;
    let maxDisplayLength = 80;
    if (fullText.length > maxDisplayLength) {
      var displayText = fullText.substring(0, maxDisplayLength) + "...";
      console.log(displayText);
      aciklama = displayText;
    }
    let newDiv = document.createElement("div");
    newDiv.classList.add("card", "swiper-slide", "bg-light");
    newDiv.innerHTML = ` <div class="image-content">
                                    <span class="overlay"></span>
                                        <div class="card-image">
                                            <img src="${value.url}" alt="" />
                                        </div>
                                    </div>
                                        <div class="card-content">
                                            <h2 class="name">${value.name}</h2>
                                            <div class="bannerColor ${value.house}"></div>
                                            <div class="bannerSquare">
                                            <img class="banner" src="${value.houseUrl}" alt="${value.house}"/>
                                            </div>
                                            <p class="description">${aciklama}</p>
                                    </div>
                                    <button class="button">House ${value.house}</button>
                                    `;
    cardWrapper.appendChild(newDiv);
  });
};

var swiper = new Swiper(".slider-content", {
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "false",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
