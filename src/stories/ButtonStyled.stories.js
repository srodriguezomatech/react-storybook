/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ButtonStyled from "../components/atoms/ButtonStyled";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/ButtonStyled",
  component: ButtonStyled,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonStyled {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  title: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  title: "Secondary",
};
