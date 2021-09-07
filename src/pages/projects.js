import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Toggle from '../components/ToggleList'
import Section from '../components/Section'
import Layout from '../layouts'

const gigCreateTechnologies = ['React', 'Redux', 'Next.js', 'MongoDB/Mongoose']
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']

function Projects() {
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
            <div className="flex flex-col items-center">
              <p>A live music event planning web app using React with Next.js</p>
              <div className="m-3">
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
              </div>
              <div className="flex flex-col items-center pt-2">
                <Toggle
                  toggleText={'Technologies and APIs Used'}
                  list={[...gigCreateTechnologies, ...gigCreateApiIntegrations]}
                />
              </div>
            </div>
          </>
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
