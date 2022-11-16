import { Slot } from "@radix-ui/react-slot";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { ReactNode } from "react";

export interface ITooltipProviderProps {
  children: ReactNode;
}

TooltipProvider.displayName = "Tooltip.Provider";

export function TooltipProvider({ children }: ITooltipProviderProps) {
  return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>;
}

export interface ITooltipRootProps {
  children: ReactNode;
}

TooltipRoot.displayName = "Tooltip.Root";

export function TooltipRoot({ children }: ITooltipRootProps) {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
}

export interface ITooltipTriggerProps {
  children: ReactNode;
}

TooltipTrigger.displayName = "Tooltip.Trigger";

export function TooltipTrigger({ children }: ITooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
  );
}

export interface ITooltipPortalProps {
  children: ReactNode;
}

TooltipPortal.displayName = "Tooltip.Portal";

export function TooltipPortal({ children }: ITooltipPortalProps) {
  return <TooltipPrimitive.Portal>{children}</TooltipPrimitive.Portal>;
}
export interface ITooltipContentProps extends TooltipPrimitive.TooltipProps {
  className?: string;
  children?: ReactNode;
  asChild?: boolean;
}

TooltipContet.displayName = "Tooltip.Content";

export function TooltipContet({
  className,
  children,
  asChild,
  ...props
}: ITooltipContentProps) {
  const Comp = asChild ? Slot : "p";
  return (
    <TooltipPrimitive.Content
      className={clsx(
        "z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm duration-300 tooltip dark:bg-gray-700",
        className
      )}
      sideOffset={5}
      {...props}
    >
      <Comp>{children}</Comp>
    </TooltipPrimitive.Content>
  );
}
export interface ITooltipArrowProps {
  className?: string;
}

TooltipArrow.displayName = "Tooltip.Arrow";

export function TooltipArrow({ className, ...props }: ITooltipContentProps) {
  return (
    <TooltipPrimitive.Arrow
      className={clsx("fill-gray-900", className)}
      {...props}
    />
  );
}

export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContet,
  Arrow: TooltipArrow,
};
