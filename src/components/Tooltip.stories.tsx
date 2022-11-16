import { Meta, StoryObj } from "@storybook/react";
import { PlusCircle } from "phosphor-react";
import { Button } from "./Button";
import { Tooltip, ITooltipProviderProps } from "./Tooltip";

export default {
  title: "components/Tooltip",
  component: Tooltip.Provider,
  args: {
    children: [
      <Tooltip.Root>
        <Tooltip.Trigger>
          <div className="w-7 h-7 rounded-full">
            <Button.Icon>
              <PlusCircle className="w-full h-full bg-cyan-500 text-white rounded-full" />
            </Button.Icon>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            <p>Is a tooltip.</p>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [],
} as Meta<ITooltipProviderProps>;

export const Default: StoryObj<ITooltipProviderProps> = {};
