import React from "react";
import styled from "styled-components";

function Explore() {
    return (
        <>
            <Container>
                <Section className="wrapper">
                    <Left>
                        <Heading>
                            Explore the most attractive areas in Kyiv
                            neighborhoods to buy a home
                        </Heading>
                        <Paragraph>
                            We are very proud of the service we provide.
                            Discover the hottest communities available in our
                            portfolio. Look through the most popular areas. Our
                            locations and services prove we are the best.
                        </Paragraph>
                        {""}
                        <Paragraph>
                            Kyiv is the capital and most populous city of
                            Ukraine.The city’s name is said to derive from the
                            name of Kyi, one of its four legendary founders. We
                            rank amongst the Top 6 agencies in the world.
                        </Paragraph>
                    </Left>
                    <Right>
                        <TopSection>
                            <Contents>
                                <Div>
                                    <ImgContainer>
                                        <img
                                            className="icons"
                                            src={
                                                require("../../../assets/images/Vector (1).svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </ImgContainer>
                                </Div>
                                <Span>
                                    Trusted and verified property listings.
                                </Span>
                            </Contents>
                            <Contents>
                                <Div>
                                    <ImgContainer>
                                        <img
                                            className="icons"
                                            src={
                                                require("../../../assets/images/Vector (2).svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </ImgContainer>
                                </Div>
                                <Span>
                                    Personalized filters that make property
                                    search easier.
                                </Span>
                            </Contents>
                            <Contents>
                                <Div>
                                    <ImgContainer>
                                        <img
                                            className="icons"
                                            src={
                                                require("../../../assets/images/Vector (3).svg")
                                                    .default
                                            }
                                            alt="image"
                                        />{" "}
                                    </ImgContainer>
                                </Div>
                                <Span>
                                    Complete info on trending properties listed.
                                </Span>
                            </Contents>
                            <Contents>
                                <Div>
                                    <ImgContainer>
                                        <img
                                            className="icons"
                                            src={
                                                require("../../../assets/images/Vector (4).svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </ImgContainer>
                                </Div>
                                <Span>
                                    Details info about the property that are in
                                    wishlist.
                                </Span>
                            </Contents>
                            <Contents>
                                <Div>
                                    <ImgContainer>
                                        <img
                                            className="icons"
                                            src={
                                                require("../../../assets/images/Vector (5).svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </ImgContainer>
                                </Div>
                                <Span>
                                    Home plan layouts for virtual tours of every
                                    house.
                                </Span>
                            </Contents>
                            <Contents>
                                <Div>
                                    <ImgContainer>
                                        <img
                                            className="icons"
                                            src={
                                                require("../../../assets/images/Vector (6).svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </ImgContainer>
                                </Div>
                                <Span>
                                    QR scan code for retrieving property
                                    details.
                                </Span>
                            </Contents>
                        </TopSection>
                        <BottomSection>
                            <Description>
                                With tons of benefits for customers. Go True
                                People Wall is the ultimate place where a buyer
                                will search for properties online.
                            </Description>
                        </BottomSection>
                    </Right>
                </Section>
            </Container>
        </>
    );
}

export default Explore;
const Container = styled.div`
    width: 100%;
    background: #2e2e2e;
    padding: 80px 0;
    border-bottom: 1px solid #616161;
`;
const Section = styled.div`
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 980px) {
        flex-direction: column;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Left = styled.div`
    width: 49%;

    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Heading = styled.h3`
    width: 82%;
    color: #ffffff;
    font-size: 38px;
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        width: 92%;
        color: #ffffff;
        font-size: 30px;
    }
    @media all and (max-width: 1080px) {
        width: 95%;
        color: #ffffff;
        font-size: 28px;
    }

    @media all and (max-width: 640px) {
        width: 100%;
        color: #ffffff;
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 22px;
    }
    @media all and (max-width: 360px) {
    }
`;
const Paragraph = styled.p`
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }

    @media all and (max-width: 640px) {
        font-size: 14px;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Right = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Contents = styled.div`
    width: 47%;
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 480px) {
        width: 100%;
    }
    @media all and (max-width: 360px) {
    }
`;
const Div = styled.div`
    width: 88px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(90deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%);
    @media all and (max-width: 1280px) {
        width: 79px;
        height: 79px;
        margin-right: 10px;
    }
    @media all and (max-width: 1080px) {
        width: 69px;
        height: 69px;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const ImgContainer = styled.div`
    width: 86px;
    height: 86px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4a4a4a;
    img.icons {
        width: 50px;
        display: block;
        @media all and (max-width: 1280px) {
            width: 35px;
        }
    }
    @media all and (max-width: 1280px) {
        width: 74px;
        height: 74px;
    }
    @media all and (max-width: 1080px) {
        width: 65px;
        height: 65px;
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Span = styled.span`
    color: #fff;
    font-size: 20px;
    width: 195px;
    @media all and (max-width: 1280px) {
        font-size: 16px;
        width: 140px;
    }
    @media all and (max-width: 1080px) {
        font-size: 14px;
        width: 123px;
    }
    @media all and (max-width: 980px) {
        width: 224px;
    }
    @media all and (max-width: 768px) {
        width: 176px;
    }
    @media all and (max-width: 640px) {
        width: 118px;
    }
    @media all and (max-width: 480px) {
        width: 200px;
    }
    @media all and (max-width: 360px) {
    }
`;
const BottomSection = styled.div`
    background: #c471ed;
    border-radius: 4px;
    padding: 20px;
    @media all and (max-width: 1280px) {
        margin-top: 20px;
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const TopSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    @media all and (max-width: 1280px) {
        gap: 25px;
    }

    @media all and (max-width: 980px) {
        margin-top: 30px;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
        flex-direction: column;
    }
    @media all and (max-width: 360px) {
    }
`;

const Description = styled.p`
    font-size: 20px;
    color: #fff;
    @media all and (max-width: 1280px) {
        font-size: 17px !important;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }

    @media all and (max-width: 640px) {
        font-size: 14px;
    }
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
    @media all and (max-width: 360px) {
    }
`;
