const service = require('../services/payment');
const orderService = require('../services/order');
const wrapper = require('../utilities/wrapper');

const create = async (payload, res) => {
	try {
		const order = await orderService.findOne({ id: payload.order_id });
		if (!order)
			return wrapper(res, false, null, 'order not found', 404);
        payload.amount = order.amount
        payload.status = "paid"
        console.log(payload)
		await service.create(payload);
		return wrapper(res, true, 'create success', null, 201);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { create };
