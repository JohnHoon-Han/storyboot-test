import type { Meta, StoryObj } from '@storybook/react'

import DefaultTextField from '../components/DefaultTextField.tsx'
import { fn } from '@storybook/test'
import icon from '/icons/ic-public-delete-dark.svg'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    iconAlt: { control: 'text', description: '이미지의 alt 속성' },
    iconPath: { control: 'text', description: '이미지 경로' },
    errorMessage: {
      control: 'text',
      description: '에러 메세지',
      defaultValue: '텍스트를 확인해주세요',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder',
      defaultValue: '텍스트를 입력해주세요',
    },
    value: { control: 'text', description: '이미지 경로' },
    isError: {
      control: 'boolean',
      description: '에러 유무',
      defaultValue: false,
    },
    onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    onChange: { action: 'changed', description: '텍스트 변경 이벤트' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    iconAlt: '',
    iconPath: '',
    onIconClick: fn,
    errorMessage: '',
    placeholder: '',
    onChange: fn,
    value: '',
    isError: false,
  },
} satisfies Meta<typeof DefaultTextField>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    iconAlt: 'icon',
    iconPath: icon,
    errorMessage: '텍스트를 확인해주세요',
    value: '',
    placeholder: '텍스트를 입력해주세요',
    id: 'text-filed',
  },
}
