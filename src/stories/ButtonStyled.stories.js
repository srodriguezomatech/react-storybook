/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ButtonStyled from "../components/atoms/ButtonStyled";

export default {
  title: "Atoms/ButtonStyled",
  component: ButtonStyled,
  argTypes: {
    label: {
      control: 'text',
    },    
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => <ButtonStyled {...args} />;

export const Basic = Template.bind({});
Basic.args = { 
  label: 'Nom del button',
  variant: 'primary',
  size: 'medium',
};



