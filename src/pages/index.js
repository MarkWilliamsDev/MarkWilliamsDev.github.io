import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Section from '../components/Section'
import List from '../components/List'
import Toggle from '../components/Toggle'
import { useState } from 'react'

const gigCreateTechnologies = ['React', 'Redux', 'Next.js', 'MongoDB/Mongoose']
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']

const Home = () => {
  const [showGigCreateTechnologies, setShowGigCreateTechnologies] = useState(false)

  return (
    <div className="mainBackgroundImage ">
      <title>Mark Williams Web Development</title>
      <Layout>
        <Section
          title={'GigCreate'}
          body={
            <>
              <div className="flex justify-center px-2">
                <p>ewefwefeew ew w we a aew ewa ffwef ewew ew awe weawe aew ae wwe ewa ewf we</p>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-center pt-2 transform hover:scale-105">
                  <Toggle
                    setIsToggled={setShowGigCreateTechnologies}
                    isToggled={showGigCreateTechnologies}
                    toggleText={'Technologies and APIs Used'}
                  />
                </div>

                {showGigCreateTechnologies ? (
                  <div className="flex flex-col items-center">
                    <div>
                      <List list={gigCreateTechnologies} />
                      <List list={gigCreateApiIntegrations} />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </>
          }
          image={
            <a
              href="https://gigcreate.com"
              target="_blank"
              rel="noreferrer"
              className="transform hover:scale-110"
            >
              <StaticImage
                className="w-12 sm:w-16 "
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
            <div className="flex justify-center px-2">
              <p>
                ergrg reg aea regregreag ergrereea ere re rgergaegraerg re er eragraereg ar erarea a
                re reare reare re r re eragreare are re err r aera rear
              </p>
            </div>
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
    </div>
  )
}

export default Home
