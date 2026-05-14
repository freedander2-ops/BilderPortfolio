# Руководство по настройке проекта / Project Customization Guide

Данный документ поможет вам адаптировать сайт под свои нужды.

## 1. Изменение текстов
Все тексты находятся в файле `index.html`. Используйте поиск (Ctrl+F), чтобы найти и заменить:
- `Максим Сергеевич` -> Ваше имя.
- `+7 (900) 000-00-00` -> Ваш номер телефона.
- `@your_telegram` -> Ваш ник в Telegram.

## 2. Изменение изображений
Все изображения находятся в папке `images/` или подключаются по ссылкам (Unsplash).
- **Главный фон:** Изменяется в `css/style.css` в селекторе `.hero-section`.
- **Фото в блоке "Обо мне":** В `index.html` в блоке `#about` замените ссылку в теге `<img>` или положите свое фото в `images/` и укажите путь к нему.
- **Работы в портфолио:** В `index.html` в блоке `#portfolio` замените ссылки в тегах `<img>`.

## 3. Настройка Telegram-кнопки
В файле `index.html` найдите все ссылки `https://t.me/your_telegram` и замените `your_telegram` на ваш реальный логин.

## 4. Настройка формы (Backend)
На данный момент форма работает в демонстрационном режиме (имитация отправки). Чтобы она реально отправляла данные:
1. Вам нужен серверный скрипт (например, на PHP).
2. В `js/script.js` в секции `Обработка формы контактов` замените `setTimeout` на реальный `fetch` запрос к вашему API.

---

# Project Customization Guide

This document will help you adapt the site to your needs.

## 1. Changing Texts
All texts are located in the `index.html` file. Use search (Ctrl+F) to find and replace:
- `Максим Сергеевич` -> Your name.
- `+7 (900) 000-00-00` -> Your phone number.
- `@your_telegram` -> Your Telegram handle.

## 2. Changing Images
All images are located in the `images/` folder or linked via URLs (Unsplash).
- **Main Background:** Changed in `css/style.css` in the `.hero-section` selector.
- **Photo in the "About Me" block:** In `index.html` in the `#about` block, replace the link in the `<img>` tag or place your photo in `images/` and update the path.
- **Portfolio works:** In `index.html` in the `#portfolio` block, replace the links in the `<img>` tags.

## 3. Telegram Button Setup
In the `index.html` file, find all `https://t.me/your_telegram` links and replace `your_telegram` with your real username.

## 4. Form Setup (Backend)
The form currently works in demo mode (simulated submission). To make it actually send data:
1. You need a server-side script (e.g., PHP).
2. In `js/script.js` in the `Contact Form Handling` section, replace `setTimeout` with a real `fetch` request to your API.
