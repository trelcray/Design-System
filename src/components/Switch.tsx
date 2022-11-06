import { clsx } from "clsx";
import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export interface SwitchRootProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}
SwitchRoot.displayName = "Switch.Root";

export function SwitchRoot({ children, htmlFor }: SwitchRootProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="inline-flex relative items-center cursor-pointer"
    >
      {children}
    </label>
  );
}

export interface SwitchCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}
SwitchCheckbox.displayName = "Switch.Checkbox";

export function SwitchCheckbox({ id }: SwitchCheckboxProps) {
  return <input type="checkbox" value="" id={id} className="sr-only peer" />;
}

export interface SwitchSwitchProps {
  className?: string;
}

SwitchSwitch.displayName = "Switch.Switch";

export function SwitchSwitch({className}: SwitchSwitchProps) {
  return (
    <div className={clsx(
      "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-300"
      , className
      )} />
  );
}

export interface SwitchTextProps {
  children: string;
  className?: string;
}

SwitchText.displayName = "Switch.Text";

export function SwitchText({ children, className }: SwitchTextProps) {
  return (
    <span className={clsx("ml-2 text-sm font-medium text-gray-200", className)}>{children}</span>
  );
}

export const Switch = {
  Root: SwitchRoot,
  Checkbox: SwitchCheckbox,
  Switch: SwitchSwitch,
  Text: SwitchText
}
