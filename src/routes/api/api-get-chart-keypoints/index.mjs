import { Middleware } from '../services/Router.mjs';
import Constants from '../services/Constants.mjs';
import chartManager from '../services/ChartManager.mjs';

export default async function (context, req) {
	if (
		await Middleware(
			context,
			req,
			Constants.middleware.CookieCheck,
			Constants.middleware.UserFullyAuthenticated
		)
	) {
		return; // Middleware returned a value so we should not continue
	}

	// // User is querying an existing chart in db to get its keypoints
	await chartManager.getChartKeypoints(context, req);
}
