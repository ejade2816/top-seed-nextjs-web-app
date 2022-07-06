import styled from "styled-components";
import PropTypes from "prop-types";
import topseedHorizontal from "../../../assets/logos/topseed-purple-horizontal.svg";
import Image from "next/image";
import Link from "next/link";

const TopSeedLogo = () => {
	return (
		<Link href="/">
			<A><Image layout="fixed" width={120} height={44} src={topseedHorizontal} alt="topseed-horizontal" /></A>
		</Link>
	);
};

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

export default TopSeedLogo;