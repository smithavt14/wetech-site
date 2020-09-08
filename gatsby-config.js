module.exports = {
  pathPrefix: "/wetech-site",
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-scroll-reveal` },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/vectors/ // See below to configure properly
        }
      }
    }
  ]
}
