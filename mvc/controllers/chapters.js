const mongoose = require("mongoose")
const Chapter = mongoose.model("Chapter")
const Question = mongoose.model("Question")


getAllChapters = function (req, res, next) {
    Chapter.find((err, chapters) => {
        if(err) {return res.json({error: err})}
        res.json({data: chapters})
    })
}

getNewChapterForm = function (req, res, next) {
    res.json({message: "Get New Chapter Form"})
}

createNewChapter = function (req, res, next) {
    res.json({message: "Create Chapter"})
}

getChapter = function (req, res, next) {
    res.json({message: "Get one Chapter"})
}

getEditChapterForm = function (req, res, next) {
    res.json({message: "Get Edit Chapter Form"})
}

editChapter = function (req, res, next) {
    res.json({message: "Edit Chapter"})
}

deleteChapter = function (req, res, next) {
    res.json({message: "Delete Chapter"})
}

module.exports = {
    getAllChapters,
    getNewChapterForm,
    createNewChapter,
    getChapter,
    getEditChapterForm,
    editChapter,
    deleteChapter
}