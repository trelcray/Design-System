import { Meta, StoryObj} from '@storybook/react';
import { Switch, SwitchRootProps } from "./Switch";

export default {
    title: 'components/Switch',
    component: Switch.Root,
    args: {
        children:
            [
                <Switch.Checkbox id='default-toggle' />,
                <Switch.Switch />,
                <Switch.Text>
                    Professor
                </Switch.Text>
            ],
        htmlFor: "default-toggle"

    },
    argTypes: {},
    decorators: [
    ]
} as Meta<SwitchRootProps>;

export const Default: StoryObj<SwitchRootProps> = {};