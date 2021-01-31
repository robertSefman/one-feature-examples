import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const items = []
for (let i = 1; i <= 10; i++) {
  items[i] = "Item " + i
}

const remarkStyle = {
  color: "gray",
  fontSize: "0.8em",
}

const Item = styled.li`
  display: block;
  border-top: 1px solid #888;
  list-style-type: none;
  padding: 5px 0;
  width: 300px;
  &:hover {
    background: #eee;
  }
`

const lists2 = () => (
  <Layout>
    <SEO title="Styled list" />
    <h1>Styled list</h1>
    <p style={remarkStyle}>
      Styled-components should be installed: yarn add styled-components
    </p>
    <ul>
      {items.map((item, index) => (
        <Item key={`item-${index}`}>{item}</Item>
      ))}
    </ul>
  </Layout>
)

export default lists2
