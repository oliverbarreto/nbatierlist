import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#2e382e",
        "primary-turqoise": "#50c9ce",
        "primary-blue": "#72a1e5",
        "primary-purple": "#9883e5",
        "primary-yellow": "#e5c687",
      },
      plugins: [],
    },
  },
  plugins: [],
}
export default config
