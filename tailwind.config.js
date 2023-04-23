/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'gray-100': '#f3f3f3',
      'gray-200': '#d8d8d8',
      'primary': '#6921EF',
      'primary-hover': '#5114c2',
      'white': '#FFFFFF',
      'black': '#000000',
      'danger': '#FF3E33',
      'danger-hover': '#FF261A',
      'success': '#2DD269',
      'success-hover': '#28BD5E',
    },
  },
  plugins: [],
}

