import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const body = style({
  display: "grid",
  gridTemplateAreas: `
  'main'
  'footer'
  `,
  gridTemplateColumns: "100%",
  gridTemplateRows: "1fr auto",
  minHeight: "100vh",
  backgroundColor: theme.color.DVBlue,
});

export const main = style({
  gridArea: "main",
  maxWidth: "680px",
  width: "100%",
  margin: "auto",
});

export const footer = style({
  gridArea: "footer",
  padding: "20px",
});
