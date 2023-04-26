import type { Meta, StoryObj } from '@storybook/react';

import MyButton from '../MyButton/MyButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/MyButton',
  component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RedBtn: Story = {
  args: {
    children: 'Button',
    color: 'red'
  },
};
export const BigRedBtn: Story = {
  args: {
    children: 'Button',
    color: 'red',
    big: true
  },
};
export const GreenBtn: Story = {
  args: {
    children: 'Button',
    color: 'green'
  },
};
export const BigGreenBtn: Story = {
  args: {
    children: 'Button',
    color: 'green',
    big: true
  },
};

