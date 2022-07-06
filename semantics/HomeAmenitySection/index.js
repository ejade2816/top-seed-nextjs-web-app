import styled from "styled-components";
import Amenity from "./components/Amenity";
import shield from "../../assets/icons/shield.svg";
import photo from "../../assets/icons/photo.svg";
import videoCall from "../../assets/icons/video-call.svg";
import airplane from "../../assets/icons/airplane.svg";

const amentites = [
    {
        title: "Registered and Ethical",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		icon: shield
    },
    {
        title: "Most Detailed",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		icon: photo
    },
    {
        title: "Easy Communication",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		icon: videoCall
    },
    {
        title: "Safe Delivery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		icon: airplane
    }
]

export default function HomeAmenitySection() {
	return (
		<Section>
			<Ul>
				{amentites.map(amenity => {
					return (
						<Li key={amenity.title}>
							<Amenity title={amenity.title} description={amenity.description} icon={amenity.icon}/>
						</Li>
					)
				})}
			</Ul>
		</Section>
	);
}

const Section = styled.section`
	flex: 1;
	padding: 1em;
`

const Ul = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px;
	gap: 1em 1em;
	flex-wrap: wrap;
`;

const Li = styled.li`
	list-style-type: none;
`;