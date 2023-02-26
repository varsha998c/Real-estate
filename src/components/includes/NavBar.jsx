import React from "react";
import styled from "styled-components";

function NavBar({ isMenu, setMenu }) {
    return (
        <>
            {isMenu && (
                <Container className={isMenu && "slide"}>
                    <Middle>
                        <Ul>
                            <Li>
                                <a href="/"> HOME</a>
                            </Li>
                            <Li>
                                <a href="/">PROFILE</a>
                            </Li>
                            <Li>
                                <a href="/">REPORTS</a>
                            </Li>
                            <Li>
                                <a href="/">INSIGHTS</a>
                            </Li>
                        </Ul>
                        <Login>
                            <a href="/">login</a>
                        </Login>
                        <Start>
                            <a href="/">get started</a>
                        </Start>
                    </Middle>
                </Container>
            )}
        </>
    );
}

export default NavBar;
const Container = styled.div`
    /* position: absolute;
    width: 300px;
    height: 100vh;
    background: #fff;
    right: 0;
    padding: 20px;
    top: 68px;
    z-index: 1;
    transition: 0.3s ease-in-out; */
    /*     position: absolute;
    background: red;
    border-radius: 4px;
    width: 100vw;
    height: 90vh; */
    position: fixed;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    width: 100vw;
    height: 90vh;
    top: 0px;
    right: 0px;
    padding: 20px 50px;
    box-sizing: border-box;
    transition: all 400ms ease-in-out 0s;
    transform: translateY(-200vh);
    overflow-y: scroll;
    z-index: 12;
    display: none;
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    &.slide {
        transform: translateX(0);
        transition: 400ms ease-in-out;
        display: block;
    }
`;
const Middle = styled.div`
    z-index: 1;

    display: flex;
    flex-direction: column;
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
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
    margin-bottom: 20px;
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
            border-bottom: 2px solid #2e2e2e;
            cursor: pointer;
            font-family: nunito_medium;
        }
    }
`;
const Login = styled.div`
    margin-right: 20px;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    border-radius: 4px;
    text-transform: uppercase;
    font-size: 13px;
`;
const Start = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    text-transform: uppercase;
    font-size: 13px;
`;
