module.exports = {
  pathPrefix: "/wetech-site",
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
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
