const { Payment } = require('../db/models');

const create = async (payload, t) => {
	return await Payment.create(payload, {transaction: t});
};
const findOne = async (payload) => {
	return await Payment.findOne({raw: true, where: payload});
};

module.exports = { create, findOne };
