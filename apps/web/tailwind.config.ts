import type { Config } from "tailwindcss";
import xjectroPreset from "@xjectro/react/tailwind.preset";

const config: Config = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  presets: [xjectroPreset],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
};

export default config;
