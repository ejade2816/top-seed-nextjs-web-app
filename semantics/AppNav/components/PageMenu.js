import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const pages = [
	{
		title: "Home",
		link: "/home",
	},
	{
		title: "Kittens",
		link: "/kitten",
	},
	{
		title: "Products",
		link: "/product",
	},
	{
		title: "About",
		link: "/about",
	},
];

const PageMenu = () => {
	return (
		<Ul>
			{pages.map((page) => (
				<Li key={page.title}>
					<Link href={page.link}>
						<A>{page.title}</A>
					</Link>
				</Li>
			))}
		</Ul>
	);
};

const Ul = styled.ul`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 32px;
	padding: 0px;
	margin: 0px;
`;

const Li = styled.li`
	list-style-type: none;
`;

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: var(--matterhorn)
`;

export default PageMenu;
