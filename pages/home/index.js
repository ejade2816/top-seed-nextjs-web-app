import styled from "styled-components";
import Image from "next/image";
import HomeDiscoverSection from "../../semantics/HomeDiscoverSection";
import HomeAmenitySection from "../../semantics/HomeAmenitySection";

export default function Home() {
	return (
		<Main>
			<HomeDiscoverSection/>
			<HomeAmenitySection/>
		</Main>
	);
}

const Main = styled.main`
`;