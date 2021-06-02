import React from 'react'

export default function Button({
  text,
  disabled = false,
  type = 'submit',
}: {
  text: string
  disabled?: boolean
  type?: 'submit' | 'button'
}): React.ReactElement {
  return (
    <button
      type={type}
      className="py-3 px-12 bg-royalblue-500 hover:bg-royalblue-300 mr-5 rounded-md text-white text-lg focus:outline-none w-full disabled:opacity-50 disabled:cursor-wait"
      disabled={disabled}
      data-testid="button"
    >
      {text}
    </button>
  )
}
