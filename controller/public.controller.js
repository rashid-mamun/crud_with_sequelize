const express = require('express');
const db = require('../config/sequelize');
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
    let auth;
    if (profile && profile.id) {
      authData.profileId = profile.id;
      auth = await db.Auth.create(authData);
    }

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

exports.login = async (req, res) => {
  try {
    const user = await db.Auth.findOne({
      attributes: ['id',  'email','password'],
      where: {
        email: req.body.email,
      },
    });
    // console.log(user.dataValues);
    if (user) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.dataValues.password
      );

      if (isValidPassword) {
        /* 
                generate token
            */
        const token = jwt.sign(
          {
            email: user.dataValues.email,
            userId: user.dataValues.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h',
          }
        );

        res.status(200).json({
          access_token: token,
          message: 'login  successful!',
        });
      } else {
        res.status(401).json({
          error: 'Authetication failed!',
        });
      }
    } else {
      res.status(401).json({
        error: 'Authetication failed!',
      });
    }
  } catch (err) {
    res.status(401).json({
      error: 'Authetication failed!' + err.message,
    });
  }
};
