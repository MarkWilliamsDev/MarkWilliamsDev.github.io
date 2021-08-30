import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import ContentWrapper from '../components/ContentWrapper'

const Home = () => {
  return (
    <>
      <title>Mark Williams Web Development</title>
      <Layout>
        <ContentWrapper>
          <div className="py-2">
            <h2 className="text-2xl">GigCreate</h2>
          </div>
          <a href="https://gigcreate.com" target="_blank" rel="noreferrer">
            <StaticImage
              className="max-w-xs"
              src="../images/gigCreateLogo.png"
              alt="Logo for GigCreate.com"
              width={85}
              height={85}
            />
          </a>

          <div className="flex justify-center">
            <div className="w-2/3 py-1">
              <p className="text-left">
                elhnfeolrgnrjwe woenfoiwnf nwofniwenfwoiefo oiewfniwefi fielneflnwlef wepf po fwefew
                fwewe fw wewe efwfew efefwewfwfwerergergreg r e er re ereger er er regrggre grerr
                ere re er rgerg er erge rre ggerre er eger
              </p>
            </div>
          </div>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export default Home
