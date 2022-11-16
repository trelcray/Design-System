import { Meta, StoryObj } from "@storybook/react";
import { PlusCircle } from "phosphor-react";
import { Button, IButtonButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button.Root,
  args: {
    children: [
      <Button.Button>
        <Button.Icon>
          <PlusCircle />
        </Button.Icon>
        Adicionar
      </Button.Button>,
    ],
  },
  argTypes: {},
} as Meta<IButtonButtonProps>;

export const Default: StoryObj<IButtonButtonProps> = {};

export const WithOutIcon: StoryObj<IButtonButtonProps> = {
  args: {
    children: <Button.Button>adicionar</Button.Button>,
  },
};
