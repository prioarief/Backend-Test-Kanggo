const { Product } = require('../db/models');

const create = async (payload) => {
	return await Product.create(payload);
};
const update = async (payload) => {
	return await Product.update(payload, {where: {id: payload.id}});
};
const findOne = async (payload) => {
	return await Product.findOne({raw: true, where: payload});
};
const destroy = async (payload) => {
	return await Product.destroy({where: payload});
};
const findAll = async (payload) => {
	return await Product.findAll({raw: true, where: payload});
};

module.exports = { create, findOne, findAll, update, destroy };
