import styled from "styled-components"
import PropTypes from 'prop-types';
import Image from "next/image"
import instagramCircle from "../../../assets/logos/instagram-circle.svg";
import facebookCircle from "../../../assets/logos/facebook-circle.svg";
import twitterCircle from "../../../assets/logos/twitter-circle.svg";

export default function Contact() {
    return (
        <Container>
            <Ul>
                <Li><Image layout="fixed" width={48} height={48} src={instagramCircle} alt="facebook-circle"/></Li>
                <Li><Image layout="fixed" width={48} height={48} src={facebookCircle} alt="facebook-circle"/></Li>
                <Li><Image layout="fixed" width={48} height={48} src={twitterCircle} alt="facebook-circle"/>  </Li>  
            </Ul>
            <P>
                info@topseed.com<br/>
                123-456-789<br/>
                Copyright © ACE DG Inc.<br/>
            </P>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`

const Ul = styled.ul`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
    height: 60px;
	padding: 0px;
	margin: 0px;
`;

const Li = styled.li`
	list-style-type: none;
`;

const P = styled.p`
    flex: 1;
    text-align: right;
    font-weight: 300;
    font-size: 1em;
    line-height: 1.6;
    color: var(--grey-200);
`