/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./layouts/**/*.html",          // ← これがとくに大事！
    "./content/**/*.{md,html}",
    "./themes/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'blog-bg': '#ffffff',
        'blog-text': '#333333',
        'blog-link': '#0066cc',
        'blog-link-hover': '#0052a3',
        'blog-card': '#ffffff',
        'blog-border': '#e5e5e5',
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.5rem',
      },
      lineHeight: {
        'body': '1.6',
      },
      spacing: {
        '7/10': '70%',
        '3/10': '30%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
