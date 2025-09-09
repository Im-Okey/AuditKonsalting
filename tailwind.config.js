/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        primaryDark: '#1d4ed8',
        secondary: '#e0f2fe',
        accent: '#7dd3fc',
        background: '#f8fafc',
        textPrimary: '#1e293b',
        textSecondary: '#64748b',
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      }
    },
  },
  plugins: [],
}