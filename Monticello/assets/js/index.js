// burger-menu
let burger = document.querySelector('.navigation-menu__burger');
let header = document.querySelector('.header-navigation__menu');
let main = document.querySelector('main')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('burger__active')
    header.classList.toggle('menu__active')
    main.classList.toggle('main__active')
}, false);

// fancybox-gallery
Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
})

// google-map 
function Map() {
  let map = new google.maps.Map(document.querySelector('#map'), {
    zoom:10,
    center: { lat: 40.6779741571009, lng: -73.94637932099225 },
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.6779741571009, lng: -73.94637932099225 },
    icon: "svg/Pin.svg",
    map
  })
}
// slider-header-swiper
const swiperHeader = new Swiper('.slider-header', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-header-pagination',
  },
  navigation: {
    nextEl: '.swiper-header-button-next',
    prevEl: '.swiper-header-button-prev',
  },
  slidesPerView: 1,
})
// slider-swiper.news
const swiper = new Swiper('.news-slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
})

//  forms
const mainForm = document.forms.main;
const mainFormName = mainForm.inputName;
const mainFormMail = mainForm.inputMail;

mainForm.addEventListener("submit", function (event) {
	if (nameTest(mainFormName)) {
		mainFormName.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="form__error">
      Enter name
			</div>`
		);
		event.preventDefault();
	}
  if (emailTest(mainFormMail)) {
		mainFormMail.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="form__error">
				Enter email
			</div>`
		);
		event.preventDefault();
	} 
});
mainForm.addEventListener('focusout', function (event) {
	if (mainFormName.nextElementSibling) {
		mainFormName.nextElementSibling.remove();
	}
});
mainForm.addEventListener('focusout', function (event) {
	if (mainFormMail.nextElementSibling) {
		mainFormMail.nextElementSibling.remove();
	}
});
//Функція тесту email
function emailTest(mail) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mail.value);
}
//Функція тесту name
function nameTest(name) {
  return !/^[a-zA-Z]+$/.test(name.value)
}

// slow-scroll
const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = link.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}