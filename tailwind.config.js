/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini memberi tahu Tailwind untuk memindai semua file di folder 'src'
  ],
  theme: {
    extend: {
      // Di sinilah kita menambahkan warna custom dari desain
      colors: {
        'brand-green-dark': '#365314', // Untuk footer
        'brand-green-medium': '#5A8E00', // Warna utama (teks, card)
        'brand-green-light': '#92D050', // Untuk tombol dan highlight
        'brand-gray': '#F3F4F6', // Background abu-abu muda
      },
      fontFamily: {
        // Ganti 'Inter' jika kamu menggunakan font spesifik
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}