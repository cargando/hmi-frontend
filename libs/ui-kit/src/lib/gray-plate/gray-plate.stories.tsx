import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { GrayPlate } from './gray-plate';

const Story: ComponentMeta<typeof GrayPlate> = {
  component: GrayPlate,
  title: 'GrayPlate',
};
export default Story;

const Template: ComponentStory<typeof GrayPlate> = (args) => (
  <GrayPlate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
