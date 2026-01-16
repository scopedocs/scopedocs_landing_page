import { DotsThreeOutline } from ".";

export default {
  title: "Components/DotsThreeOutline",
  component: DotsThreeOutline,

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
