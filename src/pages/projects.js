import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./projects.module.scss"

export default function Projects({data}) {
  return (
    <Layout>
      <SEO
        title="Byron Jenkins | Projects"
        description="List of projects."
        image="/self-img.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <div className={styles.projectList}>
        List of projects coming soon!
      </div>
    </Layout>
  )
}