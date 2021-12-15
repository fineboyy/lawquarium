var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

let chaptersCtrl = require('../controllers/chapters')

router.route('/chapters')
  .get(chaptersCtrl.getAllChapters)
  .post(chaptersCtrl.createNewChapter)

router.route('/chapters/:chapter_number')
  .get(chaptersCtrl.getChapter)
  .put(chaptersCtrl.editChapter)
  .delete(chaptersCtrl.deleteChapter)

module.exports = router;
