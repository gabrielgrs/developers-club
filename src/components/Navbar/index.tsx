import { useEffect, useState } from 'react'
import { Menu } from 'react-feather'
import { useTheme } from 'styled-components'
import * as S from './styles'

function Navbar() {
  const [isFloating, setIsFloating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { colors } = useTheme()

  useEffect(() => {
    const handleNavigation = (event: any) => {
      setIsFloating(event?.currentTarget?.scrollY > 10)
      setIsOpen(false)
    }

    window.addEventListener('scroll', (event) => handleNavigation(event))
    return () => window.removeEventListener('scroll', handleNavigation)
  }, [])

  return (
    <S.Nav isFloating={isFloating} key={Number(isFloating)}>
      <S.Section>
        <S.LogoAndCollapse>
          <S.Logo>~ Developers Club ~</S.Logo>
          <S.Collapse onClick={() => setIsOpen((p) => !p)}>
            <Menu color={colors.white} />
          </S.Collapse>
        </S.LogoAndCollapse>
      </S.Section>
      <S.Section>
        <S.Item href="#main" isOpen={isOpen}>
          Home
        </S.Item>
        <S.Item href="#about" isOpen={isOpen}>
          About
        </S.Item>
        <S.Item href="#subscribe" isOpen={isOpen}>
          Subscribe
        </S.Item>
        <S.Item href="#team" isOpen={isOpen}>
          Team
        </S.Item>
      </S.Section>
    </S.Nav>
  )
}

export default Navbar
