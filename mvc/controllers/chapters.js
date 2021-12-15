const mongoose = require("mongoose")
const Chapter = mongoose.model("Chapter")
const Question = mongoose.model("Question")


getAllChapters = function (req, res, next) {
    Chapter.find((err, chapters) => {
        if(err) {return res.json({error: err})}
        res.json({data: chapters})
    })
}

createNewChapter = function ({body}, res, next) {
    const chapter = new Chapter()
    chapter.name = body.name
    chapter.number = body.number
    chapter.questions = body.questions
    chapter.save((err, savedChapter) => {
        if(err) return res.json(err)
        return res.json(savedChapter)
    })
}

getChapter = function ({params}, res) {
    Chapter.findOne({'number': params.chapter_number}).then(chapter => {
        return res.json(chapter)
    }).catch(err => {
        return res.json(err)
    })
}

editChapter = function ({body}, res, next) {
    Chapter.findOne({'number': params.chapter_number}).then(chapter => {
        chapter = body.newChapter
        chapter.save((err, savedChapter) => {
            if(err) return res.json(err)
            return res.json(savedChapter)
        })

    })
}

deleteChapter = function ({params}, res, next) {
    Chapter.findOne({'number': params.chapter_number}).then(chapter => {
        chapter.remove()
        return res.json({message: "Chapter Successfully deleted"})
    }).catch(err => {
        return res.json(err)
    })
}

module.exports = {
    getAllChapters,
    createNewChapter,
    getChapter,
    editChapter,
    deleteChapter
}