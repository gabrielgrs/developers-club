import styled from 'styled-components'

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 0;
  padding: 32px 3% 8px;
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.silver};
  font-size: 0.9em;
`

export const Inline = styled.div`
  display: flex;
  gap: 8px;
`
