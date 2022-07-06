import styled from "styled-components";
import Image from "next/image";

export default function Amenity({ title, description, icon }) {
	return (
        <Container>
            <Image height={42} width={42} src={icon} alt="" />
            <H6>{title}</H6>
            <P>{description}</P>
        </Container>
	);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 180px;
`

const H6 = styled.h6`
    margin: 0px;
    font-size: 1em;
    color: var(--night-rider);
`

const P = styled.p`
    margin: 0px;
    font-size: 0.8em;
    text-align: center;
    color: var(--night-rider);
`