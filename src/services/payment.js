const { Payment, Order } = require("../db/models");

const create = async (payload, t) => {
  return await Payment.create(payload, { transaction: t });
};
const findOne = async (payload) => {
  return await Payment.findOne({
    raw: true,
    where: payload,
    include: [
      { model: Order },
    ],
  });
};
const findAll = async (payload) => {
  return await Payment.findAll({
    raw: true,
    where: payload,
    include: [
      { model: Order },
    ],
  });
};

module.exports = { create, findOne, findAll };
