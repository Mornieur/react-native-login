// import { Input } from '../global/components/Input'
// import { Meta, StoryObj } from '@storybook/react'
// import * as S from './styles'
// import { withKnobs } from '@storybook/addon-knobs'
// import { expect } from '@storybook/jest'
// import { within, userEvent } from '@storybook/testing-library'
// import React from 'react'

// const input: Meta<typeof Input> = {
//   title: 'Global/components/Input',
//   component: Input,

//   decorators: [
//     ({ story, context }: any) => {
//       const { className, onKeyDown, children } = context.args
//       return (
//         <S.Container
//           className={className ? className : ''}
//           onKeyDown={onKeyDown as any}
//         >
//           <S.SimpleContainer>
//             <p>{children}</p>
//           </S.SimpleContainer>
//         </S.Container>
//       )
//     },
//     withKnobs
//   ]
// }
// export default input
// type Story = StoryObj<typeof Input>

// export const Primary: Story = {
//   play: async ({ canvasElement }: any) => {
//     const canvas = within(canvasElement)

//     await userEvent.click(canvas.getByRole('input'))
//     await expect(canvas.getByText('Input')).toBeInTheDocument()
//   }
// }

import { Input } from '../global/components/Input'

export default {
  title: 'Task',
  component: Input,
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' }
  }
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Input',
      state: 'TASK_INBOX'
    }
  }
}
