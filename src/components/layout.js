import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"


const Layout = ({showSocials, children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    menuLinks {
                        name
                        link
                    }
                }
            }
        }
    `)
    return (
        <>
            <Header showSocials={showSocials} menuLinks={data.site.siteMetadata.menuLinks}/>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    )
}

export default Layout