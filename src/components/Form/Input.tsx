import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import classnames from 'classnames'

export default function Input({
  label,
  name,
  register,
  placeholder,
  type = 'text',
  required = false,
  autoFocus,
  autoComplete,
  errors = {},
}: {
  label: string
  name: string
  register: UseFormRegister<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  required?: boolean
  autoFocus?: boolean
  autoComplete?: string
  errors?: Record<string, string>
}): React.ReactElement {
  const error = errors[name]
  return (
    <div className="mb-6">
      <label htmlFor={name} className="mb-3 block text-gray-700">
        {label}:
      </label>
      <input
        type={type}
        id={name}
        className={classnames(
          'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full',
          { 'border-error': !!error }
        )}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        {...register(name)}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  )
}
