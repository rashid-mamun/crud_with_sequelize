const express = require('express');
const db = require('../config/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Auth } = require('../config/sequelize');
require('dotenv').config();

exports.getOneUser = async (req, res) => {
  try {
    if (req.userId != req.params.id) {
      throw 'user is not valid';
    }
    const result = await db.Profile.findOne({
      where: {
        id: req.params.id,
      },
      raw: true,
      include: [
        {
          model: Auth,
          attributes: ['email', 'profileId'],
        },
      ],
    });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
exports.updateOneUser = async (req, res) => {
  const profileData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nid: req.body.nid,
    profilePhoto: req.body.profilePhoto,
    isMarried: req.body.isMarried,
    age: req.body.age,
  };
  try {
    if (req.userId != req.params.id) {
      throw 'user is not valid';
    }
    const result = await db.Profile.update(profileData, {
      where: {
        id: req.params.id,
      },
    });
    return res.json(result);
  } catch (e) {
    console.log('error deleting user:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
exports.deleteOneUser = async (req, res) => {
  try {
    if (req.userId != req.params.id) {
      throw 'user is not valid';
    }
    const result = await db.Profile.destroy({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Auth,
          cascade: true,
        },
      ],
    });
    return res.json(result);
  } catch (e) {
    // console.log('error deleting user:', e);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
exports.getAllUser = async (req, res) => {
  try {
    const result = await db.Profile.findAll({
      raw: true,
      include: [
        {
          model: Auth,
          attributes: ['email', 'profileId'],
        },
      ],
    });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
