import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { SortableContainer, SortableElement } from "react-sortable-hoc"

const items = []
for (let i = 1; i <= 10; i++) {
  items[i] = "Item " + i
}

const List = styled.ul`
  margin: auto;
  width: calc(100% - 20px);
  padding-left: 0;
`

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
const remarkStyle = {
  color: "gray",
  fontSize: "0.8em",
}

const SortableItem = SortableElement(Item)

const SortableList = SortableContainer(props => {
  return (
    <List>
      {props.items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index}>
          {item}
        </SortableItem>
      ))}
    </List>
  )
})

const lists3 = () => (
  <Layout>
    <SEO title="Sortable list" />
    <h1>Sortable list</h1>
    <p style={remarkStyle}>
      React-sortable-hoc should be installed: yarn add react-sortable-hoc
    </p>
    <SortableList items={items} />
  </Layout>
)

export default lists3
