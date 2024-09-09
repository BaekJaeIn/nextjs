/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 구글에서 불러온 폰트를 사용할 때 이중 따옴표 사용
        title: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [],
};
