import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchIcon = () => {
    return (
        <A>
            <FontAwesomeIcon layout="fixed" icon={faMagnifyingGlass}/>
        </A>
    )
}
  
const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

export default SearchIcon;