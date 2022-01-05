export type TypographyElementTypes = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
export type TypographyProps = {
  children: JSX.Element | JSX.Element[] | string;
  type?: TypographyElementTypes;
  className?: string;
  center?: boolean;
  color?: string;
  align?: "left" | "right";
};
