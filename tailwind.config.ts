import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dop: {
          DEFAULT: "#FFDC00",
          hover: "#9F8900",
        },
        camOp: {
          DEFAULT: "#B762EB",
          hover: "#743D96",
        },
        neutral: {
          DEFAULT: "#FFFFFF",
          hover: "#8B8B8B",
        },
      },
      fontSize: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
