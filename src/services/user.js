const { User } = require('../db/models');

const create = async (payload) => {
	return await User.create(payload);
};
const findOne = async (payload) => {
	return await User.findOne({raw: true, where: payload});
};

module.exports = { create, findOne };
