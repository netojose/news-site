import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'

import PageTitle from '../components/PageTitle'
import Loader from '../components/Loader'
import useApiFetch from '../hooks/useApiFetch'
import { Category } from '../utils/types'
import { getToken } from '../utils/auth'

const GuestAdvice = loadable(() => import('../components/GuestAdvice'))

export default function Home(): React.ReactElement {
  const [isGuest, setIsGuest] = useState<boolean>(false)
  const [categories, setCategories] = useState<Array<Category>>()
  const { call, loading } = useApiFetch<Array<Category>>({
    method: 'get',
    endpoint: 'categories',
    onSuccess: setCategories,
    onError: useCallback(() => {
      setIsGuest(true)
    }, []),
  })
  useEffect(() => {
    const token = getToken()
    if (token) {
      call()
    } else {
      setIsGuest(true)
    }
  }, [call])

  return (
    <>
      <PageTitle text="Categories" subtitle="Choose a category" />
      <Loader show={loading} />
      {isGuest && <GuestAdvice />}
      {categories && (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <li
              key={category.slug}
              className="bg-royalblue-400 hover:bg-royalblue-600 transition ease-in-out duration-500 h-12 rounded-md"
            >
              <Link
                to={`/category/${category.slug}`}
                className="flex items-center justify-center h-full text-white text-md font-extrabold"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
