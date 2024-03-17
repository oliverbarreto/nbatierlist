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
        "secondary-black": "#201f1f",
        "primary-turqoise": "#50c9ce",
        "primary-blue": "#72a1e5",
        "primary-purple": "#9883e5",
        "primary-yellow": "#e5c687",
        "tier-goat": "#ed7d76",
        "tier-A": "#f4ba7a",
        "tier-B": "#f9dc7d",
        "tier-C": "#fffe81",
        "tier-D": "#c5fc7f",
        "tier-E": "#D8F9AE",
        // "tier-F": "#F7F7AA",
        // "tier-F": "#94f5f7",
        "tier-F": "#98c7fc",
      },
      plugins: [],
    },
  },
  plugins: [],
}
export default config
