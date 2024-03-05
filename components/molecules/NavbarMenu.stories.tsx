import type { Meta, StoryObj } from "@storybook/react";

import { MenuItem } from "./NavbarMenu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary: Story = {
  args: {},
};
