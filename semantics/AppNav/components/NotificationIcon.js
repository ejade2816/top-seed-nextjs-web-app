import styled from "styled-components"
import PropTypes from 'prop-types';
import GuestProfileIcon from "../../../assets/icons/guest-profile.svg"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const NotificationIcon = () => {
    return (
        <A>
            <FontAwesomeIcon style={{ fontSize: 21 }} icon={faBell} />
        </A>
    )
}

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

export default NotificationIcon;