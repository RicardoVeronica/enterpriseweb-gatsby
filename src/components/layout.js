import React from "react"
import Header from "./header"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
      </Helmet>

      <Header />

      {children}

      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
    </>
  )
}

export default Layout
