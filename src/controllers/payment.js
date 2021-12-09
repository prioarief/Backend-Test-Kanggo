const service = require('../services/payment');
const orderService = require('../services/order');
const wrapper = require('../utilities/wrapper');
const { sequelize } = require('../db/models');

const create = async (payload, res) => {
	const t = await sequelize.transaction()
	try {
		const order = await orderService.findOne({ id: payload.order_id });
		if (!order)
			return wrapper(res, false, null, 'order not found', 404);
        payload.amount = order.amount
        payload.status = "paid"
		payload.id = payload.order_id
		await service.create(payload, t);
		await orderService.update({status: 'paid', id: payload.order_id})
		t.commit()
		return wrapper(res, true, 'create success', null, 201);
	} catch (error) {
		t.rollback()
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
};

const getAll = async (res) => {
	try {
		const payments = await service.findAll({})
		return wrapper(res, true, payments, null, 200)
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
}
const get = async (payload, res) => {
	try {
		const payments = await service.findOne(payload)
		return wrapper(res, true, payments, null, 200)
	} catch (error) {
		console.log(error);
		return wrapper(res, false, null, "Server Error", 500)
	}
}

module.exports = { create, get, getAll };
