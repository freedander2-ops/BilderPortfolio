// ===== Основные настройки =====
document.addEventListener('DOMContentLoaded', function() {
  // Инициализация всех функций после загрузки DOM
  initNavbar();
  initSmoothScroll();
  initPortfolioFilter();
  initTestimonialsCarousel();
  initContactForm();
  initScrollAnimations();
  initPreloader();
});

// ===== 1. Умный навбар =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // Изменение навбара при скролле
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
      navbar.style.padding = '10px 0';
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.style.padding = '15px 0';
    }
  });

  // Подсветка активного раздела
  window.addEventListener('scroll', highlightActiveSection);

  function highlightActiveSection() {
    const scrollPos = window.scrollY;

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (
        section.offsetTop <= scrollPos + 150 &&
        section.offsetTop + section.offsetHeight > scrollPos + 150
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// ===== 2. Плавная прокрутка =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== 3. Фильтр портфолио =====
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.portfolio-filter button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс текущей кнопке
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Фильтрация элементов
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            item.classList.add('animate__animated', 'animate__fadeIn');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}

// ===== 4. Карусель отзывов =====
function initTestimonialsCarousel() {
  const testimonials = document.querySelector('.testimonials-carousel');

  if (testimonials) {
    let currentIndex = 0;
    const items = document.querySelectorAll('.testimonial-item');
    const totalItems = items.length;

    function showTestimonial(index) {
      items.forEach(item => item.classList.remove('active'));
      items[index].classList.add('active');
    }

    // Автопрокрутка каждые 5 секунд
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      showTestimonial(currentIndex);
    }, 5000);

    // Ручное управление
    document.querySelectorAll('.testimonial-control').forEach(control => {
      control.addEventListener('click', () => {
        if (control.classList.contains('next')) {
          currentIndex = (currentIndex + 1) % totalItems;
        } else {
          currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }
        showTestimonial(currentIndex);
      });
    });
  }
}

// ===== 5. Форма обратной связи =====
function initContactForm() {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Имитация отправки
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';

      // Здесь можно добавить реальный AJAX-запрос
      setTimeout(() => {
        // Успешная отправка
        showAlert('success', 'Спасибо! Ваша заявка отправлена.');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  }

  function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} fixed-top mt-5 mx-auto w-75`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.classList.add('fade-out');
      setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
  }
}

// ===== 6. Анимации при скролле =====
function initScrollAnimations() {
  const animateElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute('data-animate');
        entry.target.classList.add('animate__animated', `animate__${animation}`);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));
}

// ===== 7. Прелоадер =====
function initPreloader() {
  const preloader = document.getElementById('preloader');

  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
      }, 500);
    });
  }
}

// ===== 8. Дополнительные утилиты =====
// Таймер обратного отсчета (акция/спецпредложение)
function initCountdown() {
  const countdown = document.getElementById('countdown');

  if (countdown) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3); // +3 дня от текущей даты

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `
        <div class="countdown-item">
          <span>${days}</span> дней
        </div>
        <div class="countdown-item">
          <span>${hours}</span> часов
        </div>
        <div class="countdown-item">
          <span>${minutes}</span> минут
        </div>
        <div class="countdown-item">
          <span>${seconds}</span> секунд
        </div>
      `;

      if (distance < 0) {
        clearInterval(timer);
        countdown.innerHTML = 'Акция завершена!';
      }
    }, 1000);
  }
}