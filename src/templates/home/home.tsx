import { Logo, Pagination } from '@/components'
import { ListBooks } from '@/components/list-books'
import * as S from './home.styles'
import LogoutIcon from '@/public/icons/logout-icon.svg'

import { useUsers, useBooks } from '@/core/zustand'
import { useEffect } from 'react'

export const Home = () => {
  const { signOut, user } = useUsers()
  const { books, page, setPage, totalPages, getData, nextPage, prevPage } =
    useBooks()

  useEffect(() => {
    getData(page)
  }, [getData, page])

  const handleNextPage = () => setPage(page + 1)
  const handlePrevPage = () => setPage(page - 1)

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.LogoContainer>
            <Logo color='black' />
          </S.LogoContainer>

          <S.UserContainer>
            <S.User>
              Bem vindo(a), <strong>{user?.name}</strong>
            </S.User>

            <S.LogoutButton onClick={signOut}>
              <LogoutIcon />
            </S.LogoutButton>
          </S.UserContainer>
        </S.Header>

        <S.CardsContainer>
          <ListBooks books={books} />
        </S.CardsContainer>

        <S.PaginationContainer>
          <Pagination
            page={page}
            totalPages={totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </S.PaginationContainer>
      </S.Wrapper>
    </>
  )
}
