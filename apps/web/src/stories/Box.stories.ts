import { Box } from '@sekmet/radix-ui-themes';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Qtsn/Box',
  component: Box,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  args: {
    display: 'block',
    width: '9',
    height: '9',
    color: 'red'
  }
};
