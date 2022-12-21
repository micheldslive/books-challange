import { useQuery } from 'react-query'
import { RemoteAuth } from '@/core/services/auth'
import { PostClient } from '@/core/services/post-client'
import { useBooksStore } from '@/core/stores'
import { BooksParams, HttpResponse, getBooksProps } from '@/core/types'

export const useBooks = () => {
  const { page, setPage } = useBooksStore()

  const getBooks = async (values: BooksParams): Promise<getBooksProps> => {
    const remoteAuth = new RemoteAuth('/books', new PostClient())
    const response: HttpResponse = await remoteAuth.get(values)
    const { data } = response
    return data
  }

  const { status, data, error, isFetching, isPreviousData, isLoading } =
    useQuery(['books', page], () => getBooks({ page, amount: 12 }), {
      keepPreviousData: true,
    })

  return {
    books: data,
    page,
    setPage,
    status,
    error,
    isFetching,
    isPreviousData,
    isLoading,
  }
}
