import { useEffect, useState } from 'react'
import * as S from './styles'

function Navbar() {
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const handleNavigation = (event: any) =>
      setIsFloating(event?.currentTarget?.scrollY > 10)

    window.addEventListener('scroll', (event) => handleNavigation(event))
    return () => window.removeEventListener('scroll', handleNavigation)
  }, [])

  return (
    <S.Nav isFloating={isFloating} key={Number(isFloating)}>
      <S.Section>
        <S.Logo>~ Developers Club ~</S.Logo>
      </S.Section>
      <S.Section>
        <S.Item href="#main">Home</S.Item>
        <S.Item href="#about">About</S.Item>
        <S.Item href="#subscribe">Subscribe</S.Item>
        <S.Item href="#team">Team</S.Item>
      </S.Section>
    </S.Nav>
  )
}

export default Navbar
