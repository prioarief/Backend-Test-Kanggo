const Joi = require('joi');
const { hash } = require('../utilities/bcrypt');
const wrapper = require('../utilities/wrapper');
const controller = require('../controller/user');

const register = async (req, res) => {
	try {
		const schema = Joi.object({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string()
				.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, {
					name: 'password',
				})
				.required()
				.messages({
					'string.pattern.name':
						'Password at least 8 characters, 1 numeric character, 1 lowercase letter, 1 uppercase letter and 1 special character',
				}),
		});

		const { error, value } = schema.validate(req.body);
		if (error) return wrapper(res, false, null, error.message, 400);
		value.password = hash(value.password);
		return await controller.register(value, res);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { register };
