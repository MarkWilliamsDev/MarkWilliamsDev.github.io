import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Section from '../components/Section'
import Layout from '../layouts'
import List from '../components/List'

const technologicalExprience = [
  'React',
  'Next.js',
  'MongoDB',
  'Express',
  'Gatsby',
  'MobX',
  'Redux',
  'Stripe',
  'Tailwind',
  'Bootstrap',
]

function About() {
  return (
    <Layout>
      <Section
        title={'About'}
        body={
          <div className="flex flex-col items-center">
            <p>Full Stack Developer</p>
            <div className="my-2">
              <StaticImage
                className="w-24 sm:w-32"
                src="../images/me.jpg"
                alt="Portrait picture of Mark Williams"
                width={318}
                height={477}
              />
            </div>
            <div>
              <List list={technologicalExprience} isHorizontal={true} />
            </div>
          </div>
        }
      />
    </Layout>
  )
}

export default About
