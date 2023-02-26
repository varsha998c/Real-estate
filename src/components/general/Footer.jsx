import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <>
            <Container>
                <Section>
                    <Left>
                        <LogoCantainer>
                            <img
                                src={
                                    require("../../assets/images/logo.svg")
                                        .default
                                }
                                alt="logo"
                            />
                        </LogoCantainer>
                    </Left>
                    <NavBar className="one">
                        <Ul className="list">
                            <Li>HOME</Li>
                            <Li>PROFILE</Li>
                            <Li>REPORTS</Li>
                            <Li>INSIGHTS</Li>
                        </Ul>
                    </NavBar>
                    <NavBar>
                        <Ul>
                            <Li>Information centre</Li>
                            <Li>Terms & conditions</Li>
                            <Li> privacy policy</Li>
                        </Ul>
                    </NavBar>
                    <Media>
                        <Top>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/facebook.svg")
                                            .default
                                    }
                                    alt="facebook"
                                />
                            </ImgContainer>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/insta.svg")
                                            .default
                                    }
                                    alt="facebook"
                                />
                            </ImgContainer>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/twitter.svg")
                                            .default
                                    }
                                    alt="facebook"
                                />
                            </ImgContainer>
                            <ImgContainer>
                                <img
                                    src={
                                        require("../../assets/images/linkedin.svg")
                                            .default
                                    }
                                    alt="facebook"
                                />
                            </ImgContainer>
                        </Top>
                        <Span>©2022 wealth properties.</Span>
                    </Media>
                </Section>
            </Container>
        </>
    );
}

export default Footer;
const Container = styled.div`
    width: 100%;
    padding: 50px 0;
`;
const Section = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;
const Left = styled.div`
    width: 15%;
    @media all and (max-width: 1080px) {
        width: 18%;
    }
    @media all and (max-width: 980px) {
        width: 26%;
    }
    @media all and (max-width: 768px) {
        width: 45%;
        margin-bottom: 30px;
    }
`;
const LogoCantainer = styled.div`
    width: 200px;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 1280px) {
        width: 130px;
    }
`;
const NavBar = styled.div`
    width: 15%;
    &.one {
        @media all and (max-width: 1280px) {
            width: 20%;
        }
        @media all and (max-width: 980px) {
            width: 25%;
        }
        @media all and (max-width: 768px) {
            width: 45%;
            margin-bottom: 30px;
            align-items: flex-end;
        }
    }
    @media all and (max-width: 1280px) {
        width: 23%;
    }
    @media all and (max-width: 980px) {
        width: 25%;
    }
    @media all and (max-width: 768px) {
        width: 45%;
    }
    @media all and (max-width: 480px) {
        width: 50%;
    }
    @media all and (max-width: 360px) {
        width: 40%;
    }
`;

const Media = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1280px) {
        width: 30%;
    }
    @media all and (max-width: 980px) {
        width: 25%;
    }
    @media all and (max-width: 768px) {
        width: 45%;
    }
    @media all and (max-width: 360px) {
        width: 50%;
    }
`;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    &.list {
        @media all and (max-width: 768px) {
            align-items: flex-end;
        }
    }
`;
const Li = styled.li`
    text-transform: uppercase;
    list-style: none;
    margin-bottom: 16px;
    color: #2e2e2e;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 1080px) {
        font-size: 13px;
    }
    @media all and (max-width: 980px) {
        font-size: 12px;
    }
`;
const ImgContainer = styled.div`
    width: 30px;
    height: 30px;
    @media all and (max-width: 1080px) {
        width: 25px;
        height: 25px;
    }
    @media all and (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
    img {
        width: 100%;
        display: block;
        height: 100%;
    }
`;
const Span = styled.span`
    text-align: right;
    font-size: 12px;
    margin-top: 30px;
    @media all and (max-width: 1080px) {
        margin-top: 10px;
    }
    @media all and (max-width: 480px) {
        font-size: 10px;
        margin-top: -8px;
    }
`;
const Top = styled.div`
    display: flex;
    width: 40%;
    margin-left: auto;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: 75%;
    }
    @media all and (max-width: 768px) {
        margin: 20px 0;
        margin-left: auto;
    }
    @media all and (max-width: 480px) {
        width: 90%;
    }
`;
