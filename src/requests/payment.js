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
	}
};

module.exports = { create };
