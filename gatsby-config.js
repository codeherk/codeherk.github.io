/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Byron Jenkins aka Codeherk",
    description: "Former Boxer, Software Engineer, and Content Creator",
    // titleTemplate: `%s · a starting point`,
    author: {
      name: "Byron Jenkins",
      summary: `a former boxer, software engineer, and content creator.`,
      email: "codeherk@gmail.com"
    },
    url: "https://codeherk.com",
    twitter: "codeherk",
    logo: "/self-img.png",
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blogs`,
        link: `/blogs`,
      },
      {
        name: `Projects`,
        link: `/projects`,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-normalize-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
                instagram: {
                  hide_caption: true
                }
              },
            },
          },
          `gatsby-plugin-instagram-embed`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    }
  ],
}
