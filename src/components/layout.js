import React from "react"
import Header from "./header"
import Helmet from "react-helmet"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
      </Helmet>

      <Header />

      {children}
    </>
  )
}

export default Layout
