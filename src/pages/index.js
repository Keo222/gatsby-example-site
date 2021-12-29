import React from 'react';
import {StaticImage} from 'gatsby-plugin-image'

// COMPONENTS
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage 
        alt="forest"
        src={'../images/trees.jpg'}
      />
    </Layout>
  )
}

export default IndexPage