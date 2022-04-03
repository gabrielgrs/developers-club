import type { NextPage } from 'next'
import Image from 'next/image'
import { ChevronDown } from 'react-feather'
import FadeWhenVisible from '../../../components/FadeWhenVisible'
import * as S from './styles'

const Main: NextPage = () => {
  return (
    <S.Main id="main">
      <div>
        <h1>Developers Club</h1>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </S.Description>
      </div>
      <FadeWhenVisible>
        <Image
          src="/assets/svgs/programmers.svg"
          height="576px"
          width="880px"
          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
        />
      </FadeWhenVisible>
      <S.Arrow href="#about">
        <ChevronDown />
      </S.Arrow>
    </S.Main>
  )
}

export default Main
