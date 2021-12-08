const service = require('../services/user');
const wrapper = require('../utilities/wrapper');
const { compare } = require('../utilities/bcrypt');
const { createToken } = require('../utilities/jwt');

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
const login = async (payload, res) => {
	try {
		const user = await service.findOne({ email: payload.email });
		if (!user) return wrapper(res, false, null, 'email is not registered', 400);
		if (!compare(payload.password, user.password))
			return wrapper(res, false, null, 'password wrong, please try again', 400);
		user.token = createToken(user)
		delete user.password;
		delete user.id;
		return wrapper(res, true, user, null, 200);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { register, login };
