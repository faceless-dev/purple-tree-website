import { ButtonVariants } from "./enums";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariants;
  scrollDownOnClick?: boolean;
}
