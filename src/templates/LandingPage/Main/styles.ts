import styled, { keyframes } from 'styled-components'

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 10%;
  position: relative;

  ${({ theme }) => theme.breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
`

export const Description = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  align-items: center;
  padding-top: 16px;
  color: ${({ theme }) => theme.colors.silver};

  &:after {
    content: '';
    background: ${({ theme }) => theme.colors.white};
    height: 1px;
    width: 100%;
  }
`

const arrowAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }


  50% {
    transform: translateY(-10px);
    opacity: 0.7;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }

`

export const Arrow = styled.a`
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  cursor: pointer;
  transition: 0.4s;
  animation: ${arrowAnimation} 2s linear infinite;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
