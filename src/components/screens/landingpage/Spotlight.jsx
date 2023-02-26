import React from "react";
import styled from "styled-components";
import Header from "../../general/Header";

function Spotlight() {
    return (
        <Container>
            <Pink></Pink>
            <Red></Red>
            <Header />
            <Section className="wrapper">
                <Left>
                    <Heading>
                        Buy your <br />
                        <span className="one">dream home</span> <br />
                        in Kyiv!
                    </Heading>
                    <Button>Get Started</Button>
                </Left>
                <Right>
                    <ImgContainer>
                        <img
                            src={require("../../../assets/images/Group 6.png")}
                            alt="image"
                        />
                        <ImageContainer>
                            <img
                                src={require("../../../assets/images/Group 7.png")}
                                alt="image"
                            />
                        </ImageContainer>
                    </ImgContainer>
                </Right>
            </Section>
            <Title>
                Senlling a property can be quite challenging<br></br> If you
                don't have the right tools at your disposals.
            </Title>
            <Descriptions>
                We help our clients sell, buy or rent properties hassle free.
                Due to our unparalleled results, expertise and dedication, we
                rank amongst the top 6 agencies in Kyiv.We are very proud of the
                service we provide and what our guests have to say about us.
            </Descriptions>
            <Color className="color"></Color>
        </Container>
    );
}

export default Spotlight;

const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    /* background: #e5e5e5; */
    position: relative;
    @media all and (max-width: 980px) {
        padding: 15px 0;
    }
`;
const Pink = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    left: 465px;
    top: -255px;
    background: #c471ed;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 1280px) {
        left: 232px;
    }
    @media all and (max-width: 768px) {
        left: 69px;
        z-index: -1;
    }
    @media all and (max-width: 640px) {
        left: -33px;
    }
    @media all and (max-width: 640px) {
        left: -142px;
    }
    @media all and (max-width: 480px) {
        left: -156px;
    }
    @media all and (max-width: 360px) {
        left: -260px;
    }
`;
const Red = styled.div`
    position: absolute;
    width: 510px;
    height: 510px;
    right: 0;
    top: 281px;
    background: #f64f59;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 1280px) {
        width: 296px;
        height: 412px;
    }
`;
const Color = styled.div`
    position: absolute;
    width: 500px;
    height: 400px;
    left: -255px;
    top: 512px;
    background: #12c2e9;
    opacity: 0.56;
    filter: blur(200px);
    @media all and (max-width: 1280px) {
        width: 410px;
        height: 294px;
    }
`;
const Section = styled.div`
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.content {
        width: 85%;
        margin-top: 90px;
    }
    @media all and (max-width: 768px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 40%;
    @media all and (max-width: 1080px) {
        width: 44%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 55%;
    @media all and (max-width: 1080px) {
        width: 51%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;

const Heading = styled.h1`
    margin-top: 20px;
    text-transform: uppercase;
    color: #2e2e2e;
    font-size: 55px;
    font-family: nunito_regular;
    margin-bottom: 50px;
    letter-spacing: 0.5rem;
    @media all and (max-width: 1280px) {
        font-size: 36px;
    }
    @media all and (max-width: 980px) {
        font-size: 26px;
    }
    @media all and (max-width: 768px) {
        font-size: 40px;
        text-align: center;
    }
    @media all and (max-width: 640px) {
        font-size: 36px;
    }
    @media all and (max-width: 480px) {
        font-size: 30px;
        margin-top: 50px;
    }
    @media all and (max-width: 360px) {
        font-size: 26px;
    }

    span {
        font-family: nunito_medium;
        text-transform: uppercase;
        color: #2e2e2e;
        font-size: 55px;
        @media all and (max-width: 1280px) {
            font-size: 36px;
        }
        @media all and (max-width: 980px) {
            font-size: 26px;
        }
        @media all and (max-width: 768px) {
            font-size: 40px;
            text-align: center;
        }
        @media all and (max-width: 640px) {
            font-size: 36px;
        }
        @media all and (max-width: 480px) {
            font-size: 30px;
        }
        @media all and (max-width: 360px) {
            font-size: 26px;
        }
    }
`;
const Title = styled.h2`
    text-align: center;
    color: #2e2e2e;
    font-size: 34px;
    width: 60%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        font-size: 26px;
        width: 80%;
    }
    @media all and (max-width: 980px) {
        font-size: 20px;
        width: 78%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        font-size: 16px;
        width: 98%;
        margin: 0 auto !important;
    }
    &.title {
        width: 100%;
        text-align: left;
    }
`;
const Descriptions = styled.p`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
    &.paragraph {
        width: 100%;
        text-align: left;
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
        width: 70%;
    }
    @media all and (max-width: 980px) {
        font-size: 13px;
        width: 77%;
    }
    @media all and (max-width: 640px) {
        width: 96%;
    }
`;
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
    @media all and (max-width: 1280px) {
        width: 170px;
        font-size: 16px;
    }
    @media all and (max-width: 980px) {
        width: 152px;
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        margin: 0 auto;
    }
    @media all and (max-width: 360px) {
        width: 141px;
        font-size: 13px;
    }
`;

const ImgContainer = styled.div`
    position: relative;
    transform: translate(0px, -43px);
    @media all and (max-width: 1080px) {
        transform: translate(0px, -22px);
    }

    img {
        width: 100%;
        display: block;
    }
`;
const ImageContainer = styled.div`
    width: 214px;
    bottom: 115px;
    position: absolute;

    @media all and (max-width: 980px) {
        width: 164px;
        bottom: 48px;
        left: -29px;
        position: absolute;
    }
    @media all and (max-width: 768px) {
        width: 222px;
        bottom: 77px;
        left: -29px;
    }
    @media all and (max-width: 480px) {
        width: 132px;
        bottom: 50px;
        left: -5px;
    }
    img {
        display: block;
        width: 100%;
    }
`;
