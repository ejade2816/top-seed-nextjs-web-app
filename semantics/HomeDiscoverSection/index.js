import styled from "styled-components";
import Image from "next/image";
import HeroImage from "../../assets/illustrations/hero-img.svg";

export default function HomeDiscoverSection() {
	return (
		<Section>
			<Article>
				<H1>Discover Ethically<br/>Bred Kittens</H1>
				<H6>A Platform for Registered Breeders only</H6>
			</Article>
			<Input/>
			<Image src={HeroImage} alt="hero-img" />
		</Section>
	);
}

const Section = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--jagged-ice);
	gap: 2em;
`;

const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;
`

const H1 = styled.h1`
	font-size: 3em;
	font-weight: 800;
	color: var(--steelblue);
	line-height: 1.2em;
	text-align: center;
	margin-bottom: 0px;
`;

const H6 = styled.h6`
	font-size: 1.2em;
	font-weight: 600;
	color: var(--heather-100);
	text-align: center;
	margin-top: 0px;
	margin-bottom: 0px;
`;

const Input = styled.input`
	border: none;
	background: white;
	border: 1px solid var(--grey-200);
	box-shadow: var(--shadow-300);
	border-radius: 8px;
	height: 32px;
	width: 320px;
`