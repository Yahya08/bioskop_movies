function switchTab(tab) {
    var dayTab = document.getElementById('day');
    var weekTab = document.getElementById('week');
    var dayBtn = document.querySelector('.toggle-btn:nth-child(1)');
    var weekBtn = document.querySelector('.toggle-btn:nth-child(2)');

    if (tab === 'day') {
        dayTab.style.display = 'flex';
        weekTab.style.display = 'none';
        dayBtn.classList.add('active');
        weekBtn.classList.remove('active');
    } else {
        dayTab.style.display = 'none';
        weekTab.style.display = 'flex';
        dayBtn.classList.remove('active');
        weekBtn.classList.add('active');
    }
}
const carouselItems = document.querySelectorAll('.carousel-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Autoplay every 5 seconds
setInterval(nextSlide, 5000);
