import { Meta, StoryObj } from "@storybook/react";
import { Alert, IAlertProps } from "./Alert";

export default {
  title: "components/Alert",
  component: Alert,
  args: {},
  argTypes: {
    children: {
      table: {
          disable: true,
      }
  },
  },
  decorators: [],
} as Meta<IAlertProps>;

export const Default: StoryObj<IAlertProps> = {};