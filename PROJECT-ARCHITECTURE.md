# Документация проекта `web-app`

Краткий обзор стека, архитектуры папок и соглашений. Можно использовать как **референс** при лендинге на **React + Next.js**: переносить те же слои и правила импортов, адаптируя только слой приложения (роутинг, провайдеры, сборку).

---

## Стек технологий

| Область | Технологии |
|--------|------------|
| **Язык** | TypeScript (strict), `jsx: react-jsx` |
| **UI** | React 18 |
| **Сборка / dev** | Vite 7, `@vitejs/plugin-react` |
| **Роутинг** | `react-router` v7 (`BrowserRouter`, `Routes`, `Route`, `Outlet`) |
| **Стили** | SCSS, **CSS Modules** (`*.module.scss`) для компонентов; глобальные переменные темы в `src/style/` |
| **Анимации** | `framer-motion` |
| **i18n** | `react-i18next` (локали в `shared/services/i18n`) |
| **Утилиты** | `classnames` |
| **Окружение Telegram** | Обёртка вокруг `window.Telegram.WebApp` в `shared/services/telegram` |
| **Реалтайм** | `pusher-js` |
| **Календарь** | `react-calendar` |
| **Документация UI** | Storybook 9 (`@storybook/react-vite`, addon-docs) |
| **Линтинг** | ESLint 9 + TypeScript ESLint, плагины React / Storybook |

**Важно для лендинга (Next.js):** здесь **нет** Next.js — это SPA на Vite. В лендинге обычно вместо Vite + React Router используют **App Router** (или Pages Router), **встроенный роутинг Next**, свой способ глобальных стилей и, при необходимости, `next-intl` или тот же `react-i18next` с другой инициализацией.

---

## Архитектура: слои (Feature-Sliced Design, упрощённо)

Проект следует **идее FSD**: разделение по уровню ответственности и направлению зависимостей (сверху вниз — к `shared`).

```
src/
├── app/           # Инициализация приложения: корневой layout, роуты-обвязка, конфиг, тема Telegram
├── pages/         # Страницы (композиция виджетов и фич под URL)
├── widgets/       # Крупные блоки интерфейса (секции, составные карточки)
├── features/      # Законченные пользовательские сценарии (форма проверки, пополнение и т.д.)
├── entites/       # Предметная область (сессия, отчёт, платежи — опечатка в имени папки: entities)
├── modals/        # Модальные окна, подключаемые к modal-service
├── shared/        # Переиспользуемый код без бизнес-домена
│   ├── ui/        # Дизайн-система: кнопки, формы, иконки, layout
│   ├── lib/       # Хуки и утилиты (форматирование, таймеры и т.д.)
│   ├── services/  # Инфраструктура: API, i18n, Telegram, модалки, тема
│   └── config/    # Общие конфиги (например иконки сетей)
└── stories/       # Storybook: ui-kit, виджеты, сущности (не прод-код роутера)
```

### Правило зависимостей (как ориентир)

- **`shared`** не импортирует `features`, `widgets`, `pages`, `entites`.
- **`entites`** — доменные модели и UI сущностей; не должны тянуть `features`/`pages` (в идеале).
- **`features`** собирают сценарии из `entites` + `shared`.
- **`widgets`** — композиция `features` + `shared` + при необходимости `entites`.
- **`pages`** — только сборка экрана из слоёв ниже.
- **`app`** — провайдеры, глобальные настройки, корневой layout.

На практике иногда есть пересечения; цель — **не плодить циклы** и держать «тяжёлую» логику в `entites`/`features`, а переиспользование — в `shared`.

---

## Точка входа и провайдеры

Файл `src/main.tsx`:

1. Глобальные стили: `import './style/index.scss'`.
2. `BrowserRouter` (React Router).
3. **`ServicesProvider`** (`shared/services`) — i18n, тема, вибро-настройки, доступ к API, Telegram, модальному сервису.
4. Доменные провайдеры: сессия, заявки на проверку адреса, платежи.
5. Рендер **`App`** из `src/app/index.tsx` — маршруты, стек модалок `ModalsStack`, проверка Telegram WebApp.

Конфиг сервисов и приложения: `src/app/app-config.ts` (в т.ч. маппинг типов модалок на компоненты).

---

## Алиасы путей (TypeScript / Vite)

В `tsconfig.app.json`:

| Алиас | Назначение |
|-------|------------|
| `@/*` | `src/*` — основной импорт (`@/shared/ui/button`, `@/features/...`) |
| `@ui/*` | `src/shared/ui/*` — короткий путь к UI-киту |

В Vite (`vite.config.*`) дублируется `resolve.alias` для `@` и `@ui`.

**Для Next.js:** настроить те же алиасы в `tsconfig.json` и в `next.config` (`compilerOptions.paths` / `transpilePackages` при монорепо).

---

## Стили и тема

- Глобально: `src/style/index.scss` подключает тему (`themes/dark-theme.scss`), reset, шрифт Inter.
- Компоненты: рядом `style.module.scss`, классы через `classnames` + CSS Modules.
- CSS-переменные для цветов и отступов задаются в теме (ориентация на тёмную тему и Telegram viewport).

Лендинг может повторить **подход**: глобальные токены + модули у компонентов; при Next — `app/globals.css` или SCSS + те же переменные.

---

## Инфраструктурный слой `shared/services`

Центральный модуль: **`ServicesProvider`** + контекст `Services`:

- **i18n** — `react-i18next`, смена языка, локаль в тулбаре Storybook.
- **Theme** — контекст темы (в проекте в основном тёмная).
- **Modal service** — стек модалок, типы в `modal-service/types`, рендер в `ModalsStack`.
- **Telegram** — Mini App API: виброотклик, высота viewport, кнопка «Назад», тема шапки и т.д.
- **Api** — HTTP-клиент к бэкенду.

Хуки экспортируются из `shared/services` (`useTelegram`, `useApi`, `useModals`, `useVibration`, …).

**Лендинг:** этот слой может быть **урезан** (без Telegram / без модалок) или заменён на `fetch`/Server Actions в Next.

---

## UI-kit (`shared/ui`)

Переиспользуемые компоненты: кнопки, формы, селекты, модальные bottom sheet, иконки (группы: `interface`, `menu`, `flags`, …), типографика и layout (`flex`, `separator`, …).

Storybook подключает превью с `ServicesProvider` и глобальными стилями (`.storybook/preview.tsx`).

---

## Storybook

- Конфиг: `.storybook/main.ts` — stories: `src/**/*.stories.tsx`, alias `@` и `@ui`.
- Статика: `public/`.
- Скрипты: `npm run storybook`, `npm run build-storybook`.

Для лендинга Storybook можно вынести в отдельный пакет или держать рядом с UI в монорепо.

---

## Сборка и скрипты

| Скрипт | Назначение |
|--------|------------|
| `npm run dev` | Vite dev (`vite.config.dev.ts`) |
| `npm run build` | `tsc -b` + `vite build` (prod-конфиг; проверьте наличие `vite.config.prod.js` / `.ts` в репозитории) |
| `npm run lint` | ESLint |
| `npm run storybook` | Storybook на порту 6006 |

---

## Как перенести идею на Next.js (лендинг)

1. **Слои те же:** `app` (или `src/app` в Next 13+), `widgets`, `features`, `shared` (ui + lib), при необходимости лёгкий `entities` для контента/моделей.
2. **Роутинг:** файловая маршрутизация Next вместо `react-router` — страницы собирают те же `widgets`/`features`.
3. **Стили:** глобальные токены + CSS Modules / SCSS — как в текущем проекте.
4. **i18n:** либо официальный паттерн Next, либо тот же i18next с отдельной инициализацией.
5. **Без Telegram:** выпилить `Telegram` и связанные хуки из UI или заменить заглушками в провайдере.
6. **Импорты:** сохранить алиас `@/*` для предсказуемых путей.

---

## Заметки по репозиторию

- Папка **`entites`** — историческое написание; семантически это **entities** (сущности домена).
- Проект заточен под **Telegram Mini App** (viewport, haptics, `ServicesProvider`).

---

*Документ можно дополнять по мере появления договорённостей для лендинга (например единый `README` для монорепо или схема деплоя).*
