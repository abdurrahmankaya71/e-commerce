/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-white": "#fff",
        lightsteelblue: "#bcddfe",
        silver: {
          "100": "#c1c8ce",
          "200": "rgba(196, 196, 196, 0)",
        },
        gray1: {
          "100": "#969393",
          "200": "#262626",
          "300": "#22262a",
          "400": "rgba(38, 38, 38, 0.25)",
          "500": "rgba(34, 34, 34, 0.3)",
          "600": "rgba(34, 38, 42, 0.35)",
          "700": "rgba(38, 38, 38, 0.5)",
          "800": "rgba(38, 38, 38, 0.35)",
        },
        "primary-blue": "#41c0ff",
        crimson: "#ff4858",
        "primary-red": "#fb7181",
        "neutral-grey": "#9098b1",
        "neutral-dark": "#223263",
        cornflowerblue: {
          "100": "#33a0ff",
          "200": "#2e90e5",
        },
        darkslategray: "#373737",
        dodgerblue: "#1a87e6",
        "black-text": "#393939",
        gray: "#999",
        gainsboro: "rgba(223, 222, 222, 0.3)",
        "gray-light": "#dfdede",
        "neutral-light": "#ebf0ff",
      },
      spacing: {},
      fontFamily: {
        "caption-normalbold": "Poppins",
        "proxima-nova": "'Proxima Nova'",
        raleway: "Raleway",
        nunito: "Nunito",
        "font-awesome-5-pro": "'Font Awesome 5 Pro'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        dosis: "Dosis",
      },
      borderRadius: {
        "8xs": "5px",
        "10xs": "3px",
        "6xs": "7px",
        "3xs": "10px",
        "37xl": "56px",
      },
    },
    fontSize: {
      "7xs": "6px",
      sm: "14px",
      lg: "18px",
      xs: "12px",
      xl: "20px",
      base: "16px",
      "3xl": "22px",
      "16xl": "35px",
      "9xl": "28px",
      "2xl": "21px",
      "15xl": "34px",
      "8xl": "27px",
      "5xl": "24px",
      lgi: "19px",
      "36xl": "55px",
      "25xl": "44px",
      "14xl": "33px",
      "11xl": "30px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "3xs": "10px",
      "21xl": "40px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
