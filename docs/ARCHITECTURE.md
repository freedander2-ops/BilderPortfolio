# Архитектура проекта / Project Architecture

## Философия / Philosophy
BilderPortfolio спроектирован как высокопроизводительный, кинематографический интерфейс. Основной акцент сделан на визуальном погружении (immersion), премиальной типографике и плавности взаимодействий.

## Технологический стек / Tech Stack
- **Next.js 15 (App Router):** Обеспечивает серверный рендеринг, оптимизацию изображений и современную маршрутизацию.
- **Tailwind CSS:** Позволяет гибко управлять дизайн-системой и обеспечивать чистоту стилей.
- **motion/react:** Инструмент для создания сложных анимаций, многослойной глубины и плавных переходов.
- **shadcn/ui:** Базовая библиотека доступных компонентов, кастомизированная под премиальный стиль.
- **TypeScript:** Гарантирует типобезопасность и масштабируемость кода.

## Ключевые решения / Key Decisions
1. **Cinematic Motion System:** Анимации строятся на принципах физического движения (springs), избегая резких и хаотичных переходов.
2. **Visual Depth:** Активное использование параллакса, атмосферных градиентов и наложения слоев для создания ощущения глубины.
3. **Typography First:** Дизайн строится вокруг сильной сетки и контрастной типографики (Montserrat + Playfair Display).
4. **Performance Optimization:** Использование GPU-ускоренных трансформаций (transform) и оптимизация отрисовки для мобильных устройств.

## Структура репозитория / Repository Structure
- `src/app`: Маршруты и макеты.
- `src/components/sections`: Крупные блоки страниц (Hero, About и т.д.).
- `src/components/ui`: Атомарные компоненты.
- `src/lib/motion`: Пресеты и варианты анимаций.
- `src/styles`: Глобальные стили и переменные темы.

---

# English Version

## Philosophy
BilderPortfolio is designed as a high-performance, cinematic interface. The primary focus is on visual immersion, premium typography, and fluid interactions.

## Tech Stack
- **Next.js 15 (App Router):** Server-side rendering, image optimization, and modern routing.
- **Tailwind CSS:** Utility-first styling with a strict design system.
- **motion/react:** Cinematic animations, layered depth, and smooth transitions.
- **shadcn/ui:** Accessible component foundation customized for premium aesthetics.
- **TypeScript:** Type safety and scalability.

## Key Decisions
1. **Cinematic Motion System:** Physics-based animations (springs) for fluid movement.
2. **Visual Depth:** Parallax effects, atmospheric gradients, and layering for immersion.
3. **Typography First:** Design centered around strong grids and contrasting fonts.
4. **Performance Optimization:** GPU-accelerated transforms and mobile optimization.
