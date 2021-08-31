import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Section from '../components/Section'

const Home = () => {
  return (
    <>
      <title>Mark Williams Web Development</title>
      <Layout>
        <Section
          title={'GigCreate'}
          body={
            'ewefwefeew ew w we aewefwea a eaw  eaeffaewf  we fawef a e awefaeffawe  we awef ase ew ewfewaaefawef awe faewfawefawef awef aew ewa ffwef ewew  ew awe weawe aew ae wwe ewa '
          }
          image={
            <a href="https://gigcreate.com" target="_blank" rel="noreferrer">
              <StaticImage
                className="w-12 sm:w-16"
                src="../images/gigCreateLogo.png"
                alt="Logo for GigCreate.com"
                width={85}
                height={85}
                quality={100}
              />
            </a>
          }
        />

        <Section
          title={'About Me'}
          body={
            'ergrg  reg aea regregreag ergrereea ere  re rgergaegraerg re er eragraereg ar erarea a re reare reare re r re eragreare are re err r aera rear '
          }
          image={
            <StaticImage
              className="w-24 sm:w-32"
              src="../images/me.jpg"
              alt="Portrait picture of Mark Williams"
              width={318}
              height={477}
            />
          }
        />
      </Layout>
    </>
  )
}

export default Home
