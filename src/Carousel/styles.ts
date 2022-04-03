import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  height: min-content;
`

const childrenAppearsAnimation = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0.8);
  } 
  
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`

export const Children = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${childrenAppearsAnimation} 1s;
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 32px;
`

export const Dot = styled.div<{ active: boolean }>`
  cursor: pointer;
  width: ${({ active }) => (active ? '16px' : '12px')};
  height: 12px;
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : 'silver'};
  border-radius: 50px;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`
