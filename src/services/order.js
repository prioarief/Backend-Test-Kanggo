const { Order, Product, User } = require('../db/models');

const create = async (payload, t) => {
	return await Order.create(payload, {transaction: t});
};
const update = async (payload) => {
	return await Order.update(payload, { where: { id: payload.id } });
};
const findOne = async (payload) => {
	return await Order.findOne({
		raw: true,
		where: payload,
		include: [
			{ model: Product, attributes: ['name', 'price'] },
			{ model: User, attributes: ['name', 'email'] },
		],
	});
};
const destroy = async (payload) => {
	return await Order.destroy({ where: payload });
};
const findAll = async (payload) => {
	return await Order.findAll({
		raw: true,
		where: payload,
		include: [
			{ model: Product, attributes: ['name', 'price'] },
			{ model: User, attributes: ['name', 'email'] },
		],
	});
};

module.exports = { create, findOne, findAll, update, destroy };
