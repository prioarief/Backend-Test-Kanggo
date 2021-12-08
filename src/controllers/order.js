const { sequelize } = require('../db/models');
const service = require('../services/order');
const productService = require('../services/product');
const wrapper = require('../utilities/wrapper');

const create = async (payload, res) => {
	const transaction = await sequelize.transaction();
	try {
		const product = await productService.findOne({ id: payload.product_id });
		if (!product) return wrapper(res, false, 'product not found', null, 404);
		const { qty, price } = product;
		if (payload.qty > qty) {
			transaction.commit();
			return wrapper(res, false, `product available only ${qty}`, null, 400);
		}
		payload.amount = price * payload.qty;
		await service.create(payload, transaction);
		await productService.update(
			{ id: payload.product_id, qty: qty - payload.qty },
			transaction
		);
		transaction.commit();
		return wrapper(res, true, payload, null, 201);
	} catch (error) {
		transaction.rollback();
		console.log(error);
	}
};
const gets = async (payload, res) => {
	try {
		const orders = await service.findAll(payload);
		return wrapper(res, true, orders, null, 200);
	} catch (error) {
		console.log(error);
	}
};
const get = async (payload, res) => {
	try {
		const order = await service.findOne(payload);
		if (!order) return wrapper(res, false, 'order not found', null, 404);
		return wrapper(res, true, order, null, 200);
	} catch (error) {
		console.log(error);
	}
};
const update = async (payload, res) => {
	try {
		await service.update(payload);
		return wrapper(res, true, 'order successful updated', null, 200);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { create, gets, get, update };
