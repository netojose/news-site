import React from 'react'

export default function Form({
  children,
  onSubmit,
}: {
  children: React.ReactElement | React.ReactElement[]
  onSubmit: () => void
}): React.ReactElement {
  return (
    <form
      className="bg-gray-100 shadow-sm rounded-md p-8 w-96 m-auto"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}
