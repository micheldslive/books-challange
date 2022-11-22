import { Fragment, useState } from 'react'
import { BookProps } from '@/core/types'
import { fullBook } from '@/core/mocks'
import CloseIcon from '@/public/icons/close-icon.svg'

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

      <Modal isOpen={open}>
        <S.CloseButton
          role='button'
          aria-label='Fechar modal'
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </S.CloseButton>
        <FullCard {...content} />
      </Modal>
    </>
  )
}
