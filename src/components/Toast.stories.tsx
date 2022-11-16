import { Meta, Story, StoryObj } from "@storybook/react";
import { CheckCircle, XCircle } from "phosphor-react";
import { useState } from "react";
import { Button } from "./Button";
import { Progress } from "./Progress";
import { Toast, IToastProviderProps } from "./Toast";

export default {
  title: "components/Toast",
  component: Toast.Provider,
  args: {
    children: [
      <Button.Root>
        <Button.Button>Active Toast</Button.Button>
      </Button.Root>,
      <Toast.Root>
        <div className="flex w-full p-2 justify-between">
          <Toast.Title>Successfully created</Toast.Title>
          <Toast.Action>
            <div>
              <Button.Icon>
                <XCircle className="text-gray-600" />
              </Button.Icon>
            </div>
          </Toast.Action>
          <Toast.Description>
            <div className="flex justify-start w-full gap-2 items-center">
              <Button.Icon className="flex justify-center items-center bg-green-100 rounded-xl">
                <CheckCircle className="text-green-500" />
              </Button.Icon>
              <p>Successfully created</p>
            </div>
          </Toast.Description>
        </div>
        <Progress />
      </Toast.Root>,
    ],
  },
  argTypes: {},
  decorators: [],
} as Meta<IToastProviderProps>;

export const Default: Story<IToastProviderProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <Toast.Provider {...args}>
      <Button.Root>
        <Button.Button onClick={() => setOpen(!open)}>
          Active Toast
        </Button.Button>
      </Button.Root>
      <Toast.Root open={open} onOpenChange={setOpen}>
        <div className="flex w-full p-2 justify-between">
          <Toast.Title>Successfully created</Toast.Title>
          <Toast.Action>
            <div>
              <Button.Icon>
                <XCircle className="text-gray-600" />
              </Button.Icon>
            </div>
          </Toast.Action>
          <Toast.Description>
            <div className="flex justify-start w-full gap-2 items-center">
              <Button.Icon className="flex justify-center items-center bg-green-100 rounded-xl">
                <CheckCircle className="text-green-500" />
              </Button.Icon>
              <p>Successfully created</p>
            </div>
          </Toast.Description>
        </div>
        <Progress />
      </Toast.Root>
    </Toast.Provider>
  );
};
