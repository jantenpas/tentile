import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    closeOnBackdrop: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

function ModalDemo(props: Partial<React.ComponentProps<typeof Modal>>) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...props} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const Default: Story = {
  render: () => (
    <ModalDemo title="Modal title">
      <p>This is the modal body. Add any content here.</p>
    </ModalDemo>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <ModalDemo
      title="Confirm action"
      footer={
        <>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </>
      }
    >
      <p>Are you sure you want to do this? This action cannot be undone.</p>
    </ModalDemo>
  ),
}

export const Small: Story = {
  render: () => (
    <ModalDemo title="Small modal" size="sm">
      <p>A compact modal for simple messages.</p>
    </ModalDemo>
  ),
}

export const Large: Story = {
  render: () => (
    <ModalDemo title="Large modal" size="lg">
      <p>A wider modal for richer content like forms or data tables.</p>
    </ModalDemo>
  ),
}

export const NoTitle: Story = {
  render: () => (
    <ModalDemo>
      <p>A modal without a title, just content and a close button.</p>
    </ModalDemo>
  ),
}

export const NoBackdropClose: Story = {
  render: () => (
    <ModalDemo title="Must use close button" closeOnBackdrop={false}>
      <p>Clicking the backdrop won't close this modal. Use the × button.</p>
    </ModalDemo>
  ),
}
