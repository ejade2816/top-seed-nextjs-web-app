import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const PostASeedButton = () => {
	return (
		<button onClick={() => {
			// axios.get("https://f56f6867-9d6d-43e4-9a8e-a6150c16b95c.mock.pstmn.io/topseed/mock/api/hello").then(res => console.log(res));
			axios.get("/api/v2/hello").then(res => console.log(res));
		}}>
			<A>Post a seed</A>
		</button>
	);
};

const A = styled.a`
    white-space: nowrap;
	cursor: pointer;
	text-decoration: none;
	color: var(--matterhorn);
`;

export default PostASeedButton;