# Прогноз погоды ⛅

Это приложение для получения прогноза погоды на текущий день и ближайшие 5 дней для любого города. Использует API OpenWeatherMap для получения данных о погоде.

## Используемые технологии ☂

- **React (v18.3.1)** — библиотека для построения пользовательских интерфейсов.
- **Vite** — быстрый и современный инструмент для разработки.
- **OpenWeatherMap API** — API для получения информации о погоде.
- **Styled Components** — библиотека для стилизации компонентов.
- **Jest** — для юнит-тестирования.
- **ESLint** — для контроля качества кода.

## Функционал 

- 🏙️ Ввод города для получения текущего прогноза погоды.
- 🌡️ Отображение температуры, скорости ветра, влажности и иконки погодных условий.
- 📅 Прогноз погоды на ближайшие 5 дней.
- 📱 Адаптивный дизайн.
- ⚠️ Обработка ошибок.
- 🧪 Юнит-тесты для ключевых функций.

## Установка

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/Kekyra228/weather-app.git

2. Перейдите в директорию проекта:
```bash
   cd weather-app
   
3. Установите зависимости:

   npm install

4. В корневой папке проекта создайте новый файл с именем .env и добавьте ваш реальный API-ключ, который вы получили от OpenWeatherMap:

   VITE_API_KEY=ваш_ключ

5. Запустите приложение в режиме разработки

   npm run dev

6. Для запуска тестов:

   npm test


