import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Loader from '../Loader'
import { NewsSumaryItem } from '../../utils/types'
import placeholder from '../../assets/images/placeholder.png'

export default function NewsCard({
  item: { title, uri, excerpt, header, image },
}: {
  item: NewsSumaryItem
}): React.ReactElement {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const handleSetLoaded = useCallback(() => setImageLoaded(true), [])
  return (
    <div
      className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-gray-300 transition ease-in-out duration-500"
      data-testid="news-card-wrapper"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Link to={`/article${uri}`}>
            <div className="h-48 w-full md:w-48">
              {!imageLoaded && (
                <div className="h-48 w-full md:w-48 bg-royalblue-100 flex justify-center items-center">
                  <Loader />
                </div>
              )}
              <img
                className={classnames('h-48 w-full object-cover md:w-48', {
                  invisible: !imageLoaded,
                })}
                src={image ?? placeholder}
                alt={!!excerpt ? excerpt : title}
                onLoad={handleSetLoaded}
                data-testid="news-card-image"
              />
            </div>
          </Link>
        </div>
        <div className="p-8">
          {header && (
            <div className="uppercase tracking-wide text-sm text-royalblue-500 font-semibold">
              {header}
            </div>
          )}
          <Link
            key={uri}
            to={`/article${uri}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </Link>
          {excerpt && <p className="mt-2 text-gray-500">{excerpt}</p>}
        </div>
      </div>
    </div>
  )
}
