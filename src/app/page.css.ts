import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const linksContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.space.spacing03,
  paddingInline: "20px",
});
