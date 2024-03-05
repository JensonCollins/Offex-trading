import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitch } from './ThemeSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'molecules/ThemeSwitch',
  component: ThemeSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof ThemeSwitch>;

export const Primary: Story = {
  args: {},
}
