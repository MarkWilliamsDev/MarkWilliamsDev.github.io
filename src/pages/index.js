import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Section from '../components/Section'
import List from '../components/List'
import Layout from '../layouts'

const technologicalExprience = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Gatsby',
  'MongoDB',
  'Express',
  'Redux',
  'MobX',
  'Sass',
  'Tailwind',
  'Bootstrap',
  'Stripe',
  'Auth0',
]

const Home = () => {
  return (
    <>
      <title>Mark Williams Web Development</title>
      <Layout>
        <Section
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
              <div className="md:mx-56 mt-4 mb-3 space-y-4 text-left">
                <p>
                  A "self taught" web developer based in Malvern, UK, I enjoy learning and using new
                  technologies. I'm currently looking for my first professional opportunity to put
                  my knowledge and skills to use
                </p>
                <p>
                  Starting at the beginning of the pandemic, I learnt Python from{' '}
                  <a href="https://www.codecademy.com/">Codecademy</a>'s computer science course. I
                  then decided to get into web development and after spending time on Codecademy
                  learning Javascript, I focused on learning React.
                </p>
                <p>
                  After completing Stephen Grider's{' '}
                  <a href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">
                    Node with React: Fullstack Web Development
                  </a>
                  , I began working on my first personal project which has been recently launched.
                </p>
                <p>
                  I recently completed{' '}
                  <a href="https://www.udemy.com/course/understanding-typescript/">
                    Understanding TypeScript - 2022 Edition
                  </a>{' '}
                  by Maximilian Schwarzmüller
                </p>
                <p>
                  In my spare time I enjoy listening to music and playing bass, which I play in a
                  band for a traditional folk dance group. I've also recently started to learn the
                  trumpet.
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
