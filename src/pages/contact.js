import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyForm from "../components/form"
import styles from "./contact.module.scss"

export default function Contact() {
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
        <div className={styles.container}>
            <h2>Want to discuss about development or collaboration? I'm open for conversation</h2>
            <MyForm></MyForm>
        </div>
    </Layout>
  )
}