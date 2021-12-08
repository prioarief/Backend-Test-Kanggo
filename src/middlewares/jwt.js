const jwt = require('jsonwebtoken');
const wrapper = require('../utilities/wrapper');

const tokenCheck = async (req, res, next) => {
	try {
		const isValid = jwt.verify(
			req.headers.authorization.split(' ').pop(),
			process.env.JWT_KEY
		);
		req.decoded = isValid;
		next();
	} catch (error) {
		if (error.name == 'TokenExpiredError') {
			return wrapper(res, false, null, 'Token Expired', 401);
		}
		return wrapper(res, false, null, 'Invalid token', 401);
	}
};

module.exports = { tokenCheck };
