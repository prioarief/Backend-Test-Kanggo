const { Payment } = require('../db/models');

const create = async (payload) => {
	return await Payment.create(payload);
};
const findOne = async (payload) => {
	return await Payment.findOne({raw: true, where: payload});
};

module.exports = { create, findOne };
