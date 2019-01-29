import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import colors from "./colors";

/* Styled components */
const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  /* Use & to represent element in compound selector */
  &:hover {
    text-decoration: underline;
  }
`;

const Spin = keyframes`
  from { transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
const SearchGlass = styled("span")`
  display: inline-block;
  animation: 1s ${Spin} linear infinite;
`;

const NavBar = () => (
  <Container>
    <NavLink to="/">Adopt Me!</NavLink>
    <Link to="/search-params">
      {/* eslint-disable-next-line */}
      <SearchGlass aria-label="search" role="img">
        🔍
      </SearchGlass>
    </Link>
  </Container>
);

export default NavBar;
