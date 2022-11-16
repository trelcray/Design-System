import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center rounded cursor-text bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

TextInputIcon.displayName = "TextInput.Icon";

function TextInputIcon({ children, className, asChild }: TextInputIconProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp className={clsx("flex items-center cursor-text ml-2 text-gray-400", className)}>
      {children}
    </Comp>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
TextInputInput.displayName = "TextInput.Input";

function TextInputInput({ className, ...props }: TextInputInputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent w-full py-3 pl-1 text-gray-100 text-xs outline-none placeholder:text-gray-400",
        className
      )}
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
