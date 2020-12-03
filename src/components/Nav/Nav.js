import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Line from "./NavLine";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Druashley
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="projects">Projects</Link>
          <Line pathname={pathname} routename={"/projects"} />
        </li>
        <li>
          <Link to="resume">Resume</Link>
          <Line pathname={pathname} routename={"/resume"} />
        </li>
        <li>
          <Link to="journal">Journal</Link>
          <Line pathname={pathname} routename={"/journal"} />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 1rem 10rem;
  margin: auto;
  background: #222222;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: "Playfair Display", serif;

  a {
    text-decoration: none;
    color: #ccc;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
  #logo {
    font-family: "Permanent Marker", cursive;
    font-size: 1.66rem;
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
