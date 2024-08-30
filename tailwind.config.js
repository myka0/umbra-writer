import typography from "@tailwindcss/typography";

const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  safelist: "dark",
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add your custom font here
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.neutral.50"),
            "--tw-prose-headings": theme("colors.neutral.50"),
            "--tw-prose-bold": theme("colors.neutral.50"),
            "--tw-prose-links": theme("colors.neutral.50"),
            "--tw-prose-code": theme("colors.neutral.50"),
            "--tw-prose-quotes": theme("colors.neutral.50"),
            "--tw-prose-bullets": theme("colors.neutral.50"),
            "--tw-prose-counters": theme("colors.neutral.50"),
            "--tw-prose-pre-code": theme("colors.neutral.50"),
            "--tw-prose-pre-bg": theme("colors.neutral.850"),

            li: {
              p: {
                margin: 0,
              },
            },
            code: {
              "background-color": theme("colors.neutral.850"),
              "border-radius": "0.4rem",
              "font-size": "0.85rem",
              "font-family": "JetBrainsMono, monospace",
              "font-weight": "500",
              padding: "0.25em 0.3em",
            },
            pre: {
              "border-radius": "0.5rem",
              "font-family": "JetBrainsMono, monospace",
              margin: "1.5rem 0",
              padding: "0.75rem 1rem",

              code: {
                "font-size": "0.8rem",
                background: "none",
                color: "inherit",
                padding: 0,
              },
            },
            blockquote: {
              "border-left": "3px solid",
              "border-color": theme("colors.indigo.700"),
              background: theme("colors.neutral.750"),
              padding: "0.5rem 0rem 0.5rem 1rem",
              margin: "1.5rem 0",
            },

            hr: {
              "border-top": "1px solid",
              "border-color": theme("colors.neutral.500"),
              margin: "2rem 0",
            },
          },
        },
      }),
      colors: {
        neutral: {
          750: "#333333",
          850: "#1E1E1E",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate, require("@tailwindcss/typography")],
};
