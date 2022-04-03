import styled from 'styled-components'

export const Team = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3%;
  gap: 32px;

  ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
    padding: 20%;
  }
`

export const About = styled.div`
  position: relative;
  transition: 1s;

  &:hover {
    transform: scale(1.1);

    .about-info {
      opacity: 1;
      background: rgba(0, 0, 0, 0.5);
      transform: scaleY(1);
    }
  }
`

export const Info = styled.div`
  transition: 1s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  opacity: 0;
  gap: 16px;
  transform: scaleY(0);
`
