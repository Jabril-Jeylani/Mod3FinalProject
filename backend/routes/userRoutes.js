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
                    name: user.name,
                    email: user.email,
                    token: generateToken(user)
                });
                return
            }
        }
        res.status(401).send({ message: "Invalid email or password"})
    })
);

module.exports = userRouter;
