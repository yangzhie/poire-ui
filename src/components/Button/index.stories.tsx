import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // Needed to generate page docs
};

export default meta;

type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   // Inputs the button takes
//   args: {
//     children: "Click here",
//     variant: "solid",
//     size: "md",
//     colorScheme: "primary",
//   },
// };

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};