/** @type {import('tailwindcss').Config} */
module.exports = {
  // Определение, какие файлы будут обрабатываться Tailwind CSS
  content: [
    './src/**/*.html',
    './src/**/*.js',
    // Добавьте другие типы файлов, если необходимо
  ],

  // Настройки темы, включая расширения стилей
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Добавление пользовательских цветов или переопределение существующих
        'custom-blue': '#1E90FF',
        'c5f349': '#c5f349',
      },
      fontFamily: {
        // Расширение списка шрифтов
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      // Добавьте другие настройки темы, если необходимо
    },
  },

  // Плагины Tailwind CSS (если используются)
  plugins: [
  ],
}
