// theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  background: {
    100: "#FFFEFF",
  },

  secondary: {
    100: "#fafafa",
  },
  border: {
    100: "#f1f1f1",
  },

  heading: {
    100: "#474747",
  },

  text: {
    100: "hsl(240 ,3.8% ,46.1%)",
  },

  icon: {
    100: "#c6c6c6",
  },

  primary: {
    50: "#e7f1f3",
    100: "#2596c0",
  },
  active: {
    100: "#53d389",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
