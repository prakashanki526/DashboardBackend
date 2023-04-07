const { Router } = require("express");
const router = Router();
const User = require('../models/User.js');
const jwt = require("jsonwebtoken");
const {Auth, localVariables} = require("../middleware/auth.js");
const {register, login, getUser, generateOTP, verifyOTP, verifyUser, checkUserExist, postData, getData} = require('../controllers/appController.js');
const registerMail = require('../controllers/mailer.js');


// post methods
router.route('/register').post(register);
router.route('/registerMail').post(generateOTP,registerMail);
router.route('/authenticate').post(verifyUser,(req,res)=>res.end());
router.route('/login').post(verifyUser,login);
router.route('/postData').post(postData);


// get methods
router.route('/user/:email').get(getUser);
router.route('/generateOTP').get(localVariables, generateOTP);
router.route('/verifyOTP').get(verifyOTP);
router.route('/doesUserExist/:email').get(checkUserExist);
router.route('/getData').get(getData);

module.exports = router ;

