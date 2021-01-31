import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/cssTest.css';

const Layout1content = () => {
  return (
    <div     className={styles.red}>
      smthg
    </div>
  )
}

const layouts1 = () => (
  <Layout>
    <SEO title="Layouts - 1" />
    <h1>Layouts - 1</h1>
    <Layout1content />
  </Layout>
)

export default layouts1
