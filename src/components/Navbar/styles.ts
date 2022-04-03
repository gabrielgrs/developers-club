import styled, { css, keyframes } from 'styled-components'

export const navbarAppears = keyframes`
  from {
    transform: translateY(-100px);
  }

  to {
    transform: translate(0px);
  }
`

export const modifiers = {
  isFloating: () => css`
    animation: ${navbarAppears} 1s;
    height: 60px;
    position: fixed;
  `,
}

export const Nav = styled.nav<{ isFloating: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  transition: 0.4s;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  z-index: 999;
  top: 0;
  left: 0;

  ${({ isFloating }) => isFloating && modifiers.isFloating()};

  ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
    height: max-content;
  }
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
  }
`

export const Item = styled.a<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.silver};
  transition: 0.4s;
  text-align: center;

  &:after {
    transition: 0.4s;
    content: '.';
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2em;
    height: 4px;
    width: 4px;
    border-radius: 8px;
    opacity: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    &:after {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.breakPoints.mobile} {
    display: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
    padding: 8px 0;
  }
`

export const LogoAndCollapse = styled.div`
  width: 100%;

  ${({ theme }) => theme.breakPoints.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
`

export const Logo = styled.a`
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

export const Collapse = styled.button`
  background: none;
  border: none;
  display: none;

  ${({ theme }) => theme.breakPoints.mobile} {
    display: initial;
  }
`
