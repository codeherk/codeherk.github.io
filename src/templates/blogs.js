import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blogs.module.scss"
import Pagination from "../components/pagination"

export default function Blogs({data, pageContext}) {
    const posts = data.allMarkdownRemark.edges 
  return (
    <Layout showSocials={false}>
      <SEO
        title="Byron Jenkins | Blogs"
        description="List of blogs."
        image="/self-img.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
        {/* <h3>Blogs</h3> */}
        <div className={styles.message}>
          <h1>You can find the same content posted on my <a href="https://instagram.com/codeherk"> Instagram page</a></h1>
          <p>This serves as an additional resource for those who need links, resources, etc.</p>
        </div>
        <div className={styles.blogList}>
            {posts.map(({ node }, index) => (
                <Link to={node.fields.slug} key={index}>
                    <div className={styles.blog}>
                      {node.frontmatter.image && (
                        <div className={styles.blog_img}>
                            <Img
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            alt={node.frontmatter.title}
                            />
                        </div>
                      )}
                      <div className={styles.blog_img_mask}>
                          <div className={styles.blog_iconWrapper}></div>
                      </div>
                      <div className={styles.content}>
                          <div className={styles.tags}>
                              {node.frontmatter.tags && node.frontmatter.tags.map((tag, idx) => (
                                  <span key={idx}>#{tag}</span>
                              ))}
                          </div>
                          <h3>{node.frontmatter.title}</h3>
                          <p>{node.excerpt}</p>
                          
                          <div className={styles.blogDate}>
                              <span>{new Date(node.frontmatter.date).toLocaleDateString("en-US")}</span>
                          </div>
                      </div>
                    </div>
                </Link>  
            ))}
        </div>
        {/* <div className={styles.blogList}>
            <div className={styles.blog}>
                <h3>Blog Title</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                
                    <span className={styles.blogDate}>2020, Month Day</span>
                <div className={styles.tags}>
                    <span>#javascript</span>
                    <span>#javascript</span>
                </div>
            </div>
        </div> */}
        <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { archived: { eq: false } }}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            image {
              childImageSharp { 
                fluid(maxWidth: 480){
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
