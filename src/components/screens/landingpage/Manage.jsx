import React from "react";
import styled from "styled-components";

function Manage() {
    return (
        <>
            <Container>
                <Section className="wrapper">
                    <Right>
                        <Title>Manage The Account</Title>
                        <Descriptions>
                            Interior brings 41 years of interior designs
                            experience right to your home or office. Our design
                            professionals are equipped to help you determine the
                            products and design that work best for our
                            customers.
                        </Descriptions>
                        <Ul>
                            <li> Create folders and files</li>
                            <li>Set up an internet connection</li>
                            <li>Connect your computer</li>
                            <li>Navigate all of the programs</li>
                            <li>Operating system</li>
                        </Ul>
                        <Button>
                            <Start>get started</Start>
                        </Button>
                    </Right>
                    <Left>
                        <ImgContainer>
                            <img
                                src={require("../../../assets/images/Group 21.png")}
                                alt="image"
                            />
                            <ImageContainer>
                                <img
                                    src={require("../../../assets/images/Group 24.png")}
                                    alt="image"
                                />
                            </ImageContainer>
                            <Img
                                src={require("../../../assets/images/freepik--path--inject-28.png")}
                                alt="image"
                            />
                            <Image
                                src={require("../../../assets/images/freepik--path--inject-28.png")}
                                alt="image"
                            />
                        </ImgContainer>
                    </Left>
                </Section>
            </Container>
        </>
    );
}

export default Manage;
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
        flex-direction: column;
    }
`;
const Heading = styled.h4`
    text-align: center;
    width: 45%;
    font-size: 35px;
    margin: 60px auto 0;
`;
const ImgContainer = styled.div`
    width: 600px;
    position: relative;
    transform: translate(0px, 39px);

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
        transform: translate(-32px, 48px);
    }
`;
const ImageContainer = styled.div`
    right: 125px;
    width: 330px;
    bottom: 208px;
    position: absolute;
    z-index: 1;
    @media all and (max-width: 1280px) {
        right: 91px;
        width: 255px;
        bottom: 159px;
    }
    @media all and (max-width: 1080px) {
        right: 94px;
        width: 220px;
        bottom: 147px;
    }
    @media all and (max-width: 980px) {
        right: 101px;
        width: 286px;
        bottom: 170px;
    }
    @media all and (max-width: 640px) {
        width: 240px;
        right: 89px;
        bottom: 152px;
    }
    @media all and (max-width: 480px) {
        right: 64px;
        width: 184px;
        bottom: 116px;
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
    width: 119px !important;
    position: absolute !important;
    bottom: 204px !important;
    left: 161px !important;
    height: 37px !important;
    @media all and (max-width: 1280px) {
        width: 101px !important;
        position: absolute !important;
        bottom: 152px !important;
        left: 120px !important;
        height: 37px !important;
    }
    @media all and (max-width: 1080px) {
        bottom: 139px !important;
        left: 106px !important;
    }
    @media all and (max-width: 980px) {
        bottom: 161px !important;
        left: 132px !important;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        bottom: 142px !important;
        left: 107px !important;
    }
    @media all and (max-width: 480px) {
        bottom: 108px !important;
        left: 66px !important;
        width: 92px !important;
    }
    @media all and (max-width: 360px) {
    }
`;
const Image = styled.img`
    width: 105px !important;
    position: absolute !important;
    height: 34px !important;
    bottom: 272px !important;
    right: 96px !important;
    @media all and (max-width: 1280px) {
        width: 100px !important;
        position: absolute !important;
        height: 34px !important;
        bottom: 204px !important;
        right: 57px !important;
    }
    @media all and (max-width: 1080px) {
        bottom: 184px !important;
    }
    @media all and (max-width: 980px) {
        bottom: 221px !important;
        right: 69px !important;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        bottom: 191px !important;
        right: 51px !important;
    }
    @media all and (max-width: 480px) {
        width: 92px !important;
        bottom: 142px !important;
        right: 34px !important;
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
    top: 2px;
    left: 1px;
    right: 1px;
    bottom: 0px;
    text-transform: uppercase;
    background-color: #fff;
    border-radius: 3px;
`;
