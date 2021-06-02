import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import AppContext from '../../contexts/app'

const MenuItem = ({
  to,
  label,
}: {
  to: string
  label: string
}): React.ReactElement => {
  const { pathname } = useLocation()
  const isActive = pathname === to
  return (
    <li
      className={isActive ? 'mr-6 p-1 border-b-2 border-gray-100' : 'mr-6 p-1'}
    >
      <Link
        to={to}
        className={
          isActive
            ? 'text-royalblue-200 cursor-default'
            : 'text-white hover:text-royalblue-300'
        }
      >
        {label}
      </Link>
    </li>
  )
}

export default function Navigation(): React.ReactElement {
  const appContext = useContext(AppContext)
  return (
    <div className="flex flex-col md:flex-row md:px-10 justify-between items-center py-4 bg-royalblue-600">
      <div className="flex-shrink-0 flex items-center flex-col md:flex-row">
        <Link to="/" className="cursor-pointer">
          <span className="ml-1 text-3xl text-white font-semibold">
            Economist
          </span>
        </Link>
        {appContext.user && (
          <span className="text-white md:pl-10">
            Hello, {appContext.user.name}
          </span>
        )}
      </div>
      <ul className="flex overflow-x-hidden font-semibold">
        <MenuItem to="/" label="Home" />
        {!!appContext.user ? (
          <MenuItem to="/logout" label="Logout" />
        ) : (
          <>
            <MenuItem to="/register" label="Register" />
            <MenuItem to="/login" label="Login" />
          </>
        )}
      </ul>
    </div>
  )
}
