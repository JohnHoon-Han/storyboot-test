// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react'

import { userEvent, within, fn } from '@storybook/test'

import LoginForm from '../components/LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'Forms/LoginForm',
  parameters: {
    layout: 'centered',
  },
  component: LoginForm,
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof LoginForm>

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Submitted: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByTestId('email')
    const passwordInput = canvas.getByTestId('password')

    await step('Enter credentials', async () => {
      await userEvent.type(emailInput, 'hi@example.com')
      await userEvent.type(passwordInput, 'supersecret')
    })

    const loginButton = canvas.getByRole('button', { name: '로그인' })

    await step('Submit form', async () => {
      await userEvent.click(loginButton)
    })

    // 👇 Now we can assert that the onSubmit arg was called
    // await waitFor(() => expect(args.onSubmit).toHaveBeenCalled())
  },
}

export const Emptied: Story = {}
