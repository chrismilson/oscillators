/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Oscillators',
    siteUrl: 'https://shlappas.com/oscillators',
    author: 'Chris Milson',
    description: 'A simulation of coupled oscilators.'
  },
  plugins: [
    `gatsby-plugin-react-helmet`
  ]
}
