import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ToggleList from '../components/ToggleList'
import Section from '../components/Section'
import Layout from '../layouts'
import NavItemExternal from '../components/Nav/NavItemExternal'

const gigCreateTechnologies = [
  'React',
  'Next.js',
  'Redux',
  'MongoDB/Mongoose',
  'Sass',
  'Bootstrap',
  'Vercel',
]
const gigCreateApiIntegrations = ['Stripe', 'Auth0', 'Eventbrite']
const gigCreateAdminAppTechnologies = ['React', 'Next.js', 'MongoDB/Mongoose', 'MobX', 'Bootstrap']

function Projects() {
  return (
    <Layout>
      <div className="flex flex-col pb-24 space-y-24">
        <Section
          title={'GigCreate'}
          subTitle={'A live music event planning web app using React with Next.js'}
          link={
            <div className="flex justify-center mb-2">
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
          }
          body={
            <>
              <p>
                Originally created using the MERN stack, this app was migrated to Next.js a few
                months before to going into production.
              </p>
              <div className="flex flex-col pt-1">
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
          subTitle={'Support app for general and direct communication with users'}
          link={
            <NavItemExternal
              content={'GitHub Repository'}
              href={'https://github.com/MarkWilliamsDev/support-client'}
            />
          }
          body={
            <div className="flex flex-col pt-1">
              <ToggleList ListTitle={'Technologies'} list={gigCreateAdminAppTechnologies} />
            </div>
          }
        />
        <Section
          title={'Express with Typescript'}
          subTitle={'A simple REST API server using Express and Typescript '}
          body={
            <p>
              Based on an exercise in a Maximilian Schwarzmüller Typescript course with
              independently added improvements
            </p>
          }
          link={
            <NavItemExternal
              href={'https://github.com/MarkWilliamsDev/Express-with-Typescript-Example'}
              content={'Github Repository'}
            />
          }
        />
        <Section
          title={'Censor Dispensor'}
          subTitle={'Codecademy unguided project using OOP in Python'}
          link={
            <NavItemExternal
              href={'https://github.com/MarkWilliamsDev/censor_dispenser'}
              content={'Github Repository'}
            />
          }
        />
        <Section
          title={'Credit Card Checker'}
          subTitle={'Codecademy unguided project using JS'}
          link={
            <NavItemExternal
              href="https://github.com/MarkWilliamsDev/Credit-Card-Checker"
              content={'GitHub Repository'}
            />
          }
        />
      </div>
    </Layout>
  )
}

export default Projects
