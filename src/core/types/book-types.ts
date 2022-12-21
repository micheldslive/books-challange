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
}
export interface useBooksProps extends Paginations {
  setPage(page: number): void
}

export interface getBooksProps extends Paginations {
  data: BookProps[] | undefined
}

export type PaginationProps = {
  books?: getBooksProps
  handleNextPage(): void
  handlePrevPage(): void
}

export type BooksParams = {
  page: number
  amount?: number
}

export type ListBooksProps = {
  books?: BookProps[]
}

export type CardProps = {
  onClick(): void
} & Omit<BookProps, 'description' | 'isbn10' | 'isbn13' | 'language' | 'id'>
