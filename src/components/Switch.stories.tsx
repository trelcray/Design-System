import { Meta, StoryObj } from "@storybook/react";
import { Switch, SwitchRootProps } from "./Switch";

export default {
  title: "components/Switch",
  component: Switch.Root,
  args: {
    children: [
      <Switch.Checkbox id="default-toggle" />,
      <Switch.Switch />,
      <Switch.Label>Dark Mode</Switch.Label>,
    ],
    htmlFor: "default-toggle",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<SwitchRootProps>;

export const Default: StoryObj<SwitchRootProps> = {};
