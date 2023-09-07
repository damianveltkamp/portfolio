import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const link = style({
  padding: theme.space.spacing05,
  backgroundColor: theme.color.DVOrange,
  textDecoration: "none",
  textAlign: "center",
  color: theme.color.DVBlue,
  borderRadius: theme.borderRadius.default,
  fontSize: "2.2rem",
});
