import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { withRouter } from 'next/router'


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


function Header({router}) {
  const isInMain = router.pathname == "/";
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "20px"}}>
            <Span>Blanky Dev</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
  
          {isInMain ? (
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          ) : (
            <Link href="/#projects">
              <NavLink>Projects</NavLink>
            </Link>
          )}
          
          
        </li>
  
        <li>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
        </li>
  
        <li>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/blankydev">
          <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
  
        <SocialIcons href="https://www.instagram.com/_nikos_metz_/">
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </SocialIcons>
      </Div3>
    </Container>
  );
} 

export default withRouter(Header);
