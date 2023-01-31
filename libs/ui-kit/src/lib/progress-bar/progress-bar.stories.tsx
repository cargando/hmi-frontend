import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from './progress-bar';

const Story: ComponentMeta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'ProgressBar',
};
export default Story;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
