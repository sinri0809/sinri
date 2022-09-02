import React from "react";

import Button from "components/common/Button";

export default {
  title: 'components/common/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "primary",
  className: "btn-primary"
}

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};