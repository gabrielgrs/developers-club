import { useState } from 'react'
import * as S from './styles'
import type * as T from './types'

function Carousel({ children }: T.Carousel) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <S.Wrapper>
      <S.Children key={selectedIndex}>{children[selectedIndex]}</S.Children>
      <S.Dots>
        {children.map((_: unknown, index: number) => (
          <S.Dot
            onClick={() => setSelectedIndex(index)}
            active={index === selectedIndex}
            key={index}
          />
        ))}
      </S.Dots>
    </S.Wrapper>
  )
}

export default Carousel
