const express = require('express');
const controllers = require('../controllers/control');
const bigquerycontroller = require('../controllers/bigquerycontroller')
const router = express.Router()

router.get('/mail/subject/:subject',controllers.bysubject);
router.get('/mail/:email',controllers.bymail);
router.get('/query/:Campaign_ID',bigquerycontroller.getbycampaignid)
router.get('/query/productname/:Product_Name',bigquerycontroller.getbyProduct_Name)
router.get('/query/fsnid/:FSN_ID',bigquerycontroller.getbyFSN_ID)
router.get('/query/adgroupid/:Ad_Group_ID',bigquerycontroller.getbyAd_Group_ID)
module.exports = router;