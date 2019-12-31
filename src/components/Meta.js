import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

function Meta ({ title, description }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  title = title || site.siteMetadata.title
  description = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        }
      ]}
    />
  )
}

export default Meta
