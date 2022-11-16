import { Meta, StoryObj } from "@storybook/react";
import { Progress, IProgressProps } from "./Progress";

export default {
  title: "components/Progress",
  component: Progress,
  args: {},
  argTypes: {
    children: {
      table: {
          disable: true,
      }
  },
  },
  decorators: [],
} as Meta<IProgressProps>;

export const Default: StoryObj<IProgressProps> = {};
