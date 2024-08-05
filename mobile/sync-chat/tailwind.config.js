/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(240, 10%, 3.9%)",
        card: "hsl(0, 0%, 100%)",
        cardForeground: "hsl(240, 10%, 3.9%)",
        popover: "hsl(0, 0%, 100%)",
        popoverForeground: "hsl(240, 10%, 3.9%)",
        primary: "hsl(240, 5.9%, 10%)",
        primaryForeground: "hsl(0, 0%, 98%)",
        secondary: "hsl(240, 4.8%, 95.9%)",
        secondaryForeground: "hsl(240, 5.9%, 10%)",
        muted: "hsl(240, 4.8%, 95.9%)",
        mutedForeground: "hsl(240, 3.8%, 46.1%)",
        accent: "hsl(240, 4.8%, 95.9%)",
        accentForeground: "hsl(240, 5.9%, 10%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        destructiveForeground: "hsl(0, 0%, 98%)",
        border: "hsl(240, 5.9%, 90%)",
        input: "hsl(240, 5.9%, 90%)",
        ring: "hsl(240, 5.9%, 10%)",
        chart1: "hsl(12, 76%, 61%)",
        chart2: "hsl(173, 58%, 39%)",
        chart3: "hsl(197, 37%, 24%)",
        chart4: "hsl(43, 74%, 66%)",
        chart5: "hsl(27, 87%, 67%)",
      },
      borderRadius: {
        circle: "0.5rem",
      },
    },
  },
  plugins: [],
};
