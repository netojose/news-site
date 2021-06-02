import React from 'react'
import { Link } from 'react-router-dom'

export default function GuestAdvice(): React.ReactElement {
  return (
    <section
      className="w-full sm:w-2/3 xl:w-1/3 m-auto p-5 shadow-md"
      data-testid="guest-advice"
    >
      <h2 className="text-2xl text-center">Warning</h2>
      <p>This section is just for members.</p>
      <p>
        If you already is a member, go to{' '}
        <Link to="/login" className="link">
          login
        </Link>{' '}
        page. If you aren&apos;t a member yet, go to{' '}
        <Link to="/register" className="link">
          register
        </Link>{' '}
        page.
      </p>
    </section>
  )
}
