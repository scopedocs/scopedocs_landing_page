import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    size: {
      options: ["large", "normal"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "outlined", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIconPlay: true,
    text: "Button",
    size: "large",
    type: "primary",
    className: "",
    textClassName: "",
  },
};
