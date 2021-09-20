import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ToggleList from '../components/ToggleList'
import Section from '../components/Section'
import Layout from '../layouts'

const gigCreateTechnologies = ['React', 'Redux', 'Next.js', 'MongoDB/Mongoose', 'Bootstrap']
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']
const gigCreateAdminAppTechnologies = ['React', 'Next.js', 'MongoDB/Mongoose', 'MobX', 'Bootstrap']

function Projects() {
  return (
    <Layout>
      <div className="flex flex-col space-y-32">
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
                <div className="my-2">
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

                <p>A live music event planning web app using React with Next.js</p>
                <ToggleList
                  ListTitle={'Technologies'}
                  list={[...gigCreateTechnologies, ...gigCreateApiIntegrations]}
                />
              </div>
            </>
          }
        />
        <Section
          title={'GigCreate.com Support App'}
          body={
            <>
              <div className="flex flex-col items-center mt-2">
                <p>
                  Support app for general and direct communication with users. Demo version not yet
                  available.
                </p>
                <ToggleList ListTitle={'Technologies'} list={gigCreateAdminAppTechnologies} />
              </div>
            </>
          }
        />
      </div>
    </Layout>
  )
}

export default Projects
