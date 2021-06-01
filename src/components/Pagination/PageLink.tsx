import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

export default function PageLink({
  page,
  isActive,
  linkBuilder,
  text,
}: {
  page: number
  isActive?: boolean
  linkBuilder: (page: number) => string
  text?: string
}): React.ReactElement {
  const className = classnames(
    'flex justify-center items-center border w-full h-full rounded-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    {
      'border-royalblue-500 bg-royalblue-500 text-white hover:bg-royalblue-600':
        isActive,
    },
    {
      'border-gray-200 hover:bg-royalblue-100 hover:border-royalblue-100':
        !isActive,
    }
  )

  return (
    <Link className={className} to={linkBuilder(page)}>
      {text ?? page}
    </Link>
  )
}
