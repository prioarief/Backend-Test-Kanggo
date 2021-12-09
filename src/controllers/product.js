const service = require('../services/product');
const wrapper = require('../utilities/wrapper');

const create = async (payload, res) => {
	try {
		await service.create(payload);
		return wrapper(res, true, 'product successful created', null, 201);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};
const gets = async (payload, res) => {
	try {
		const products = await service.findAll(payload);
		return wrapper(res, true, products, null, 200);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};
const get = async (payload, res) => {
	try {
		const product = await service.findOne(payload);
		if (!product) return wrapper(res, false, 'product not found', null, 404);
		return wrapper(res, true, product, null, 200);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};
const destroy = async (payload, res) => {
	try {
		const product = await service.findOne(payload);
		if (!product) return wrapper(res, false, 'product not found', null, 404);
		await service.destroy(payload);
		return wrapper(res, true, 'product successful deleted', null, 200);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};
const update = async (payload, res) => {
	try {
		await service.update(payload);
		return wrapper(res, true, 'product successful updated', null, 200);
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};

module.exports = { create, gets, get, update, destroy };
