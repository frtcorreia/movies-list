import { ButtonHTMLAttributes } from "react";

export interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
