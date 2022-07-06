import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const LogoutButton = () => {
	return (
		<Link href="/api/auth/logout">
			<A>Logout</A>
		</Link>
	);
};

const A = styled.a`
    white-space: nowrap;
	cursor: pointer;
	text-decoration: none;
	color: var(--matterhorn);
`;

export default LogoutButton;