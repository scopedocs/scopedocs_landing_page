import { TopBarLight } from ".";

export default {
  title: "Components/TopBarLight",
  component: TopBarLight,

  argTypes: {
    style: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "dark",
    className: "",
    iconClassName: "",
  },
};
