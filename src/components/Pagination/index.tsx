import React from 'react'

import PageLinkWrapper from './PageLinkWrapper'
import PageLink from './PageLink'

export default function Pagination({
  page,
  totalPages,
  offset = 3,
  linkBuilder,
}: {
  page: number
  totalPages: number
  offset?: number
  linkBuilder: (page: number) => string
}): React.ReactElement | null {
  let start = page - offset

  if (page > totalPages) {
    start = totalPages - offset
  }

  let end = page + offset
  if (start < 1) {
    start = 1
  }

  if (end > totalPages) {
    end = totalPages
  }

  if (end < 2) {
    return null
  }

  const list: Array<number> = []
  for (let i = start; i <= end; i++) {
    list.push(i)
  }

  const showFirst = start > 1
  const showLast = end < totalPages
  const showPrev = page > 1
  const showNext = page !== totalPages

  return (
    <ul className="text-center space-x-2 flex items-center justify-center my-12">
      <PageLinkWrapper show={showFirst}>
        <PageLink page={1} linkBuilder={linkBuilder} text="«" />
      </PageLinkWrapper>
      <PageLinkWrapper show={showPrev}>
        <PageLink page={page - 1} linkBuilder={linkBuilder} text="‹" />
      </PageLinkWrapper>
      <PageLinkWrapper show={showPrev} hideOnSmallScreens>
        ...
      </PageLinkWrapper>
      {list.map((pageNum) => (
        <PageLinkWrapper key={pageNum}>
          <PageLink
            page={pageNum}
            linkBuilder={linkBuilder}
            isActive={pageNum === page}
          />
        </PageLinkWrapper>
      ))}
      <PageLinkWrapper show={showNext} hideOnSmallScreens>
        ...
      </PageLinkWrapper>
      <PageLinkWrapper show={showNext}>
        <PageLink page={page + 1} linkBuilder={linkBuilder} text="›" />
      </PageLinkWrapper>
      <PageLinkWrapper show={showLast}>
        <PageLink page={totalPages} linkBuilder={linkBuilder} text="»" />
      </PageLinkWrapper>
    </ul>
  )
}
