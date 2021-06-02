import React from 'react'
import { Helmet } from 'react-helmet-async'
import classnames from 'classnames'

export default function PageTitle({
  text,
  subtitle,
}: {
  text: string
  subtitle?: string
}): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>{text}</title>
      </Helmet>
      <h1
        className={classnames(
          'text-2xl font-bold leading-7 text-center text-gray-900 sm:text-3xl mt-10',
          { 'mb-10': !subtitle }
        )}
        data-testid="pageTitle-title"
      >
        {text}
      </h1>
      {subtitle && (
        <h2
          className="text-2xl text-center sm:text-3xl mb-10"
          data-testid="pageTitle-subtitle"
        >
          {subtitle}
        </h2>
      )}
    </>
  )
}
