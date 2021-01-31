import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const items = ["Item 4", "Item 5", "Item 6"]

const captionStyle = {
  backgroundColor: "lightgray",
  listStyleType: "none",
  marginLeft: "-20px",
}

const lists1 = () => (
  <Layout>
    <SEO title="Simple list" />
    <h1>Simple list</h1>
    <ul>
      {/* We can set items manually, but... */}
      <li style={captionStyle}>Manual, with missing unique key warning</li>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li style={captionStyle}>
        From variable/const, with missing unique key warning
      </li>
      {/* Displaying items from the predefined variable -
      this causes Warning: Each child in a list should have a unique "key" prop. */}
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <li style={captionStyle}>
        From variable/const, missing unique key warning fixed
      </li>
      <li style={{ listStyleType: "none" }}>
        <a
          href="https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318"
          target="_blank"
          rel="noopener noreferrer"
        >
          ( Index as a key could be dangerous )
        </a>
      </li>
      {/* fixing  unique "key" Warning: */}
      {items.map((item, index) => (
        <li key={`item-${index}`}>{item}</li>
      ))}
      <li style={captionStyle}>
        From variable/const, warning fixed, key displayed
      </li>
      {/* Displaying unique "key" in a list: */}
      {items.map((item, index) => (
        <li key={`item-${index}`}>
          {item}, key: {`item-${index}`}
        </li>
      ))}
    </ul>
  </Layout>
)

export default lists1
