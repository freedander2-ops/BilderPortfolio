# Архитектура проекта / Project Architecture

## Философия / Philosophy
Данный проект спроектирован как легкое, производительное и масштабируемое решение для сайта-портфолио. Основной упор сделан на минимизацию зависимостей и простоту обслуживания.

## Технологический стек / Tech Stack
- **HTML5/CSS3:** Семантическая верстка и современные CSS возможности (Variables, Flexbox, Grid).
- **Bootstrap 5:** Использование сетки и базовых компонентов для ускорения разработки и обеспечения надежной адаптивности.
- **Vanilla JavaScript:** Логика реализована на чистом JS без тяжелых фреймворков.
- **AOS (Animate On Scroll):** Единственная внешняя библиотека для визуальных эффектов, обеспечивающая "живой" интерфейс.

## Структура репозитория / Repository Structure
- `/src`: Исходный код (Source of Truth).
- `/public`: Статические ресурсы (изображения, иконки).
- `/scripts`: Скрипты для сборки и автоматизации.
- `/docs`: Расширенная документация.
- Корень (`/`): Содержит артефакты сборки для деплоя на хостинги (GitHub Pages и др.).

## Решения / Key Decisions
1. **Отсутствие сборщиков (Webpack/Vite):** Для проекта такого масштаба внесение сложных инструментов сборки избыточно. Используется простой bash-скрипт.
2. **CDN для библиотек:** Bootstrap и Font Awesome подключаются через CDN для уменьшения размера репозитория и использования кэша браузера пользователя.
3. **Lazy Loading:** Изображения в портфолио используют нативную ленивую загрузку браузера.

---

# English Version

## Philosophy
This project is designed as a lightweight, performant, and scalable portfolio website solution. The main focus is on minimizing dependencies and ease of maintenance.

## Tech Stack
- **HTML5/CSS3:** Semantic markup and modern CSS features.
- **Bootstrap 5:** Grid and core components for rapid, responsive development.
- **Vanilla JavaScript:** Clean logic without heavy frameworks.
- **AOS (Animate On Scroll):** Lightweight library for visual engagement.

## Repository Structure
- `/src`: Source of truth.
- `/public`: Static assets.
- `/scripts`: Automation and build scripts.
- `/docs`: Extended documentation.
- Root (`/`): Contains build artifacts for deployment.
