import styled from "styled-components"
import PropTypes from 'prop-types';
import topseedHorizontal from "../../../assets/logos/topseed-red-horizontal.svg";
import Image from "next/image";

export default function Brand() {
    return (
        <Container>
            <Image layout="fixed" width={180} height={60} src={topseedHorizontal} alt="topseed-horizontal" />
            <P>We are a group friends with diverse backgrouds from business to technology to design, bounded together by our shared love for pets.</P>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const P = styled.p`
    color: var(--grey-200);
    font-size: 1em;
`