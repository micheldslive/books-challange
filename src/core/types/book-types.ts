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

export interface useBooksProps extends Paginations {
  books: BookProps[]
  setBooks(books: BookProps[]): void
  nextPage: boolean
  setNextPage(nextPage: boolean): void
  prevPage: boolean
  setPrevPage(prevPage: boolean): void
  setPage(page: number): void
  setTotalPages(totalPages: number): void
  getData(page: number): void
}

export interface Paginations {
  page: number
  totalPages: number
}

export interface PaginationProps extends Paginations {
  nextPage: boolean
  prevPage: boolean
  onNextPage(): void
  onPrevPage(): void
}
