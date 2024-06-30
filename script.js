var navList = document.querySelector(".nav_list");
var burger = document.querySelector('.burger-menu')

burger.addEventListener('click', ()=>{
  navList.classList.toggle('nav_list-active')
})

$('.reviews_inner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Установите дату обратного отсчета
var countDownDate = new Date().getTime() + 1800000;

// Обновляйте таймер каждую секунду
var x = setInterval(function() {

  // Получите текущее время
  var now = new Date().getTime();

  // Найдите разницу между сейчас и установленной датой
  var distance = countDownDate - now;

  // Расчеты для дней, часов, минут и секунд
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Вывод результата в элементы с id="days", "hours", "minutes" и "seconds"
  document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

  // Если таймер обратного отсчета закончился, напишите текст
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Время истекло!";
  }
}, 1000);


window.addEventListener('scroll', event => {
  let nav = document.querySelector('.nav');
  let fromTop = window.scrollY;
    let section = document.querySelector('.product_composition');
    if (
      section.offsetTop < fromTop 
    ) {
      console.log('fsd');
      nav.classList.add('nav_unlock');
    } else {
      nav.classList.remove('nav_unlock');
    }

});



window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  document.querySelectorAll('.anchor[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const element = document.querySelector(this.getAttribute('href'));

          element.scrollIntoView({
              block: "center",
              alignToTop: true,
              behavior: "smooth"
          });
      });
  });
})

window.addEventListener("DOMContentLoaded", function () {


  document.querySelectorAll('.anchor[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const element = document.querySelector(this.getAttribute('href'));

          element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
      });
  });
})

// let button1 = document.querySelectorAll('btn_link');
// let formaSend = document.getElementById('main-form');
// button1.addEventListener('click', smoothscroll);
// button2.addEventListener('click', smoothscroll);

// function smoothscroll() {
//     formaSend.scrollIntoView({ behavior: 'smooth' });
// }