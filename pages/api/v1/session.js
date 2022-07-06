import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
	const session = getSession(req, res);
	
	console.log("accessToken", session.accessToken);
	console.log("===");
	console.log("refreshToken", session.refreshToken);
	console.log("===");
	console.log("idToken", session.idToken);
	console.log("===");
	console.log("user", JSON.stringify(session.user, null, 2));
	res.status(200).json(session);
});
