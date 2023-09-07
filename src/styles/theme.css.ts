import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    DVBlue: "#1f2937",
    DVOrange: "#efa35d",
    white: "#ffffff",
  },
  space: {
    spacing01: "4px",
    spacing02: "8px",
    spacing03: "12px",
    spacing04: "16px",
    spacing05: "20px",
    spacing06: "24px",
    spacing07: "28px",
    spacing08: "32px",
    spacing09: "40px",
  },
  borderRadius: {
    default: "8px",
  },
});
