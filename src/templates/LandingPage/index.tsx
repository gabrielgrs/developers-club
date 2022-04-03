import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Navbar } from '../../components'
import Main from './Main'
import About from './About'
import Team from './Team'
// import Contact from './Contact'
import Subscribe from './Subscribe'
import Footer from './Footer'

const LandingPageTemplate: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <About />
      <Team />
      {/* <Contact /> */}
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default LandingPageTemplate
