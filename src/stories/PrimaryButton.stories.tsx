import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'

import PrimaryButton from '../components/PrimaryButton'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {
      control: 'select',
      description: '테마',
      options: ['dark', 'light', 'social', 'text'],
      defaultValue: 'primary',
    },
    isDisabled: {
      control: 'boolean',
      description: '활성화 여부',
      defaultValue: true,
    },
    children: {
      control: 'text',
      description: '버튼 text',
      defaultValue: 'Button',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof PrimaryButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    theme: 'dark',
    isDisabled: false,
    onClick: () => {},
  },
}

export const Dark: Story = {
  args: {
    children: 'Button',
    theme: 'dark',
    isDisabled: false,
    onClick: () => {},
  },
}

export const light: Story = {
  args: {
    children: 'Button',
    theme: 'light',
    isDisabled: false,
    onClick: () => {},
  },
}

export const Social: Story = {
  args: {
    children: 'Button',
    theme: 'social',
    isDisabled: false,
    onClick: () => {},
  },
}

export const Text: Story = {
  args: {
    children: 'Button',
    theme: 'text',
    isDisabled: false,
    onClick: () => {},
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    theme: 'dark',
    isDisabled: true,
    onClick: () => {},
  },
}
