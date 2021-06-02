import React from 'react'

export default function Alert({
  message,
  show = true,
}: {
  message: string
  show?: boolean
}): React.ReactElement | null {
  return show ? (
    <div
      className="bg-red-100 border border-red-400 text-error px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block sm:inline" data-testid="alert-message">
        {message}
      </span>
    </div>
  ) : null
}
