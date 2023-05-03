/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0098da",

          "secondary": "#121212",

          "accent": "#1F2937",

          "neutral": "#0098da",

          "base-100": "#F9F8FB",

          "success": "#17976C",

          "warning": "#F08C28",

          "error": "#F46783",
        },
      },
      {
        dark: {
          secondary: "#1F2937",
          "base-100": "#121212",
          neutral: "#0098da",
          "base-200": "#1F2937",
          "accent": "#F9F8FB",
        },
      }
    ],
  }
}

