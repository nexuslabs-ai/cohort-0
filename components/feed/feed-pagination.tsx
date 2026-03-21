'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PAGE_PARAM } from '@/lib/constants/builds';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

type FeedPaginationProps = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns the page numbers to display. Shows at most 5 page links
 * with ellipsis when there are many pages.
 *
 * Examples (current page marked with *):
 *   totalPages=5  → [1, 2, 3, 4, 5]
 *   totalPages=8, page=1  → [1*, 2, 3, ..., 8]
 *   totalPages=8, page=4  → [1, ..., 3, 4*, 5, ..., 8]
 *   totalPages=8, page=8  → [1, ..., 6, 7, 8*]
 */
function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | 'ellipsis')[] {
  // Show all pages when there are 5 or fewer.
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [];

  // Always show first page.
  pages.push(1);

  if (currentPage <= 3) {
    // Near the start: 1, 2, 3, ..., last
    pages.push(2, 3);
    pages.push('ellipsis');
  } else if (currentPage >= totalPages - 2) {
    // Near the end: 1, ..., n-2, n-1, n
    pages.push('ellipsis');
    pages.push(totalPages - 2, totalPages - 1);
  } else {
    // Middle: 1, ..., prev, current, next, ..., last
    pages.push('ellipsis');
    pages.push(currentPage - 1, currentPage, currentPage + 1);
    pages.push('ellipsis');
  }

  // Always show last page.
  pages.push(totalPages);

  return pages;
}

// ---------------------------------------------------------------------------
// FeedPagination
// ---------------------------------------------------------------------------

/**
 * Client component that renders pagination controls using shadcn/ui
 * Pagination primitives. Updates the URL `page` param while
 * preserving existing filter params.
 */
export function FeedPagination({
  currentPage,
  totalPages,
  totalCount,
}: FeedPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function buildHref(page: number): string {
    const params = new URLSearchParams(searchParams.toString());

    // Keep the URL clean — omit the page param when on page 1.
    if (page <= 1) {
      params.delete(PAGE_PARAM);
    } else {
      params.set(PAGE_PARAM, String(page));
    }

    const queryString = params.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={buildHref(currentPage - 1)}
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : undefined}
              className={
                currentPage <= 1 ? 'pointer-events-none opacity-50' : undefined
              }
            />
          </PaginationItem>

          {pageNumbers.map((page, i) =>
            page === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  href={buildHref(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              href={buildHref(currentPage + 1)}
              aria-disabled={currentPage >= totalPages}
              tabIndex={currentPage >= totalPages ? -1 : undefined}
              className={
                currentPage >= totalPages
                  ? 'pointer-events-none opacity-50'
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <p className="text-sm text-muted-foreground">
        {totalCount} {totalCount === 1 ? 'build' : 'builds'}
      </p>
    </div>
  );
}
