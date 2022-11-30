import { Logo, Pagination } from '@/components'
import { ListBooks } from '@/components/list-books'
import * as S from './home.styles'
import { Loading, LoadingContent } from '@/styles'
import LogoutIcon from '@/public/icons/logout-icon.svg'
import { useBooks } from '@/core/uses'
import { useLoginStore } from '@/core/stores'

export const Home = () => {
  const { data, signOut } = useLoginStore()
  const { books, page, setPage, isLoading } = useBooks()

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
              Bem vindo(a), <strong>{data?.name}</strong>
            </S.User>

            <S.LogoutButton onClick={signOut}>
              <LogoutIcon />
            </S.LogoutButton>
          </S.UserContainer>
        </S.Header>

        <S.CardsContainer>
          {isLoading && (
            <LoadingContent>
              <Loading width={50} height={50} border={8} />
            </LoadingContent>
          )}
          {books && <ListBooks books={books.data} />}
        </S.CardsContainer>

        <S.PaginationContainer>
          <Pagination
            books={books}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </S.PaginationContainer>
      </S.Wrapper>
    </>
  )
}
