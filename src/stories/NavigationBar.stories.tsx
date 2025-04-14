import type { Meta, StoryObj } from '@storybook/react'
// import { expect, userEvent, within } from '@storybook/test'

import NavigationBar from '../components/NavigationBar'

const meta = {
  title: 'NavigationBar/NavigationBar',
  component: NavigationBar,
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
    isDark: { control: 'boolean', description: 'Dark theme' },
    showBackButton: { control: 'boolean', description: '뒤로 가기 활성화' },
    showCloseButton: { control: 'boolean', description: '닫기 버튼 활성화' },
    showTitle: { control: 'boolean', description: '타이틀 활성화' },
    title: { control: 'text', description: '타이틀' },
    onCloseButtonClick: {
      action: 'clicked',
      description: '닫기 버튼 클릭 이벤트',
    },
    onBackButtonClick: {
      action: 'clicked',
      description: '뒤로가기 버튼 클릭 이벤트',
    },
  },
} satisfies Meta<typeof NavigationBar>

export default meta
type Story = StoryObj<typeof meta>

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {
  args: {
    isDark: true,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: '타이틀',
    onCloseButtonClick: () => {},
    onBackButtonClick: () => {},
  },
}

// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement)
//     const loginButton = canvas.getByRole('button', { name: /Log in/i })
//     await expect(loginButton).toBeInTheDocument()
//     await userEvent.click(loginButton)
//     await expect(loginButton).not.toBeInTheDocument()

//     const logoutButton = canvas.getByRole('button', { name: /Log out/i })
//     await expect(logoutButton).toBeInTheDocument()
//   },
// }
