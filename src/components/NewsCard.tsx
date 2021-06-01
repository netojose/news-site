import React from 'react'
import { Link } from 'react-router-dom'

import { NewsSumaryItem } from '../utils/types'
import placeholder from '../assets/images/placeholder.png'

export default function NewsCard({
  item: { title, uri, excerpt, header, image },
}: {
  item: NewsSumaryItem
}): React.ReactElement {
  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Link to={`/article${uri}`}>
            <img
              className="h-48 w-full object-cover md:w-48"
              src={image ?? placeholder}
              alt={excerpt ?? title}
              loading="lazy"
            />
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
