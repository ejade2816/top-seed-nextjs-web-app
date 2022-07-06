import styled from "styled-components"
import PropTypes from 'prop-types';

const ControlMenu = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
`

export default ControlMenu;