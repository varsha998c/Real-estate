import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../includes/NavBar";

function Header() {
    const [isMenu, setMenu] = useState(false);
    console.log(isMenu, "is");
    return (
        <>
            <NavBar isMenu={isMenu} setMenu={setMenu} />
            <Container>
                <Section className="wrapper">
                    <Left>
                        <LogoContainer>
                            <img
                                src={
                                    require("../../assets/images/logo.svg")
                                        .default
                                }
                                alt="logo"
                            />
                        </LogoContainer>
                    </Left>
                    <Middle>
                        <Ul>
                            <Li>HOME</Li>
                            <Li>PROFILE</Li>
                            <Li>REPORTS</Li>
                            <Li>INSIGHTS</Li>
                        </Ul>
                    </Middle>
                    <Right>
                        <Login>login</Login>
                        <Start>get started</Start>
                        <MenuIcon onClick={() => setMenu(!isMenu)}>
                            <img
                                src={
                                    require("../../assets/images/menu_icon.svg")
                                        .default
                                }
                                alt="menu icon"
                            />
                        </MenuIcon>
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default Header;
const Container = styled.div`
    width: 100%;
    padding: 10px 0;
    position: relative;
`;
const Section = styled.div`
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div``;
const LogoContainer = styled.div`
    width: 200px;
    @media all and (max-width: 1280px) {
        width: 170px;
    }
    @media all and (max-width: 640px) {
        width: 160px;
    }
    img {
        width: 100%;
        display: block;
    }
`;
const Middle = styled.div`
    width: 30%;
    z-index: 1;
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Li = styled.li`
    font-size: 13px;
    text-transform: uppercase;
    color: #2e2e2e;
    padding-bottom: 5px;
    font-family: nunito_regular;
    border-bottom: none;
    list-style: none;
    cursor: pointer;
    position: relative;
    &:hover {
        color: #000;
    }
    &::after {
        content: "";
        width: 0px;
        height: 2px;
        background-color: #2e2e2e;
        border-radius: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    &:hover {
        &::after {
            width: 100%;
            display: block;
            transition: 0.3s;
            /* padding-bottom: 5px; */
            border-bottom: 2px solid #2e2e2e;
            cursor: pointer;
            font-family: nunito_medium;
        }
    }
`;
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MenuIcon = styled.div`
    width: 25px;
    display: none;
    @media all and (max-width: 980px) {
        display: block;
    }
`;
const Login = styled.div`
    margin-right: 20px;
    width: 100px;
    height: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #2e2e2e;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 13px;
    @media all and (max-width: 1280px) {
        width: 90px;
        height: 45px;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Start = styled.div`
    width: 120px;
    height: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 1px solid #2e2e2e;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 13px;
    @media all and (max-width: 1280px) {
        width: 110px;
        height: 45px;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
