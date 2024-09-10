import React from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function MyPagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPaginationItems = () => {
    const items = []

    // Pagination Links
    const visiblePages = 3
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2))
    const endPage = Math.min(totalPages, startPage + visiblePages - 1)

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1)
    }

    if (startPage > 1) {
      items.push(
        <PaginationItem key="1">
          <PaginationLink href="#" onClick={() => onPageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>,
      )
      if (startPage > 2) {
        items.push(
          <PaginationItem key="dotsStart">
            <span className="pagination-disabled">...</span>
          </PaginationItem>,
        )
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="dotsEnd">
            <span className="pagination-disabled">...</span>
          </PaginationItem>,
        )
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return items
  }

  return (
    <Pagination>
      <PaginationContent>{renderPaginationItems()}</PaginationContent>
    </Pagination>
  )
}

export default MyPagination
