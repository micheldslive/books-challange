import create from 'zustand'
import { useBooksProps } from '@/core/types'

const useBooksStore = create<useBooksProps>((set) => ({
  page: 1,
  setPage: (page) =>
    set((state) => ({
      ...state,
      page,
    })),
}))

export { useBooksStore }
