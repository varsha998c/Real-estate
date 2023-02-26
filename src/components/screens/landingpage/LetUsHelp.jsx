import React from "react";
import styled from "styled-components";

function LetUsHelp() {
    return (
        <>
            <Container>
                <Section>
                    <Left>
                        <ImgContainer>
                            <img
                                src={require("../../../assets/images/child.png")}
                                alt="child"
                            />
                        </ImgContainer>
                    </Left>
                    <Right>
                        <Heading>
                            Let Us Help You Find Your Ideal Buyer!
                        </Heading>
                        <Description>
                            Interior brings 41 years of interior designs
                            experience right to your home or office. Our design
                            professionals are equipped to help you determine the
                            products and design that work best for our
                            customers.
                        </Description>
                        <Button>register now</Button>
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default LetUsHelp;
const Button = styled.div`
    cursor: pointer;
    background: linear-gradient(
        90deg,
        #12c2e9 -15.84%,
        #c471ed 53.22%,
        #f64f59 122.28%
    );
    z-index: 1;
    border-radius: 4px;
    width: 200px;
    height: 48px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    @media all and (max-width: 1080px) {
        font-size: 15px;
    }
    @media all and (max-width: 980px) {
        width: 190px;
    }
`;
const Container = styled.div`
    width: 100%;
    background: #2e2e2e;
    padding: 80px 0;
    border-bottom: 1px solid #616161;
`;
const Section = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 50%;
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Heading = styled.h3`
    width: 76%;
    color: #ffffff;
    font-size: 38px;
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        width: 100%;
        color: #ffffff;
        font-size: 31px;
    }
    @media all and (max-width: 1080px) {
        font-size: 27px;
    }
    @media all and (max-width: 980px) {
        font-size: 25px;
    }
    @media all and (max-width: 640px) {
        font-size: 22px;
    }
`;
const Description = styled.p`
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 1280px) {
        font-size: 19px;
    }
    @media all and (max-width: 1080px) {
        font-size: 17px;
    }
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
`;
const ImgContainer = styled.div`
    width: 500px;
    @media all and (max-width: 1280px) {
        width: 422px;
    }
    @media all and (max-width: 1080px) {
        width: 366px;
    }
    @media all and (max-width: 980px) {
        width: 274px;
    }
    @media all and (max-width: 768px) {
        width: 318px;
        margin: 0 auto;
    }
    @media all and (max-width: 360px) {
        width: 270px;
    }
    img {
        width: 100%;
        display: block;
    }
`;
