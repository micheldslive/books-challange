export type BookProps = {
  id: string
  title: string
  authors: string[]
  description: string
  imageUrl?: string
  isbn10: string
  isbn13: string
  language: string
  pageCount: number
  publisher: string
  published: number
}

export interface Paginations {
  page: number
  totalPages: number
}
export interface useBooksProps extends Paginations {
  setPage(page: number): void
  setTotalPages(totalPages: number): void
}

export interface useBooks extends Paginations {
  data: BookProps[] | undefined
}

export type PaginationProps = {
  books: useBooks
  handleNextPage(): void
  handlePrevPage(): void
}
