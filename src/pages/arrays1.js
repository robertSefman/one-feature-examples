import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const items = [...Array(10).keys()]

// console.log(items)
const captionStyle = {
  backgroundColor: "lightgray",
  listStyleType: "none",
  marginLeft: "-20px",
}

const arrays1 = () => (
  <Layout>
    <SEO title="Arrays" />
    <h1>Array</h1>
    <ul>
      {items.map((item, index) => (
        <li key={`item-${index}`}>
          {item}, key: {`item-${index}`}
        </li>
      ))}
    </ul>
  </Layout>
)

export default arrays1
