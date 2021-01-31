import React from "react"

const imgSrc =
  "https://www.usanetwork.com/sites/usanetwork/files/styles/full_episodes_633x356/public/2018/07/suits_cast_harvey_s8.jpg?itok=MhV6ThVz"

export default () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ height: 100, width: 100, objectFit: "cover", margin: 0 }}
        src={imgSrc}
        alt="Harvey Spector"
      />
      <h3>Harvey Spector</h3>
    </div>
  )
}
