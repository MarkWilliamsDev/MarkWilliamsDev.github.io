import React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import List from '../components/List'
import Toggle from '../components/Toggle'
import Section from '../components/Section'
import Layout from '../layouts'

const gigCreateTechnologies = ['React', 'Redux', 'Next.js', 'MongoDB/Mongoose']
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']

function Projects() {
  const [showGigCreateTechnologies, setShowGigCreateTechnologies] = useState(false)

  return (
    <Layout>
      <Section
        title={
          <a
            href="https://gigcreate.com"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GigCreate.com
          </a>
        }
        body={
          <>
            <div className="flex flex-col">
              <p>A live music event planning web app using React with Next.js</p>
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
          <div className="transform hover:scale-110">
            <a href="https://gigcreate.com" target="_blank" rel="noreferrer">
              <StaticImage
                className="w-12 sm:w-16 "
                src="../images/gigCreateLogo.png"
                alt="Logo for GigCreate.com"
                width={85}
                height={85}
                quality={100}
              />
            </a>
          </div>
        }
      />
      <Section
        title={'GigCreate Support App'}
        body={
          <p>
            Support app for general and direct communication with users. Demo version not yet
            available.
          </p>
        }
      />
    </Layout>
  )
}

export default Projects
