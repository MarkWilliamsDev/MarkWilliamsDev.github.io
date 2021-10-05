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
              <div className="md:mx-40 mt-4 space-y-3">
                <p>
                  Hi, I'm Mark. A web developer based in Malvern, UK. I love to code and think I'm
                  pretty good at it too. It's extremely satisfying to get an app to work.
                </p>
                <p>
                  I started coding at the beginning of the pandemic, learning some Python on{' '}
                  <a href="https://www.codecademy.com/">Codecademy</a>'s computer science course. I
                  then decided at my level, web development was the way to go and after spending
                  time on Codecademy learning a fair amount of Javascript, decided to focus on
                  learning React. After completing Stephen Grider's{' '}
                  <a href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">
                    Node with React: Fullstack Web Development
                  </a>{' '}
                  on <a href="https://www.udemy.com/">Udemy</a>, I began working on my first web app
                  which has been recently launched.
                </p>
                <p>
                  In my spare time I enjoy listening to music and playing bass. I've also started to
                  learn the trumpet. I enjoy gaming on PC and get pretty nerdy about PC gaming
                  hardware.
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
