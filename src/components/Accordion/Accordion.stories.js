import { Accordion } from ".";

export default {
  title: "Components/Accordion",
  component: Accordion,

  argTypes: {
    property1: {
      options: [
        "variant-12",
        "variant-5",
        "variant-11",
        "variant-2",
        "version-1",
        "variant-3",
        "variant-4",
        "variant-8",
        "variant-7",
        "variant-6",
        "variant-10",
        "variant-9",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-12",
    className: "",
    vectorClassName: "",
    vector: "/img/vector-6.svg",
    headlineIconClassName: "",
    descriptionClassName: "",
  },
};
