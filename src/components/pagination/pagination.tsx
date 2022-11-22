import { useEffect } from 'react'
import { PaginationProps } from '@/core/types'
import * as S from './pagination.styles'
import { useBooks } from '@/core/zustand'
import NextIcon from '@/public/icons/next-icon.svg'
import PrevIcon from '@/public/icons/prev-icon.svg'

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
        <NextIcon />
      </S.Button>

      <S.Button
        position='right'
        isDisabled={nextPage}
        disabled={nextPage}
        onClick={onNextPage}
        aria-label='Avançar'
      >
        <PrevIcon />
      </S.Button>
    </S.Wrapper>
  )
}
