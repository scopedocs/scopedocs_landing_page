import { Chat } from ".";

export default {
  title: "Components/Chat",
  component: Chat,

  argTypes: {
    format: {
      options: ["outline", "stroke"],
      control: { type: "select" },
    },
    weight: {
      options: ["duotone", "regular", "thin", "bold", "fill", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    format: "outline",
    weight: "duotone",
  },
};
