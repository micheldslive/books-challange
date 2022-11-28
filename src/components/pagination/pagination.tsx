import { PaginationProps } from '@/core/types'
import * as S from './pagination.styles'

export const Pagination = ({
  books,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) => {
  const totalPages = books && Math.round(books.totalPages)

  return (
    <S.Wrapper>
      <S.PagesWrapper>
        Página <strong>{books?.page}</strong> de <strong>{totalPages}</strong>
      </S.PagesWrapper>

      <S.Button
        position='left'
        isDisabled={books?.page === 1}
        onClick={handlePrevPage}
        disabled={books?.page === 1}
        aria-label='Voltar'
      >
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L1 9' stroke='currentColor' strokeLinejoin='round' />
        </svg>
      </S.Button>

      <S.Button
        position='right'
        isDisabled={books?.page === totalPages}
        onClick={handleNextPage}
        disabled={books?.page === totalPages}
        aria-label='Avançar'
      >
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L1 9' stroke='currentColor' strokeLinejoin='round' />
        </svg>
      </S.Button>
    </S.Wrapper>
  )
}
