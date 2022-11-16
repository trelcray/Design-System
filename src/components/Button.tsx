import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonRootProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

ButtonRoot.displayName = "Button.Root";

function ButtonRoot({ children, className }: IButtonRootProps) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center bg-gray-400 rounded font-semibold text-black text-sm transition-colors hover:bg-gray-700 focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface IButtonIconProps {
  children: ReactNode;
  className?: string;
}

ButtonIcon.displayName = "Button.Icon";

function ButtonIcon({ children, className }: IButtonIconProps) {
  return (
    <Slot className={clsx("w-6 h-6 text-gray-100", className)}>{children}</Slot>
  );
}

export interface IButtonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

ButtonButton.displayName = "Button.Button";

function ButtonButton({
  children,
  asChild,
  className,
  ...props
}: IButtonButtonProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <button  className={clsx("bg-trasparent flex justify-center w-full py-2 outlined", className)} {...props}>
      <Comp className={clsx("text-md flex gap-1 items-center text-white", className)}>{children}</Comp>
    </button>
  );
}

export const Button = {
  Root: ButtonRoot,
  Button: ButtonButton,
  Icon: ButtonIcon,
};
