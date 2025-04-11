import type { Meta, StoryObj } from '@storybook/react'
// import { expect, userEvent, within } from '@storybook/test'

import TagButton from '../components/TagButton'

const meta = {
  title: 'Button/TagButton',
  component: TagButton,
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
    isChecked: { control: 'boolean', description: '활성화 여부' },
    children: { control: 'text', description: '타이틀' },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
} satisfies Meta<typeof TagButton>

export default meta
type Story = StoryObj<typeof meta>

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {
  args: {
    isChecked: false,
    children: 'Button',
    onClick: () => {},
  },
}
