import styles from "../../styles/index.module.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";
import axios from "axios"

const Profile = () => {
    const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
	if (user) return (
		<main className={styles.main}>
			<h1>Profile</h1>
			<p>id: {user.sub}</p>
			<p>family_name: {user.family_name}</p>
			<p>given_name: {user.given_name}</p>
			<p>email: {user.email}</p>
			<button onClick={() => {
				axios.get("/api/v1/session").then(res => {
					console.log(res.data)
				}).catch(e => console.log(e))
			}}>print session</button>
			<Link href="/api/auth/logout">
				<a>Logout</a>
			</Link>
		</main>
	);
	return <div></div>
}

export default withPageAuthRequired(Profile);