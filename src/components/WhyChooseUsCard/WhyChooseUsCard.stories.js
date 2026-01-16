import { WhyChooseUsCard } from ".";

export default {
  title: "Components/WhyChooseUsCard",
  component: WhyChooseUsCard,

  argTypes: {
    version: {
      options: ["two", "four", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    version: "two",
    className: "",
    iconContainerClassName: "",
    contentClassName: "",
    contentClassNameOverride: "",
    text: "User-Friendly Interface",
    text1:
      "Enjoy an intuitive and clean design that makes managing tasks simple, even for first-time users.",
    text2: "Customizable Workflows",
    text3:
      "Adapt workflows to match your specific processes, ensuring maximum efficiency and flexibility.",
    text4: "Real-Time Collaboration",
    text5:
      "Collaborate effortlessly with your team, share updates, and track progress together from anywhere.",
    caretright4Color: "#FAFAFA",
    text6: "Detailed Analytics",
    text7:
      "Gain valuable insights with in-depth reports and analytics to track your progress and optimize productivity.",
    textClassName: "",
  },
};
