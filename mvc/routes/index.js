var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

let chaptersCtrl = require('../controllers/chapters')

router.route('/chapters')
  .get(chaptersCtrl.getAllChapters)
  .post(chaptersCtrl.createNewChapter)


router.route('/chapters/new')
  .get(chaptersCtrl.getNewChapterForm)

router.route('/chapters/:chapterid')
  .get(chaptersCtrl.getChapter)
  .put(chaptersCtrl.editChapter)
  .delete(chaptersCtrl.deleteChapter)

router.route('/chapters/:chapterid/edit')
  .get(chaptersCtrl.getEditChapterForm)

module.exports = router;
