import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const hlist = {
  paddingLeft: "30px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" />
    <ul>
      <li>
        Arrays
        <Link style={hlist} to="/arrays1/">
          Arrays
        </Link>
      </li>
      <li>
        Lists
        <Link style={hlist} to="/lists1/">
          Simple list
        </Link>
        <Link style={hlist} to="/lists2/">
          Styled list
        </Link>
        <Link style={hlist} to="/lists3/">
          Sortable list
        </Link>
      </li>

      <li>
        Hooks
        <Link style={hlist} to="/hooks1/">
          Basic example
        </Link>
      </li>

      <li>
        Data fetching and displaying: Country cards
        <ol>
          <li>
            Loading spinners:
            <Link style={hlist} to="/loadingSpinner1/">
              Text
            </Link>
            <Link style={hlist} to="/loadingSpinner2/">
              Image
            </Link>
            <Link style={hlist} to="/loadingSpinner3/">
              Cat
            </Link>
          </li>
        </ol>
      </li>

      <li>
        Layouts
        <ol>
        <li>
        <Link style={hlist} to="/layouts1/">
              Basic Layout
            </Link>
            <Link style={hlist} to="/layouts2/">
              Basic Layout with function
            </Link>
          </li>

        </ol>
      </li>


      <li>
        Input:
        <Link style={hlist} to="/inputLabelAsPlaceholder/">
          Label as Placeholder
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
