import { HTMLAttributes } from "react";

export interface MovieContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
