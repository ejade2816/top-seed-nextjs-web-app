import styles from "../../styles/index.module.css";
import { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler } from "chart.js";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const data = {
	labels: ["A", "B", "C", "D", "E"],
	datasets: [
		{
			data: [9, 10, 7, 6, 5],
			borderWidth: 0,
			backgroundColor: "rgba(170, 179, 255, 0.2)",
		},
		{
			data: [10, 8, 7, 4, 7],
			borderWidth: 0,
			backgroundColor: (context) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(80, 160, 240, 160);
				gradient.addColorStop(0, "rgba(120, 164, 251, 0.5)");
				gradient.addColorStop(1, "rgba(227, 147, 255, 0.5)");
				return gradient;
			},
		},
	],
};

function getPentaPosition(numPoints, r) {
	let penta = [];
	for (let i = 0; i < numPoints; i++) {
		let byRads = i * ((2 * Math.PI) / numPoints);
		let mat = [-Math.cos(byRads), Math.sin(byRads)];
		penta[i] = [mat[0] * r, mat[1] * r];
	}
	return penta.map((p) => [p[0] + r, p[1] + r]);
}

export default function Kittens() {
	return (
		<main className={styles.main}>
			<h1>Kittens</h1>
			<div
				style={{
					margin: "3em",
					width: 960,
					height: 600,
					backgroundImage: "linear-gradient(to right, #263554 0%, #5D455E 100%)",
					borderRadius: 24,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div style={{ width: 360, height: 360, position: "absolute" }}>
					{getPentaPosition(5, 200).map((pos, i) => {
						let x = pos[0] - 40;
						let y = pos[1] - 40;
						return (
							<FontAwesomeIcon
								className="fa-paw"
								key={i}
								style={{
									position: "absolute",
									marginTop: x,
									marginLeft: y,
									color: "grey",
								}}
								layout="fixed"
								size="3x"
								icon={faPaw}
							/>
						);
					})}
				</div>

				<div style={{ width: 320, height: 320 }}>
					<Radar
						data={data}
						options={{
							responsive: true,
							maintainAspectRatio: false,
							elements: {
								point: {
									radius: 0,
								},
								line: {
									tension: 0.1,
								},
							},
							plugins: {
								legend: {
									display: false,
								},
							},
							scales: {
								r: {
									max: 12,
									min: 0,
									ticks: {
										stepSize: 3,
										display: false,
									},
									angleLines: {
										display: false,
									},
									grid: {
										circular: true,
										color: 'rgba(255,255,255, 0.0)',
										display: true,
									},
									pointLabels: {
										display: false,
									},
								},
							},
						}}
						plugins={[
							{
								id: "background-circle",
								beforeDraw: (chart) => {
									const height = chart.height;
									const width = chart.width;
									var centerX = width / 2;
									var centerY = height / 2;
									const ctx = chart.canvas.getContext("2d");
									ctx.save();
									ctx.globalCompositeOperation = "destination-over";
									ctx.beginPath();
									ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
									ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
									ctx.fill();
									ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI);
									ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
									ctx.fill();
									ctx.arc(centerX, centerY, 120, 0, 2 * Math.PI);
									ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
									ctx.fill();
									ctx.arc(centerX, centerY, 160, 0, 2 * Math.PI);
									ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
									ctx.fill();
									ctx.restore();
								},
							},
						]}
					/>
				</div>
			</div>
		</main>
	);
}
