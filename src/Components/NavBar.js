import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from '../images/logo.png';
import styled from "styled-components";


const Image = styled.img`
    width: 48px;
    height: 48px;
    margin: 0px 20px;
`

const Hyperlink = styled.a`
    text-decoration: none;
    color: #F08080;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #F08080;
    border-bottom: 3px solid #FF2625;

`

const Navbar = () => (
    <Stack 
        direction="row" 
        justifyContent="space-around" 
        sx={{ gap: { sm: '123px', xs: '40px' }, 
        mt: { sm: '32px', xs: '20px' }, 
        justifyContent: 'none' }} 
        px="20px"
    >
        <Link to="/">
            <Image src={Logo} alt="logo"/>
        </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <StyledLink to="/gym_react_exercises/">Home</StyledLink>
        <Hyperlink href="#exercises">Exercises</Hyperlink>
      </Stack>
    </Stack>
  );
  
  export default Navbar;