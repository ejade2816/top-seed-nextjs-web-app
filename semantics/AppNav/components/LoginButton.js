import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const LoginButton = () => {
	return (
		<Link href="/api/auth/login">
			<A>Login</A>
		</Link>
	);
};

const A = styled.a`
    white-space: nowrap;
	cursor: pointer;
	text-decoration: none;
	color: var(--matterhorn);
`;

export default LoginButton;