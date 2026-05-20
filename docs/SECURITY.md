# Безопасность / Security

## Принципы / Principles
Несмотря на то, что это статический сайт, мы соблюдаем базовые правила безопасности:
1. **Никаких секретов в коде:** Токены API и Chat ID не хранятся в репозитории.
2. **Валидация на клиенте:** Формы проверяются перед отправкой.
3. **Минимизация стороннего трекинга:** Мы не используем лишние аналитические скрипты.

## Обработка форм / Form Handling
Контактная форма на фронтенде — это лишь интерфейс. Для реальной работы рекомендуется использовать:
- Backend-прослойку с проверкой на спам (reCAPTCHA).
- Переменные окружения на сервере для хранения токенов Telegram.

## Рекомендации / Recommendations
- При деплое используйте только HTTPS.
- Регулярно обновляйте версии библиотек через CDN (SRI хеши приветствуются).
- Используйте Content Security Policy (CSP) заголовки на вашем сервере.

---

# English Version

## Principles
Even for a static site, we adhere to fundamental security rules:
1. **No secrets in code:** API tokens and IDs are never committed.
2. **Client-side validation:** Forms are validated before submission.
3. **Privacy first:** No unnecessary third-party tracking scripts.

## Form Handling
The frontend form is an interface. For production, it is recommended to use:
- A backend layer with spam protection (e.g., reCAPTCHA).
- Server-side environment variables for sensitive tokens.


## Form Handling
The frontend form is an interface. For production, it is recommended to use:
- A backend layer with spam protection (e.g., reCAPTCHA).
- Server-side environment variables for sensitive tokens.
