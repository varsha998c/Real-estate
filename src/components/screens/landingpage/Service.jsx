import React from "react";
import styled from "styled-components";

function Service() {
    return (
        <Container>
            <Heading>
                We offer a complete spectrum
                <br /> of services for your real estate needs
            </Heading>
            <Section className="wrapper">
                <Left>
                    <ImgContainer>
                        <img
                            src={require("../../../assets/images/Group 21.png")}
                            alt="image"
                        />
                        <ImageContainer>
                            <img
                                src={require("../../../assets/images/freepik--Character--inject-37.png")}
                                alt="image"
                            />
                        </ImageContainer>
                        <Img
                            src={require("../../../assets/images/freepik--path--inject-28.png")}
                            alt="image"
                        />
                    </ImgContainer>
                </Left>

                <Right>
                    <Title>Create Attractive Profiles</Title>
                    <Descriptions>
                        Interior brings 41 years of interior designs experience
                        right to your home or office. Our design professionals
                        are equipped to help you determine the products and
                        design that work best for our customers.
                    </Descriptions>
                    <Ul>
                        <li>Create folders and files</li>
                        <li>Set up an internet connection</li>
                        <li>Connect your computer</li>
                        <li>Navigate all of the programs</li>
                        <li>Operating system</li>
                    </Ul>
                    <Button>
                        <Start>get started</Start>
                    </Button>
                </Right>
            </Section>
        </Container>
    );
}

export default Service;
const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    /* background: #e5e5e5; */
    position: relative;
    @media all and (max-width: 480px) {
        padding: 0;
    }
`;
const Section = styled.div`
    width: 82%;
    margin: 90px auto 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: 85%;
    }
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const Heading = styled.h4`
    text-align: center;
    width: 45%;
    font-size: 35px;
    margin: 60px auto 0;
    @media all and (max-width: 1280px) {
        width: 53%;
        font-size: 31px;
        margin: 60px auto 0;
    }
    @media all and (max-width: 1080px) {
        width: 60%;
        font-size: 28px;
    }
    @media all and (max-width: 980px) {
        width: 80%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
`;
const ImgContainer = styled.div`
    width: 600px;
    position: relative;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 1280px) {
        width: 450px;
    }
    @media all and (max-width: 1080px) {
        width: 421px;
    }
    @media all and (max-width: 980px) {
        width: 500px;
        margin: 0 auto;
    }
    @media all and (max-width: 640px) {
        width: 430px;
    }
    @media all and (max-width: 480px) {
        width: 320px;
    }
    @media all and (max-width: 360px) {
        width: 287px;
    }
`;
const ImageContainer = styled.div`
    right: 125px;
    width: 370px;
    bottom: 168px;
    position: absolute;
    z-index: 1;
    @media all and (max-width: 1280px) {
        right: 125px;
        width: 255px;
        bottom: 130px;
    }
    @media all and (max-width: 1080px) {
        right: 103px;
        width: 220px;
        bottom: 126px;
    }
    @media all and (max-width: 980px) {
        right: 119px;
        width: 316px;
        bottom: 139px;
    }
    @media all and (max-width: 640px) {
        width: 240px;
    }
    @media all and (max-width: 480px) {
        right: 90px;
        width: 184px;
        bottom: 100px;
    }
    img {
        display: block;
        width: 100%;
    }
`;
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 50%;
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Ul = styled.div`
    display: flex;
    flex-direction: column;
    li {
        font-size: 20px;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
        @media all and (max-width: 1280px) {
            font-size: 18px;
        }
        @media all and (max-width: 1080px) {
            font-size: 16px;
        }
    }
`;
const Img = styled.img`
    width: 163px !important;
    position: absolute !important;
    bottom: 209px !important;
    left: 252px !important;
    height: 37px !important;
    @media all and (max-width: 1280px) {
        width: 122px !important;
        position: absolute !important;
        bottom: 154px !important;
        left: 164px !important;
        height: 37px !important;
    }
    @media all and (max-width: 1080px) {
        width: 114px !important;
        position: absolute !important;
        bottom: 148px !important;
        left: 180px !important;
    }
    @media all and (max-width: 768px) {
        width: 130px !important;
        position: absolute !important;
        bottom: 175px !important;
        left: 195px !important;
    }
    @media all and (max-width: 640px) {
        width: 102px !important;
        position: absolute !important;
        bottom: 163px !important;
        left: 164px !important;
    }
    @media all and (max-width: 480px) {
        width: 77px !important;
        position: absolute !important;
        bottom: 116px !important;
        left: 117px !important;
    }
`;
const Descriptions = styled.p`
    font-size: 22px;
    line-height: 2rem;
    margin-bottom: 40px;
    @media all and (max-width: 1280px) {
        font-size: 17px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
`;
const Title = styled.h2`
    color: #2e2e2e;
    font-size: 26px;
    margin-bottom: 20px;
    @media all and (max-width: 1280px) {
        font-size: 22px;
    }
    @media all and (max-width: 1080px) {
        font-size: 20px;
    }
`;
const Button = styled.div`
    width: 200px;
    position: relative;
    height: 48px;
    margin-top: 50px;
    border-radius: 5px;
    background: linear-gradient(90deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%);
    @media all and (max-width: 1080px) {
        width: 174px;
        position: relative;
        height: 48px;
    }
`;
const Start = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 197px;
    margin: 0 auto;
    height: 45px;
    position: absolute;
    top: 2px;
    left: 1px;
    right: 0px;
    bottom: 0px;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 3px;

    @media all and (max-width: 1280px) {
        width: 195px;
        margin: 0 auto;
        height: 45px;
    }
    @media all and (max-width: 1080px) {
        width: 170px;
        margin: 0 auto;
        height: 43px;
    }
`;
