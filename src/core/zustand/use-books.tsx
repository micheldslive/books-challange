import create from 'zustand'
import { useBooksProps } from '@/core/types'
import { api } from '@/core/api'

const useBooks = create<useBooksProps>((set) => ({
  page: 1,
  setPage: (page) =>
    set((state) => ({
      ...state,
      page,
    })),

  totalPages: 0,
  setTotalPages: (totalPages) =>
    set((state) => ({
      ...state,
      totalPages,
    })),

  nextPage: true,
  setNextPage: (nextPage) =>
    set((state) => ({
      ...state,
      nextPage,
    })),

  prevPage: false,
  setPrevPage: (prevPage) =>
    set((state) => ({
      ...state,
      prevPage,
    })),

  books: [],
  setBooks: (books) =>
    set((state) => ({
      ...state,
      books,
    })),

  getData: async (page: number) => {
    await api
      .get('/books', {
        params: {
          page,
          amount: 12,
        },
      })
      .then(({ data }) => {
        const books = [...data.data]
        const totalPages = data.totalPages
        const totalPagesToCeil = Math.ceil(totalPages)
        set((state) => ({
          ...state,
          books,
          totalPages: totalPagesToCeil,
        }))
      })
      .catch((error) => {
        return error
      })
  },
}))

export { useBooks }
