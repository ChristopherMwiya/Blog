const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true}));

const { deleteOne ,singleNews , postNews ,postBlog , singleBlog ,Create, news ,loginPage , Blogs,signUp,authSignUp,login } = require("./Controller/controller.js");


router.route('/signUp').get(signUp).post(authSignUp);
router.route('/').post(login).get(loginPage);
router.route('/Blogs').get(Blogs)
.post(postBlog)
router.route('/News').get(news).post(postNews);
router.route('/Create').get(Create)
router.route('/Blogs/:id').get(singleBlog).delete (deleteOne);
router.route('/News/:id').get(singleNews).delete (deleteOne);
module.exports = router;