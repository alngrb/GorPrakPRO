"use strict";

const dropdownMenus = document.querySelectorAll('.nav-links li');

dropdownMenus.forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    menu.querySelector('.dropdown-menu').style.display = 'block';
  });

  menu.addEventListener('mouseleave', () => {
    menu.querySelector('.dropdown-menu').style.display = 'none';
  });
});


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

