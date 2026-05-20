# Портфолио Премиальной Отделки | Premium Renovation Portfolio

Этот проект представляет собой современный, иммерсивный сайт-портфолио для профессионального мастера по отделочным работам. Дизайн выполнен в стиле "Cinematic Premium", подчеркивающем качество и внимание к деталям.

---

## 🛠 Технологический стек (Tech Stack)

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Glassmorphism, Custom Depth)
- **Animations:** Motion (motion/react) — кинематографические переходы и физика пружин.
- **Components:** React (Hooks, Context, Refs)
- **Icons:** Lucide-React
- **Fonts:** Montserrat & Playfair Display

---

## ✨ Основные возможности (Features)

- **Cinematic Hero:** Первый экран с атмосферными градиентами, эффектом глубины и плавным раскрытием текста.
- **Storytelling Sections:** Разделы "Процесс", "Качество" и "FAQ", раскрывающие философию и стандарты мастера.
- **Interactive Transformation:** Блок "До/После" с интерактивным слайдером сравнения.
- **Horizontal Showcase:** Интерактивное портфолио с горизонтальным скроллом и GPU-ускорением.
- **Immersive Interactivity:** Кастомный курсор с магнитными эффектами и амбиентная анимация фона.
- **Glassmorphism UI:** Использование эффекта матового стекла для карточек и форм.
- **Mobile First:** Полная адаптивность и Sticky-кнопки связи для мобильных устройств.
- **Telegram Integration:** Прямая связь через мессенджер и функциональная форма заявки.

---

## 🚀 Быстрый старт (Quick Start)

### 1. Установка зависимостей (Install)
```bash
npm install
```

### 2. Запуск в режиме разработки (Dev)
```bash
npm run dev
```

### 3. Сборка проекта (Build)
```bash
npm run build
```

---

## ⚙️ Настройка (Configuration)

### Telegram и Обратная связь
Для настройки ссылок и API создайте файл `.env.local` на основе `.env.example`:

```bash
# Telegram ссылка
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/your_username

# Formspree ID (опционально для работы формы без бэкенда)
NEXT_PUBLIC_FORMSPREE_ID=your_id
```

### Настройка контента
- **Тексты:** Все текстовые блоки находятся в `src/components/sections/`.
- **Цвета и Стили:** Глобальные настройки в `tailwind.config.ts` и `src/app/globals.css`.
- **Изображения:** Замените URL в компоненте `Portfolio.tsx` и `Hero.tsx` на ваши реальные работы.

---

## 📂 Структура проекта (Project Structure)

- `src/components/sections/` — Основные блоки сайта (Hero, About, Portfolio и др.)
- `src/components/ui/` — Переиспользуемые анимированные элементы (Magnetic, TextReveal, Cursor).
- `src/lib/motion/` — Глобальная конфигурация анимаций и пресетов.
- `docs/` — Подробная техническая документация.

---

## 📄 Лицензия (License)
MIT
