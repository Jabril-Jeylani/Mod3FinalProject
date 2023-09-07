const express = require("express");
const bcrypt = require('bcryptjs')
const userRouter = express.Router();
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
const { generateToken } = require("../utils.js");


userRouter.post(
	"/signin",
	expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.username,
                    email: user.email,
                    token: generateToken(user)
                });
                return
            }
        }
        res.status(401).send({ message: "Invalid email or password"})
    })
);

userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
      const newUser = new User({
        username: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      });
      const user = await newUser.save();
      res.send({
        _id: user._id,
        name: user.username,
        email: user.email,
        token: generateToken(user),
      });
    })
  );
  
  

module.exports = userRouter;
