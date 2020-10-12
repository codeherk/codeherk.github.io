import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout'
import style from './blog.module.scss'
import SEO from "../components/seo";

export default ({ data }) => {
    const article = data.markdownRemark
    return (
        <Layout showSocials={false}>
            <SEO
            title={article.frontmatter.title}
            description={article.excerpt}
            image="/self-img.png"
            pathname={article.fields.slug}
            // Boolean indicating whether this is an article:
            article
            />
            <article className={style.article}>
                <h1 className={style.article__title}>{article.frontmatter.title}</h1>                
                <div className={style.article__meta}>
                    Published{" "} {new Date (article.frontmatter.date).toLocaleDateString("en-US")}
                </div>
                <div
                className={style.article__content}
                // See https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
                dangerouslySetInnerHTML={{ __html: article.html }}
                />
            </article>
        </Layout>
    )
}


export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug} }){
        html
        excerpt
        fields {
            slug
        }
        frontmatter {
            title
            layout
            date
        }
    }
}
`

// img {
//     childImageSharp {
//         fluid(maxWidth: 1080){
//             ...GastbyImageSharpFluid
//         }
//     }
// }