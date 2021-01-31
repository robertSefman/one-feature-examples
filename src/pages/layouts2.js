import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: blue;
    .red{
        color: red;
} 
`


function layouts2() {
    const Layout1content = () => (
        <StyledDiv className='red'>
            outer Div
            <div className='red'>
            inner Div
            </div>
        </StyledDiv>
    )

    return (
        <Layout>
        <SEO title="Layouts - 2" />
        <h1>Layouts - 2</h1>
        <Layout1content />
      </Layout>
    );
}



export default layouts2
