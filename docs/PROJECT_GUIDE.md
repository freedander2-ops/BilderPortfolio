# Руководство по проекту: Портфолио Максима Сергеевича
# Project Guide: Maksim Sergeevich Portfolio

---

## Русский (RU)

### Описание
Высокотехнологичный сайт-портфолио, разработанный специально для мастеров премиальной отделки. Сайт ориентирован на визуальное воздействие и доверие клиента.

### Как это работает
Сайт использует систему "Motion Logic", где каждый элемент анимируется относительно положения скролла или курсора. Это создает ощущение живого, отзывчивого интерфейса.

### Ключевые разделы
1. **Hero (Главная)**: Демонстрирует масштаб и статус.
2. **About (Обо мне)**: Акцент на опыте и профессионализме.
3. **Services (Услуги)**: Четкая структура предлагаемых работ.
4. **Portfolio (Работы)**: Интерактивная галерея (горизонтальный скролл).
5. **Reviews (Отзывы)**: Социальное доказательство качества.
6. **Contacts (Контакты)**: Удобная форма и переход в Telegram.

### Как подключить Telegram
1. Откройте файл `.env.example`.
2. Создайте его копию под именем `.env.local`.
3. В переменной `NEXT_PUBLIC_TELEGRAM_LINK` укажите ссылку на ваш профиль в формате `https://t.me/логин`.
4. В компоненте `src/components/sections/Contacts.tsx` ссылка подхватится автоматически.

### Как добавлять проекты (Content System)
Все проекты находятся в файле `src/data/projects.ts`. Чтобы добавить новый проект:
1. Подготовьте ссылки на изображения (Unsplash или локальные).
2. Добавьте новый объект в массив `projects`.
3. Выберите один из типов раскладки (`layoutType`):
   - `curtain` (эффект занавеса),
   - `floating` (парящая глубина),
   - `stacked` (художественный коллаж).
4. Заполните описание и "историю проекта" для максимального погружения клиента.

### Где заполнять свои данные
- **Имя и заголовок**: `src/components/sections/Hero.tsx`
- **Описание услуг**: `src/components/sections/Services.tsx`
- **Проекты и портфолио**: `src/data/projects.ts`
- **Тексты отзывов**: `src/components/sections/Reviews.tsx`
- **Контактные данные (телефон, email)**: `src/components/sections/Contacts.tsx`

---

## English (EN)

### Description
A high-tech portfolio website designed specifically for premium renovation craftsmen. Focuses on visual impact and building client trust.

### How It Works
The site utilizes a "Motion Logic" system where every element animates relative to the scroll position or cursor movement, creating a living, responsive interface.

### Key Sections
1. **Hero**: Highlights scale and status.
2. **About**: Focuses on experience and professionalism.
3. **Services**: Provides a clear structure of offered work.
4. **Portfolio**: Interactive gallery with horizontal scrolling.
5. **Reviews**: Social proof of quality.
6. **Contacts**: User-friendly form and Telegram link.

### Connecting Telegram
1. Open `.env.example`.
2. Create a copy named `.env.local`.
3. Set `NEXT_PUBLIC_TELEGRAM_LINK` to your profile link (e.g., `https://t.me/username`).
4. The link will be automatically applied in `src/components/sections/Contacts.tsx`.

### Adding Projects (Content System)
All projects are stored in `src/data/projects.ts`. To add a new one:
1. Prepare image URLs.
2. Add a new object to the `projects` array.
3. Choose a `layoutType`:
   - `curtain` (vertical reveal),
   - `floating` (parallax depth),
   - `stacked` (artistic collage).
4. Fill in the description and "full story" for immersive storytelling.

### Customizing Your Data
- **Name & Title**: `src/components/sections/Hero.tsx`
- **Service Descriptions**: `src/components/sections/Services.tsx`
- **Portfolio Projects**: `src/data/projects.ts`
- **Reviews**: `src/components/sections/Reviews.tsx`
- **Contact Details (Phone, Email)**: `src/components/sections/Contacts.tsx`
