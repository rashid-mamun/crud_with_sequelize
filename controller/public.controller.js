const express = require('express');
const db = require('../config/sequelize');
// const Auth = require('../models/auth');
// const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const authData = {
    email: req.body.email,
    password: hashedPassword,
  };
  const profileData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nid: req.body.nid,
    profilePhoto: req.body.profilePhoto,
    isMarried: req.body.isMarried,
    age: req.body.age,
  };

  try {
    const profile = await db.Profile.create(profileData);
    const auth = await db.Auth.create(authData);

    return res.status(201).json({
      message: 'Record created successfully!',
      response: { profile, auth },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Unable to create a record!',
    });
  }
};
