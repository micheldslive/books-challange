export const book = {
  id: '61c9c28fcc',
  imageUrl: '/img/book-placeholder.webp',
  title: 'Aut',
  authors: ['Hugo Moraes'],
  pageCount: 1420,
  publisher: 'Xavier Comércio',
  published: 2020,
}

export const fullBook = {
  ...book,
  language: 'Inglês',
  isbn10: '8012113230',
  isbn13: '336-8012113230',
  description:
    'Quia aperiam quod nam sed unde. Magni suscipit aperiam necessitatibus et ea fugit eum non. Et laborum dolores id.\n \rEum quam et ullam et omnis corrupti accusantium non et. Praesentium non natus. Molestias nam sed temporibus ea. Cupiditate sint vero et modi ut. Soluta et non velit ut molestiae ratione similique est. Quaerat beatae maiores est odit corporis alias laboriosam.',
}

export const books = Array.from(Array(12).keys()).map(() => fullBook)
