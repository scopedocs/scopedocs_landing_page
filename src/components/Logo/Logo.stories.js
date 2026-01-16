import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,

  argTypes: {
    state: {
      options: ["white", "colored"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLogo: true,
    companyName: "Logo",
    state: "white",
    className: "",
    fillClassName: "",
    fill: "/img/fill-1-1.svg",
    fillClassNameOverride: "",
    img: "/img/fill-3-1.svg",
    fill1: "/img/fill-2-2.svg",
  },
};
