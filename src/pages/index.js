import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Section from '../components/Section'
import List from '../components/List'
import Toggle from '../components/Toggle'
import { useState } from 'react'

const gigCreateTechnologies = ['React', 'Next.js', 'MongoDB/Mongoose']
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']

const Home = () => {
  const [showGigCreateTechnologies, setShowGigCreateTechnologies] = useState(false)

  return (
    <>
      <title>Mark Williams Web Development</title>
      <Layout>
        <Section
          title={'GigCreate'}
          body={
            <>
              <p>ewefwefeew ew w we a aew ewa ffwef ewew ew awe weawe aew ae wwe ewa ewf we</p>
              <div>
                <Toggle onClickCallback={setShowGigCreateTechnologies} />
                {showGigCreateTechnologies ? (
                  <>
                    <List listTitle={'Technologies Used'} list={gigCreateTechnologies} />
                    <List listTitle={'Major API Integrations'} list={gigCreateApiIntegrations} />
                  </>
                ) : (
                  ''
                )}
              </div>
            </>
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
            <p>
              ergrg reg aea regregreag ergrereea ere re rgergaegraerg re er eragraereg ar erarea a
              re reare reare re r re eragreare are re err r aera rear
            </p>
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
