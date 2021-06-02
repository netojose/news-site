import React, { useMemo, useEffect, useCallback } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import PageTitle from '../../components/PageTitle'
import Pagination from '../../components/Pagination'
import NewsCard from '../../components/NewsCard'
import Loader from '../../components/Loader'
import Alert from '../../components/Alert'
import useApiFetch from '../../hooks/useApiFetch'
import { CategoryList as CategoryListInterface } from '../../utils/types'

export default function CategoryList(): React.ReactElement {
  const { search } = useLocation()
  const { slug } = useParams<{ slug: string }>()
  const { call, loading, data, error } = useApiFetch<CategoryListInterface>({
    endpoint: `news/${slug}`,
    method: 'get',
  })

  const page = useMemo(
    () => +(new URLSearchParams(search).get('page') ?? 1),
    [search]
  )

  useEffect(() => {
    call({ params: { page: String(page) } })
  }, [call, page])

  const linkBuilder = useCallback(
    (n: number) => `/category/the-world-this-week?page=${n}`,
    []
  )

  const totalPages = data?.pagination.totalPages ?? 1

  return (
    <>
      <PageTitle text={data ? data.categoryTitle : 'Loading...'} />
      <Loader show={loading} />
      <Alert
        show={!!error}
        message="An error occurred, please try again later"
      />
      {data && (
        <ul className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {data.items.map((item) => (
            <li key={item.uri}>
              <NewsCard item={item} />
            </li>
          ))}
        </ul>
      )}
      <Pagination
        page={page}
        totalPages={totalPages}
        linkBuilder={linkBuilder}
      />
    </>
  )
}
