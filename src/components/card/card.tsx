import * as S from './card.styles'
import { book } from '@/core/mocks'
import { CardProps } from '@/core/types'

export const Card = ({
  authors,
  imageUrl,

  pageCount,
  publisher,
  published,
  title,
  onClick,
}: CardProps) => (
  <S.Wrapper onClick={onClick}>
    <S.ImageWrapper>
      <S.Image
        src={imageUrl || book.imageUrl}
        alt={title}
        width={95}
        height={133}
      />
    </S.ImageWrapper>

    <S.Content>
      <S.MainInfoWrapper>
        <S.Title>{title}</S.Title>
        <S.AuthorsWrapper>
          {authors.map((author, index) => (
            <S.Author key={index}>{author}</S.Author>
          ))}
        </S.AuthorsWrapper>
      </S.MainInfoWrapper>

      <S.InfoWrapper>
        <span>{pageCount} páginas</span>
        <span>Editora {publisher}</span>
        <span>Publicado em {published}</span>
      </S.InfoWrapper>
    </S.Content>
  </S.Wrapper>
)
