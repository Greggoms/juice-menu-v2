import { Link } from "gatsby"
import React from "react"
import { HeaderContainer } from "../css"

const Header = () => {
  return (
    <HeaderContainer>
      <div className="content">
        <Link to="/">lightspeed-oauth</Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
