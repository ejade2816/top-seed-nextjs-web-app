import styled from "styled-components"
import PropTypes from 'prop-types';
import Brand from "./components/Brand";
import Contact from "./components/Contact";

export default function AppFooter() {
    return (
        <Footer>
            <Brand/>
            <Contact/>
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    background-image: linear-gradient(to right, #263554, #5D455E);
    justify-content: center;
    padding: 10vh;
    gap: 2em;
	flex-wrap: wrap;
`