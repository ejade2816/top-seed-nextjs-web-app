import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import Image from "next/image";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from "next/link";

export default function({ link, image }) {
    return (
        <Link href={link}>
            <A>
                <Avatar src={image} alt="avatar-img" sx={{ width: 36, height: 36 }} />
            </A>
        </Link>
    )
}

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

const Icon = styled(FontAwesomeIcon)`
    color: var(--night-rider);
`
