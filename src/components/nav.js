import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = () => {
  return (
    <>
      <Navigation>
        <NavLink activeClassName="actual-page" to="/">
          Inicio
        </NavLink>
        <NavLink activeClassName="actual-page" to="/nosotros">
          Nosotros
        </NavLink>
      </Navigation>
    </>
  )
}

const Navigation = styled.nav`
  display: flex;
  justify-content: center;

  @media (min-widht: 768) {
    paddgin-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.actual-page {
    border-bottom: 2px solid white;
  }
`

export default Nav
