import { useEffect } from 'react'
import { PaginationProps } from '@/core/types'
import * as S from './pagination.styles'
import { useBooks } from '@/core/zustand'

export const Pagination = ({
  page,
  totalPages,
  nextPage,
  prevPage,
  onNextPage,
  onPrevPage,
}: PaginationProps) => {
  const { setNextPage, setPrevPage } = useBooks()

  useEffect(() => {
    setPrevPage(page === 1)
    setNextPage(page === totalPages)
  }, [page, totalPages, setNextPage, setPrevPage])

  return (
    <S.Wrapper>
      <S.PagesWrapper>
        Página <strong>{page}</strong> de <strong>{totalPages}</strong>
      </S.PagesWrapper>

      <S.Button
        position='left'
        isDisabled={prevPage}
        disabled={prevPage}
        onClick={onPrevPage}
        aria-label='Voltar'
      >
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L1 9' stroke='currentColor' strokeLinejoin='round' />
        </svg>
      </S.Button>

      <S.Button
        position='right'
        isDisabled={nextPage}
        disabled={nextPage}
        onClick={onNextPage}
        aria-label='Avançar'
      >
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L1 9' stroke='currentColor' strokeLinejoin='round' />
        </svg>
      </S.Button>
    </S.Wrapper>
  )
}
