import React, { useState, useEffect } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setTimeout(function() {
        setIsLoading(false)
      }, 5000)
    }
    fetchData()
  }, []) // Empty array: runs only once: on Component did mount

  // Only text for simplicity, you can replace Loading... div with picture: see loadingSpinner2
  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <b>-- LOADED --</b>
        </div>
      )}
      <div>Loading took 5 seconds</div>
    </>
  )
}
export default App
