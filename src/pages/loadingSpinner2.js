import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import HashLoader from "react-spinners/HashLoader"

//https://www.davidhu.io/react-spinners/
// yarn add react-spinners

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState("")

  const override = css`
    display: block;
    margin: 20% auto;
    border-color: red;
  `

  const Spinner = () => (
    <HashLoader
      css={override}
      size={50}
      color={"#123abc"}
      loading={isLoading}
    />
  )

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setTimeout(function() {
        setIsLoading(false)
        setData("Show some data....")
      }, 5000)
    }
    fetchData()
  }, []) // Empty array: runs only once: on Component did mount

  const Data = () => <div style={{ margin: "20%" }}>{data}</div>
  return (
    <>
    <div>Loading took 5 seconds:</div>
      <Spinner />
      <Data />
    </>
  )
}
export default App
