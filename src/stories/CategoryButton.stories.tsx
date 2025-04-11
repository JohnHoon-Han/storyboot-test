import type { Meta, StoryObj } from '@storybook/react'
// import { expect, userEvent, within } from '@storybook/test'

import CategoryButton from '../components/CategoryButton'

const meta = {
  title: 'Button/CategoryButton',
  component: CategoryButton,
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
    iconPath: { control: 'text', description: '이미지 경로' },
    iconAlt: { control: 'text', description: '이미지 Alt 속성' },
    text: { control: 'text', description: '타이틀' },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
} satisfies Meta<typeof CategoryButton>

export default meta
type Story = StoryObj<typeof meta>

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {
  args: {
    iconAlt: '카테고리',
    iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-category.svg',
    text: '카테고리',
    onClick: () => {},
  },
}
