import React, { useMemo, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import dompurify from 'dompurify'

import PageTitle from '../components/PageTitle'
import Alert from '../components/Alert'
import Loader from '../components/Loader'
import useApiFetch from '../hooks/useApiFetch'
import { NewsItem } from '../utils/types'

export default function Article(): React.ReactElement {
  const { slug } = useParams<{ slug: string }>()
  const { call, loading, data, error } = useApiFetch<NewsItem>({
    endpoint: `news/item/${slug}`,
    method: 'get',
  })

  useEffect(() => {
    call()
  }, [call])

  const content = useMemo(
    () => dompurify.sanitize(data ? data.content : ''),
    [data]
  )
  return (
    <>
      {data && <PageTitle text={data.healine} subtitle={data.subhealine} />}
      <Loader show={loading} />
      <Alert
        show={!!error}
        message="An error occurred, please try again later"
      />
      {data && (
        <div className="w-full mb-10">
          {data.description && (
            <p className="text-center mb-5 text-xl">{data.description}</p>
          )}
          {data.image && (
            <img
              src={data.image}
              alt={data.description ?? data.subhealine}
              draggable={false}
              className="object-cover w-full"
            />
          )}
          <p className="mb-10">
            <Link to={`/category/${slug}`} className="link">
              {data.category}
            </Link>{' '}
            - {data.date}
            {data.location && `, ${data.location}`}
          </p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <p className="mt-5">
            Source:{' '}
            <a
              href={data.url}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Economist
            </a>
          </p>
        </div>
      )}
    </>
  )
}
