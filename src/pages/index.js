import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Section from '../components/Section'
import List from '../components/List'
import Layout from '../layouts'

const technologicalExprience = [
  'React',
  'Next.js',
  'Gatsby',
  'MongoDB',
  'Express',
  'MobX',
  'Redux',
  'Stripe',
  'Auth0',
  'Tailwind',
  'Bootstrap',
]

const Home = () => {
  return (
    <>
      <title>Mark Williams Web Development</title>
      <Layout>
        <Section
          title={'Mark Williams - Full Stack Developer'}
          body={
            <>
              <div className="flex justify-center space-x-6 mt-2">
                <div className="mt-11">
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
              <div className="mx-40 mt-2 space-y-3">
                <p>
                  Hi, I'm Mark. A web developer based in Malvern, UK. I enjoy web development very
                  much and think I'm pretty good at it too. It's extremely satisfying to get a web
                  app to work.
                </p>
                <p>
                  In my spare time I enjoy listening to music and playing bass. I have just started
                  to learn the trumpet too. I also enjoy gaming on PC and get pretty nerdy about PC
                  gaming hardware. I also recently began down the custom keyboard rabbit hole.
                </p>
              </div>
            </>
          }
        />
      </Layout>
    </>
  )
}

export default Home
