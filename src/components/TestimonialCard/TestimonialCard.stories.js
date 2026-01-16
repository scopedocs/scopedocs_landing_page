import { TestimonialCard } from ".";

export default {
  title: "Components/TestimonialCard",
  component: TestimonialCard,

  argTypes: {
    version: {
      options: ["three", "four", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    version: "three",
    className: "",
    logo: "/img/logo.svg",
    text: "&#34;The AI-powered task prioritization and easy-to-use interface have helped me stay organized, meet deadlines, and reduce stress. I can’t imagine working without it!&#34;",
    avatarClassName: "",
    vectorClassName: "",
    vector: "/img/vector-12.svg",
    text1: "Sarah Thompson",
    text2: "COO",
    img: "/img/logo-1.svg",
    logoClassName: "",
  },
};
