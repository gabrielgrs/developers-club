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
`

export const Section = styled.div`
  display: flex;
  gap: 16px;
`

export const Item = styled.a`
  color: ${({ theme }) => theme.colors.silver};
  transition: 0.4s;

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
`

export const Logo = styled.a`
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`
