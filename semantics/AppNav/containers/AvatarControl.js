import styled from "styled-components"
import { useUser } from '@auth0/nextjs-auth0';
import Avatar from "../components/Avatar"

const AvatarControl = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (user) return <Avatar link="/profile" image={user.picture} /> 
    return <Avatar link="/api/auth/login?returnTo=/profile"/>
}

export default AvatarControl;