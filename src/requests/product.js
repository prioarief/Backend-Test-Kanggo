const Joi = require('joi');
const wrapper = require('../utilities/wrapper');
const controller = require('../controllers/product');


const create = async (req, res) => {
	try {
		const schema = Joi.object({
			name: Joi.string().required(),
			qty: Joi.number().required(),
			price: Joi.number().required(),
		});

		const { error, value } = schema.validate(req.body);
		if (error) return wrapper(res, false, null, error.message, 400);
		return await controller.create(value, res);
	} catch (error) {
		console.log(error);
	}
};
const gets = async (req, res) => {
	try {
		return await controller.gets({}, res);
	} catch (error) {
		console.log(error);
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
	}
};
const destroy = async (req, res) => {
	try {
		const schema = Joi.object({
			id: Joi.number().required(),
		});

		const { error, value } = schema.validate(req.params);
		if (error) return wrapper(res, false, null, error.message, 400);
		return await controller.destroy(value, res);
	} catch (error) {
		console.log(error);
	}
};
const update = async (req, res) => {
	try {
		const schema = Joi.object({
			id: Joi.number().required(),
            name: Joi.string().required(),
			qty: Joi.number().required(),
			price: Joi.number().required(),
		});

		const { error, value } = schema.validate({...req.params, ...req.body});
		if (error) return wrapper(res, false, null, error.message, 400);
		return await controller.update(value, res);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { create, gets, get, update, destroy };
