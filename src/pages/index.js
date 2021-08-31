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
                className="max-w-xs"
                src="../images/gigCreateLogo.png"
                alt="Logo for GigCreate.com"
                width={85}
                height={85}
              />
            </a>
          }
        />

        <Section
          title={'About Me'}
          body={
            'ergrg  reg aea regregreag ergrereea ere  re rgergaegraerg re er eragraereg ar erarea a re reare reare re r re eragreare are re err r aera rear '
          }
        />
      </Layout>
    </>
  )
}

export default Home
