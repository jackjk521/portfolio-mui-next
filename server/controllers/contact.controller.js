// const { Sequelize, Op, QueryTypes } = require("sequelize");
const { Sequelize } = require('sequelize');
const Contact = require("../models/contact_model");
// const HttpStatus = require("http-status-codes");

exports.store = async function (req, res) {
  try {
    await Contact.create({
      ...req.body,
    }).then((contact) => {
      res.json({
        success: true,
        data: contact,
      });
    });
  } catch (error) {
    return res.status(error.response.status).json({
      error: error,
    });
  }
};
