import { useQuery, useQueryClient } from 'react-query'
import { RemoteAuth } from '@/core/services/auth'
import { PostClient } from '@/core/services/post-client'
import { useBooksStore } from '@/core/stores'
import { BooksParams, HttpResponse } from '@/core/types'
import { useCallback, useEffect } from 'react'

export const useBooks = () => {
  const { page, setPage } = useBooksStore()
  const queryClient = useQueryClient()

  const getBooks = useCallback(async (values: BooksParams) => {
    const remoteAuth = new RemoteAuth('/books', new PostClient())
    const response: HttpResponse = await remoteAuth.get(values)
    const { data } = response
    return data
  }, [])

  const { status, data, error, isFetching, isPreviousData, isLoading } =
    useQuery(['books', page], () => getBooks({ page, amount: 12 }), {
      keepPreviousData: true,
    })

  useEffect(() => {
    queryClient.prefetchQuery(['books', page], () => getBooks({ page }))
  }, [getBooks, page, queryClient])

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
