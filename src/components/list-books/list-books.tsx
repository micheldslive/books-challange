import { Fragment, useState } from 'react'
import { BookProps } from '@/core/types'
import { fullBook } from '@/core/mocks'

import { Card, FullCard, Modal } from '@/components'
import * as S from './list-books.styles'

export type ListBooksProps = {
  books: BookProps[]
}

export const ListBooks = ({ books }: ListBooksProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<BookProps>(fullBook)

  const handleOpenModal = (book: BookProps) => {
    setOpen(true)
    setContent(book)
  }

  return (
    <>
      <S.Grid>
        {books.map((book) => (
          <Fragment key={book.id.toString()}>
            <Card onClick={() => handleOpenModal(book)} {...book} />
          </Fragment>
        ))}
      </S.Grid>

      <Modal open={open}>
        <S.CloseButton
          role='button'
          aria-label='Fechar modal'
          onClick={() => setOpen(false)}
        >
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <path
              d='m12.035 4.507.036-.036-.036-.035-.471-.471-.035-.036-.036.036L8 7.458 4.507 3.965l-.036-.036-.035.036-.471.471-.036.035.036.036L7.458 8l-3.493 3.493-.036.036.036.035.471.471.035.036.036-.036L8 8.542l3.493 3.493.036.036.035-.036.471-.471.036-.035-.036-.036L8.542 8l3.493-3.493Z'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='.1'
            />
          </svg>
        </S.CloseButton>
        <FullCard {...content} />
      </Modal>
    </>
  )
}
