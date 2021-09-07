import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Section from '../components/Section'
import Layout from '../layouts'

function About() {
  return (
    <Layout>
      <Section
        title={'About Me'}
        body={<p>UK based Full Stack developer</p>}
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
  )
}

export default About
