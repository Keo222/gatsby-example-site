import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout'

function BlogPage({data}) {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(n => (
            <li key={n.name}>
              {n.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
