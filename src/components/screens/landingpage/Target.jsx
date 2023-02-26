import React from "react";
import styled from "styled-components";

function Target() {
    return (
        <>
            <Container>
                <Section className="wrapper">
                    <Left>
                        <ImgContainer>
                            <img
                                src={require("../../../assets/images/Group 21.png")}
                                alt="image"
                            />
                            <ImageContainer>
                                <img
                                    src={require("../../../assets/images/Group 23.png")}
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
                        <Title>Target The Right Trends</Title>
                        <Descriptions>
                            Interior brings 41 years of interior designs
                            experience right to your home or office. Our design
                            professionals are equipped to help you determine the
                            products and design that work best for our
                            customers.
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
        </>
    );
}

export default Target;
const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    /* background: #e5e5e5; */
    position: relative;
`;
const Section = styled.div`
    width: 82%;
    margin: 90px auto 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: 85%;
        margin-top: 30px;
    }
    @media all and (max-width: 980px) {
        flex-direction: column-reverse;
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
        width: 277px;
        transform: translate(-6px, 51px);
    }
`;
const ImageContainer = styled.div`
    right: 120px;
    width: 370px;
    bottom: 230px;
    position: absolute;
    z-index: 1;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 1280px) {
        right: 83px;
        width: 278px;
        bottom: 165px;
    }
    @media all and (max-width: 1080px) {
        right: 71px;
        width: 249px;
        bottom: 168px;
    }
    @media all and (max-width: 980px) {
        right: 89px;
        width: 316px;
        bottom: 183px;
    }
    @media all and (max-width: 640px) {
        width: 240px;
    }
    @media all and (max-width: 480px) {
        right: 55px;
        width: 184px;
        bottom: 127px;
    }
    @media all and (max-width: 360px) {
        right: 20px;
        width: 184px;
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
    bottom: 219px !important;
    left: 301px !important;
    height: 37px !important;
    @media all and (max-width: 1280px) {
        width: 122px !important;
        position: absolute !important;
        bottom: 154px !important;
        left: 230px !important;
        height: 37px !important;
    }
    @media all and (max-width: 1080px) {
        width: 114px !important;
        position: absolute !important;
        bottom: 156px !important;
    }
    @media all and (max-width: 980px) {
        width: 114px !important;
        position: absolute !important;
        bottom: 171px !important;
        left: 266px !important;
    }

    @media all and (max-width: 768px) {
        width: 130px !important;
        position: absolute !important;
        bottom: 175px !important;
    }
    @media all and (max-width: 640px) {
        left: 224px !important;
        width: 102px !important;
        position: absolute !important;
        bottom: 168px !important;
    }
    @media all and (max-width: 480px) {
        width: 69px !important;
        position: absolute !important;
        bottom: 113px !important;
        left: 177px !important;
    }
    @media all and (max-width: 360px) {
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
    top: 1px;
    left: 1px;
    right: 0px;
    bottom: 0px;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 3px;
`;
