import type { Meta, StoryObj } from '@storybook/react'
import TagList from '../components/TagList'
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Button/TagList',
  component: TagList,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div className="w-100">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    tagList: {
      control: 'object',
      description: '태그 리스트',
      defaultValue: ['Tag1', 'Tag2', 'Tag3'],
    },
    onTagClick: {
      action: 'clicked',
      description: '태그 클릭 이벤트',
    },
  },
} satisfies Meta<typeof TagList>

export default meta
type Story = StoryObj<typeof meta>

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {
  args: {
    tagList: ['강남', '강북', '강서', '강동'],
    onTagClick: () => {},
  },
}
