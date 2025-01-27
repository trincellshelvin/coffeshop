import React from 'react';
import Button from './Button'; // Or adjust based on your file structure

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const OrderNow = Template.bind({});
OrderNow.args = {
  label: 'Order Now',
  handleClick: () => alert('Button clicked!'), // Provide the handleClick function
};

