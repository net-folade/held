import type { Config } from "tailwindcss";

// "Low Ember" brand palette — see design/brand.html in the prototype repo.
// No pure white, no pure black, anywhere.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clay: "#F4EADD", // page background
        paper: "#F7EFE3", // cards, inputs
        sand: "#E4D3BE", // borders, dividers
        "sand-deep": "#D9C3AC", // chip borders
        "clay-deep": "#EBDEC9", // active nav pill
        espresso: "#32211A", // headlines, primary text
        bark: "#6D5240", // body text
        "bark-soft": "#7C614A", // secondary body text
        fawn: "#8A6B50", // muted labels, meta
        ember: "#B4502F", // CTAs, accents, links
        "ember-deep": "#9C3F21", // CTA hover
        "ember-link": "#8F3C20", // link hover
        peach: "#E28D60", // the breathing gradient
        sage: "#7A8B6F", // "always" accents, gentle success
      },
      fontFamily: {
        serif: ["var(--font-literata)", "Iowan Old Style", "Georgia", "serif"],
        sans: ["var(--font-albert)", "Segoe UI", "system-ui", "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1) translate(0,0)", opacity: "0.7" },
          "50%": { transform: "scale(1.13) translate(2%,-3%)", opacity: "1" },
        },
        fadeup: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // One radial gradient per page, breathing at the pace of slow breath.
        breathe: "breathe 12s ease-in-out infinite",
        "breathe-slow": "breathe 13s ease-in-out infinite",
        "breathe-late": "breathe 11s ease-in-out infinite 1s",
        fadeup: "fadeup 0.5s ease both",
        "fadeup-fast": "fadeup 0.35s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
