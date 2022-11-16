import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // example props
  // title: 'Title lorem ipsun',
  // text: 'Description Description Description Description',
};