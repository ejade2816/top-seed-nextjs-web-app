import styles from "../styles/index.module.css";

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<h1>Index</h1>
			</main>
			<footer className={styles.footer}>
				<h1>Footer</h1>
			</footer>
		</div>
	);
}
