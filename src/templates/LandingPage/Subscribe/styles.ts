import styled from 'styled-components'

export const Subscribe = styled.div`
  padding: 64px 3%;
`

export const Card = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(100deg, ${theme.colors.primary} 0, #ff5fa0 75%, ${theme.colors.danger} 100%)`};
  padding: 8px 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 200px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.primary};

  &:focus {
    outline: none;
    border: none;
  }
`
