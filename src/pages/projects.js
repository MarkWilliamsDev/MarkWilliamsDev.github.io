import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ToggleList from '../components/ToggleList'
import Section from '../components/Section'
import Layout from '../layouts'

const gigCreateTechnologies = [
  'React',
  'Next.js',
  'Redux',
  'MongoDB/Mongoose',
  'Bootstrap',
  'Vercel',
]
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']
const gigCreateAdminAppTechnologies = ['React', 'Next.js', 'MongoDB/Mongoose', 'MobX', 'Bootstrap']

function Projects() {
  return (
    <Layout>
      <div className="flex flex-col space-y-32">
        <Section
          title={'GigCreate'}
          body={
            <>
              <div className="flex justify-center">
                <div className="mt-3 mb-2">
                  <div className="transform hover:scale-110">
                    <a
                      href="https://gigcreate.com/features-of-gig-create"
                      target="_blank"
                      rel="noreferrer"
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
                  </div>
                </div>
              </div>
              <div className="md:mx-56 mt-2 space-y-3">
                <p>A live music event planning web app using React with Next.js.</p>
                <p>
                  Originally created using the MERN stack, this app was migrated to{' '}
                  <a href="https://nextjs.org/">Next.js</a> a few months before to going into
                  production.
                </p>
              </div>
              <div className="flex flex-col pt-2">
                <ToggleList
                  ListTitle={'Technologies'}
                  list={[...gigCreateTechnologies, ...gigCreateApiIntegrations]}
                />
              </div>
            </>
          }
        />
        <Section
          title={'GigCreate Support App'}
          body={
            <>
              <div className="flex items-center mt-2">
                <div className="md:mx-56">
                  <p>
                    Support app for general and direct communication with users. Demo version not
                    yet available.
                  </p>
                </div>
              </div>
              <div className="flex flex-col pt-2">
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
