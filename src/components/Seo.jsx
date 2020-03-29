import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        title: title
        description: description
        url: url
        icon: icon
        author: author
      }
    }
  }
`
function Seo() {

  const { site } = useStaticQuery(query);
  console.log(site);

  useEffect(() => {
    console.log('component mounted or updated');
  });

  useEffect(() => {
    return () => {
      console.log('component will unmount');
    }
  }, []);

  return (
    <>
      <Helmet title={site.siteMetadata.title}>
        {site.siteMetadata.url && <meta name="description" content={site.siteMetadata.description} />}
        {site.siteMetadata.icon && <meta name="icon" href={site.siteMetadata.icon} />}
        {site.siteMetadata.author && <meta name="author" content={site.siteMetadata.author} />}
        {site.siteMetadata.url && <meta property="og:url" content={site.siteMetadata.url} />}
        {site.siteMetadata.title && <meta property="og:title" content={site.siteMetadata.title} />}
        {site.siteMetadata.description && (
          <meta property="og:description" content={site.siteMetadata.description} />
        )}
      </Helmet>
    </>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  pathname: PropTypes.string,
  author: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  icon: null,
  pathname: null,
  author: false,
}