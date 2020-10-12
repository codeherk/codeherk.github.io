const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require('gatsby-awesome-pagination')

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = [
      "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
      `type Frontmatter {
        # you may need to adapt this line depending on the node type and key
        # that you want to create the relationship for
        image: File @link(by: "relativePath")
      }`,
      
      schema.buildObjectType({
        name: "Frontmatter",
        fields: {
          tags: {
            type: "[String!]",
            resolve(source, args, context, info) {
              const { tags } = source
              // console.log(tags)
              // console.log(source)
              if (
                source.tags == null ||
                (Array.isArray(tags) && !tags.length)
              ) {
                return []
              }
              return tags
            },
          },
        },
      }),
    ]
    createTypes(typeDefs)
}
// Markdown items: Create slug and collection nodes based on folder
exports.onCreateNode = ({ node, getNode, actions}) => {
    if(node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'content' })

        actions.createNodeField({
            node,
            name: 'slug',
            value: `/blogs${slug}`
        })
    }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    
    // Query
    const queryResult = await graphql(`
    {
        postQuery: allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { archived: { eq: false } }}
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }`)
    if (queryResult.errors){
        reporter.panic("error loading events", queryResult.errors)
        return
    }

    const posts = queryResult.data.postQuery.edges
    posts.forEach(post => {
        createPage({
            path: post.node.fields.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
                // data passed to context is available
                // in page queries as GraphQL variables.
                slug: post.node.fields.slug,
            },
        })
        
    })

    // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: "/blogs", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/blogs.js`), // Just like `createPage()`
  })
}