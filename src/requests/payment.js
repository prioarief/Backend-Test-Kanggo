const Joi = require('joi');
const wrapper = require('../utilities/wrapper');
const controller = require('../controllers/payment');

const create = async (req, res) => {
	try {
		const schema = Joi.object({
			order_id: Joi.number().required(),
		});

		const { error, value } = schema.validate(req.body);
		if (error) return wrapper(res, false, null, error.message, 400);
		return await controller.create(value, res);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};
const gets = async (req, res) => {
	try {
		// const schema = Joi.object({
		// 	order_id: Joi.number().required(),
		// });

		// const { error, value } = schema.validate(req.body);
		// if (error) return wrapper(res, false, null, error.message, 400);
		return await controller.getAll(res);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};
const get = async (req, res) => {
	try {
		const schema = Joi.object({
			id: Joi.number().required(),
		});

		const { error, value } = schema.validate(req.params);
		if (error) return wrapper(res, false, null, error.message, 400);
		return await controller.get(value, res);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};

module.exports = { create, gets, get };
