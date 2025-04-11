import type { Meta, StoryObj } from '@storybook/react'

import IconButton from '../components/IconButton.tsx'
import { fn } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    alt: { control: 'text', description: '이미지의 alt 속성' },
    iconPath: { control: 'text', description: '이미지 경로' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { alt: '', iconPath: '', onClick: fn },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: '/icons/ic-public-delete-dark.svg',
  },
}
