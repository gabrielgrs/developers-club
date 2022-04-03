import type { NextPage } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'
import FadeWhenVisible from '../../../components/FadeWhenVisible'
import * as S from './styles'

const Team: NextPage = () => {
  return (
    <Fragment>
      <S.Team id="team">
        <FadeWhenVisible>
          <S.About>
            <Image
              src="/assets/images/gabriel.jpeg"
              alt="Lorem ipsum"
              width="400px"
              height="400px"
            />
            <S.Info className="about-info">
              <h3>Lorem Ipsum</h3>
              <span>Lorem ipsum text</span>
              <div>
                <div>Facebook</div>
                <div>Twitter</div>
              </div>
            </S.Info>
          </S.About>
        </FadeWhenVisible>
        <FadeWhenVisible>
          <S.About>
            <Image
              src="/assets/images/gabriel.jpeg"
              alt="Lorem ipsum"
              width="400px"
              height="400px"
            />
            <S.Info className="about-info">
              <h3>Lorem Ipsum</h3>
              <span>Lorem ipsum text</span>
              <div>
                <div>Facebook</div>
                <div>Twitter</div>
              </div>
            </S.Info>
          </S.About>
        </FadeWhenVisible>
      </S.Team>
    </Fragment>
  )
}

export default Team
