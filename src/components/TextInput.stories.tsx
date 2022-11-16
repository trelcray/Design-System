import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children:
            [
                <TextInput.Icon>
                    <Envelope className='h-6 w-6' />
                </TextInput.Icon>,

                <TextInput.Input placeholder='Type your e-mail address' />
            ]

    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithOutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input className='pl-3' placeholder='Type your e-mail address' />
    }
};