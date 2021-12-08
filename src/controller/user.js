const service = require('../services/user');
const wrapper = require('../utilities/wrapper');
const register = async (payload, res) => {
	try {
        const emailIsExist = await service.findOne({ email: value.email });
		if (emailIsExist)
			return wrapper(res, false, null, 'email is already exist', 400);
		await service.create(payload);
		return wrapper(res, true, 'register success', null, 201);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { register };
