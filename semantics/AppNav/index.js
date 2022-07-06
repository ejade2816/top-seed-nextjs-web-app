import styled from "styled-components"
import PropTypes from 'prop-types';
import TopSeedLogo from "./components/TopSeedLogo";
import PageMenu from "./components/PageMenu";
import ControlMenu from "./components/ControlMenu";
import PostASeedButton from "./components/PostASeedButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import AvatarControl from "./containers/AvatarControl";

const HeaderNav = () => {
    return (
        <Nav>
            <Container>
                <BrandContainer>{<TopSeedLogo/>}</BrandContainer>
                <PageMenuContainer>{<PageMenu/>}</PageMenuContainer>
                <ControlContainer>{
                    <ControlMenu>
                        <AvatarControl/>
                    </ControlMenu>
                }</ControlContainer>
            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
    z-index: 9999;
    width: 100%;
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(20px);
`

const Container = styled.div`
    height: 44px;
    width: 100%;
    max-width: 1920px;
    margin: 18px;
    display: flex;
    align-items: center;
    
`

const BrandContainer = styled.div`
    height: 44px;
    flex: 1;
    display: flex;
    align-items: center;
`

const PageMenuContainer = styled.div`
    height: 44px;
    flex: 1;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`

const ControlContainer = styled.div`
    height: 44px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export default HeaderNav;