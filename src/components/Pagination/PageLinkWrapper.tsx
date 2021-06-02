import React from 'react'
import classnames from 'classnames'

export default function PageLinkWrapper({
  children,
  show = true,
  hideOnSmallScreens = false,
}: {
  children: React.ReactElement | string
  show?: boolean
  hideOnSmallScreens?: boolean
}): React.ReactElement | null {
  return show ? (
    <li
      className={classnames('w-10 h-10 rounded-full', {
        'hidden md:inline': hideOnSmallScreens,
      })}
      data-testid="page-link-wrapper"
    >
      {children}
    </li>
  ) : null
}
