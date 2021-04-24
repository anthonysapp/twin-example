module.exports = {
  theme: {
    fontFamily: {
      "sans-serif": ["Arial", "sans-serif"],
      body: ["Arial", "sans-serif"],
      headings: ["Arial", "sans-serif"],
    },
    extend: {
      colors: {
        current: `currentColor`,
        transparent: `transparent`,
        bg: `var(--color-bg)`,
        text: `var(--color-body)`,
        text: `var(--color-body)`,
        body: `var(--color-body)`,
        hover: `var(--color-hover)`,
        highlight: `var(--color-highlight)`,
        headings: `var(--color-headings)`,
        primary: `var(--color-primary)`,
        secondary: `var(--color-secondary)`,
        inverse: `var(--color-inverse)`,
        facebook: `#2753a7`,
        twitter: `#55acee`,
        pinterest: `#cd242b`,
        youtube: `#cd201f`,
        instagram: `#326189`,
        linkedin: `#0274b3`,
        grid: "#00FFFF",
      },
      scale: {
        "102-5": "1.025",
        105: "1.05",
        115: "1.15",
        120: "1.2",
        130: "1.3",
        140: "1.4",
      },
      spacing: {
        // grid
        "gutter-1/2": "var(--gutter-half)",
        gutter: "var(--gutter)",
        "gutter-2": "var(--gutter-2)",
        full: "100%",
        130: "130%",
        140: "140%",
        150: "150%",
        200: "200%",
        250: "250%",
        300: "300%",
        "2px": "2px",
        "screen/2": "50vw",
        screenw: "100vw",
        "1/2": "50%",

        //columns
        "1/2": `${(1 / 2) * 100}%`,
        "1/3": `${(1 / 3) * 100}%`,
        "1/4": `${(1 / 4) * 100}%`,
        "1/5": `${(1 / 5) * 100}%`,
        "1/6": `${(1 / 6) * 100}%`,
        "1/8": `${(1 / 8) * 100}%`,
        "1/10": `${(1 / 10) * 100}%`,
        "2/10": `${(2 / 10) * 100}%`,
        "3/10": `${(3 / 10) * 100}%`,
        "4/10": `${(4 / 10) * 100}%`,
        45: `${(4.5 / 10) * 100}%`,
        "5/10": `${(5 / 10) * 100}%`,
        "6/10": `${(6 / 10) * 100}%`,
        "7/10": `${(7 / 10) * 100}%`,
        "8/10": `${(8 / 10) * 100}%`,
        "9/10": `${(9 / 10) * 100}%`,
        "1/12": `${(1 / 12) * 100}%`,
        cta: `79.354838709%`,
        "cta-lg": `79.354838709%`,
        cta3: `90.634441087%`,
        "cta3-lg": `120.588235294%`,
        sparkClip: `${Math.round(35 * 1.97402597403)}px`,
        "sparkClip-md": `${Math.round(56 * 1.97402597403)}px`,
        "sparkClip-lg": `${Math.round(77 * 1.97402597403)}px`,
      },
      transitionProperty: {
        spacing: "margin, padding",
        gpu: "opacity, transform",
        button: "color, background-color, box-shadow",
        card: "box-shadow",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
      },
      transitionTimingFunction: {
        "in-sine": "cubic-bezier(0.12, 0, 0.39, 0)",
        "out-sine": "cubic-bezier(0.61, 1, 0.88, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-quart": "cubic-bezier(0.5, 0, 0.75, 0)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
        "out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
        "in-quint": "cubic-bezier(0.64, 0, 0.78, 0)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      opacity: { 90: "90%" },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};