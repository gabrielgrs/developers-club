import type { NextPage } from 'next'
import { Facebook, Instagram } from 'react-feather'
import { useTheme } from 'styled-components'
import * as S from './styles'

const Footer: NextPage = () => {
  const { colors } = useTheme()

  return (
    <S.Footer>
      <S.FooterTop>
        <div>Developers Club</div>
        <S.Inline>
          <Instagram color={colors.primary} />
          <Facebook color={colors.primary} />
        </S.Inline>
      </S.FooterTop>
      <S.FooterBottom>
        <div>© 2022 Developers Club, all rights reserved</div>
        <S.Inline>
          <div>FAQs</div>
          <div>FAQs</div>
        </S.Inline>
      </S.FooterBottom>
    </S.Footer>
  )
}

export default Footer
