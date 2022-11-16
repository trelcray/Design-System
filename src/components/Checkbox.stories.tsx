import { Meta, StoryObj} from '@storybook/react';
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
    title: 'components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <label className='text-gray-100 select-none'>lembrar de mim por 30 dias </label>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};